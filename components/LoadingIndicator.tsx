"use client";

import { useState, useEffect } from "react";
import { LOADING_QUOTES } from "@/lib/constants";

export default function LoadingIndicator() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % LOADING_QUOTES.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-[#c9a22740] border-t-[#c9a227] animate-spin shrink-0 opacity-80" />
      <span className="text-sm italic text-[#c9a22780] transition-opacity duration-500">
        {LOADING_QUOTES[idx]}
      </span>
    </div>
  );
}
