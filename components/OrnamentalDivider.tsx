export default function OrnamentalDivider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a22760]" />
      <span className="text-[#c9a22760] text-xs select-none">✦</span>
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <span className="text-[#c9a22760] text-xs select-none">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a22760]" />
    </div>
  );
}
