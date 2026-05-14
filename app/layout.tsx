import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Socratic Tutor",
  description: "A tutor that doesn't give you answers, but helps you find them yourself. Built on the Socratic method and powered by Claude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
