import ReactMarkdown, { Components } from "react-markdown";

const mdComponents: Components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  code: ({ children, ...props }) => <code className="bg-black/10 rounded px-1 font-mono text-sm" {...props}>{children}</code>,
};

export default function AssistantText({ text, animate }: { text: string; animate: boolean }) {
  return (
    <div className={animate ? "fade-in" : ""}>
      <ReactMarkdown components={mdComponents}>{text}</ReactMarkdown>
    </div>
  );
}
