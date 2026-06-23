import { Message } from "@/types";
import AssistantText from "./AssistantText";
import SourceCard from "./SourceCard";

export default function MessageBubble({ message, animate }: { message: Message; animate: boolean }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex flex-col gap-3 ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-2xl px-5 py-4 rounded-lg leading-relaxed text-base ${
          isUser
            ? "bg-[#c9a227] text-[#0d0e14] font-medium"
            : "bg-[#f5e6c8] text-[#1c1e28] border border-[#c9a22730] shadow-md"
        }`}
      >
        {isUser
          ? <p className="whitespace-pre-wrap">{message.content}</p>
          : <AssistantText text={message.content} animate={animate} />
        }
      </div>
      {message.sources && message.sources.length > 0 && (
        <div className="w-full max-w-2xl flex flex-col gap-2">
          <p className="text-[#c9a22770] text-xs tracking-widest uppercase">
            ✦ From the Texts
          </p>
          {message.sources.map((s, i) => (
            <SourceCard key={i} source={s} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
