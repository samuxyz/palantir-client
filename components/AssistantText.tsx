import ReactMarkdown from "react-markdown";

const mdComponents = {
  p: ({ children }: { children: React.ReactNode }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }: { children: React.ReactNode }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
  ul: ({ children }: { children: React.ReactNode }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
  ol: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
  li: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  code: ({ children }: { children: React.ReactNode }) => <code className="bg-black/10 rounded px-1 font-mono text-sm">{children}</code>,
};

export default function AssistantText({ text, animate }: { text: string; animate: boolean }) {
  return (
    <div className={animate ? "fade-in" : ""}>
      <ReactMarkdown components={mdComponents}>{text}</ReactMarkdown>
    </div>
  );
}
