"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Message } from "@/types";
import { API_URL } from "@/lib/constants";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import MessageDivider from "@/components/MessageDivider";
import MessageBubble from "@/components/MessageBubble";
import LoadingIndicator from "@/components/LoadingIndicator";
import ChatInput from "@/components/ChatInput";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextId, setNextId] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const latestAssistantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (messages[messages.length - 1]?.role === "assistant") {
      latestAssistantRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [messages, loading]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const query = input.trim();
    if (!query || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { id: nextId, role: "user", content: query }]);
    setNextId((n) => n + 1);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, corpus: "both", top_k: 5 }),
      });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: nextId + 1, role: "assistant", content: data.answer, sources: data.sources },
      ]);
      setNextId((n) => n + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: nextId + 1, role: "assistant", content: "The palantír has gone dark. The FastAPI service may not be running." },
      ]);
      setNextId((n) => n + 1);
    } finally {
      setLoading(false);
    }
  }

  const lastAssistantId = [...messages].reverse().find((m) => m.role === "assistant")?.id;

  return (
    <div className="relative z-10 flex flex-col h-screen w-full max-w-3xl mx-auto px-8">
      <header className="shrink-0 text-center pt-8 pb-2">
        <h1
          className="text-4xl md:text-5xl text-[#c9a227] mb-2 tracking-wide drop-shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "Ringbearer, Georgia, serif" }}
          onClick={() => { setMessages([]); setNextId(0); setInput(""); }}
        >
          The Palantír
        </h1>
        <p className="text-[#f5e6c8]/40 text-sm italic tracking-widest">
          Oracle of Middle-earth
        </p>
        <OrnamentalDivider />
      </header>

      {messages.length === 0 && <EmptyState />}

      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="flex flex-col gap-2 py-4">
            {messages.map((msg, i) => (
              <div
                key={msg.id}
                ref={msg.role === "assistant" && msg.id === lastAssistantId ? latestAssistantRef : null}
              >
                {i > 0 && <MessageDivider />}
                <div className="py-2">
                  <MessageBubble
                    message={msg}
                    animate={msg.role === "assistant" && msg.id === lastAssistantId}
                  />
                </div>
              </div>
            ))}
            {loading && (
              <div className="py-2">
                <LoadingIndicator />
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      <ChatInput
        input={input}
        loading={loading}
        onChange={setInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
