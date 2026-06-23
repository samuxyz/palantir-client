export type Source = {
  text: string;
  source: string;
  chapter_or_page: string;
  score: number;
};

export type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
};
