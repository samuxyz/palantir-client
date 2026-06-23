"use client";

import { useState } from "react";
import { Source } from "@/types";

export default function SourceCard({ source, index }: { source: Source; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border border-[#c9a22730] rounded bg-[#0d0e14]/80 text-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-2 flex items-center justify-between gap-2 hover:bg-[#c9a22710] transition-colors cursor-pointer"
      >
        <span className="text-[#c9a227] font-medium">
          [{index + 1}] {source.chapter_or_page || source.source}
        </span>
        <span className="text-[#c9a22760] text-xs shrink-0">
          {expanded ? "▲ conceal" : "▼ reveal passage"}
        </span>
      </button>
      {expanded && (
        <p className="px-4 pb-4 pt-2 text-[#f5e6c8]/60 italic leading-relaxed border-t border-[#c9a22720] text-sm">
          {source.text.length > 500 ? source.text.slice(0, 500) + "…" : source.text}
        </p>
      )}
    </div>
  );
}
