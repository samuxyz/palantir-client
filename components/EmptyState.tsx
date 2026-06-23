export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
      <img
        src="/the-one-ring-text.svg"
        alt="The One Ring inscription"
        className="w-64 ring-glow-img opacity-90"
      />
      <div>
        <p className="text-[#f5e6c8]/80 text-xl leading-relaxed max-w-sm">
          Ask anything of the War of the Ring, the Fellowship, or the ancient lore of Middle-earth.
        </p>
      </div>
      <p className="text-[#f5e6c8]/35 italic text-sm mt-1">
        &ldquo;Even the very wise cannot see all ends.&rdquo; — Gandalf
      </p>
    </div>
  );
}
