import { FormEvent } from "react";

type Props = {
  input: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
};

export default function ChatInput({ input, loading, onChange, onSubmit }: Props) {
  return (
    <div className="shrink-0 py-4">
      <form onSubmit={onSubmit} className="relative">
        <div className="absolute inset-0 rounded-lg bg-[#c9a227] blur-lg opacity-10 pointer-events-none" />
        <div className="relative flex gap-2 bg-[#0d0e14] border border-[#c9a22750] rounded-lg p-2 shadow-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Seek knowledge of Middle-earth…"
            disabled={loading}
            className="flex-1 bg-transparent text-[#f5e6c8] placeholder-[#f5e6c840] px-3 py-2 outline-none text-base"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-2 bg-[#c9a227] text-[#0d0e14] rounded font-semibold text-sm tracking-widest uppercase
                       hover:bg-[#e8c84a] transition-colors disabled:cursor-not-allowed cursor-pointer"
          >
            Seek
          </button>
        </div>
      </form>
      <p className="text-center text-[#f5e6c8]/45 text-xs mt-3 italic tracking-wide">
        Answers told as lore, drawn from the texts of Middle-earth
      </p>
    </div>
  );
}
