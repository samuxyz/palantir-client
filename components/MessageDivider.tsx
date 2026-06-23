export default function MessageDivider() {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className="flex-1 h-px bg-[#c9a22718]" />
      <span className="text-[#c9a22730] text-[10px] select-none">⸻</span>
      <div className="flex-1 h-px bg-[#c9a22718]" />
    </div>
  );
}
