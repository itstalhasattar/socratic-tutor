"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import ModelMessage from "./ModelMessage";
import { TMessage, TMessagesHistory } from "@/consts/chat";

export default function ChatSession() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<TMessagesHistory>([
    {
      role: "assistant",
      content:
        "What would you like to explore today? Choose a concept, problem, or idea to think through.",
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedMessage = input.trim();

    if (!trimmedMessage) return;

    const newMessage: TMessage = {
      role: "user",
      content: trimmedMessage,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      // We build the logic here later
      console.log(newMessage);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const modelReply: TMessage = {
        role: "assistant",
        content: "Good question. Let’s think through it step by step.",
      };

      setMessages((prevMessages) => [...prevMessages, modelReply]);

      
    } catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex flex-col h-screen bg-[#FAFAF7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E5E5E2]/80 shadow-[0_1px_0_rgba(30,42,71,0.02)]">
        <div className="flex items-center justify-between w-full h-16 px-4 md:px-8">
          {/* Left cluster: back + brand */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/"
              className="group flex items-center justify-center w-9 h-9 rounded-lg text-[#4A4A4A] hover:text-[#1E2A47] hover:bg-[#F1EFE8] transition-all"
              aria-label="Back to home"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-x-0.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>

            <div className="w-px h-6 bg-[#E5E5E2] mx-1 hidden md:block" />

            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-[#D4A24C]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative"
                >
                  <path
                    d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                    fill="none"
                    stroke="#1E2A47"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="50" r="12" fill="#D4A24C" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#4A4A4A] font-medium">
                  Socratic
                </span>
                <h1 className="text-base font-extrabold tracking-tight text-[#1E2A47] font-serif-head">
                  Tutor
                </h1>
              </div>
            </Link>
          </div>

          {/* Right cluster: status */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F1EFE8] to-[#FAFAF7] border border-[#E5E5E2]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#D4A24C] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#D4A24C]" />
              </span>
              <span className="text-xs font-medium text-[#1E2A47]">
                Session active
              </span>
            </div>

            {/* Mobile: just the dot */}
            <div className="sm:hidden flex items-center justify-center w-9 h-9">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#D4A24C] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#D4A24C]" />
              </span>
            </div>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4A24C]/30 to-transparent" />
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl px-6 py-8 mx-auto space-y-5">
          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <ModelMessage key={i} message={m.content} />
            ) : (
              <UserMessage key={i} message={m.content} />
            ),
          )}
          {loading && <ModelMessage message="Thinking..." />}
          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input bar */}
      <footer className="border-t border-[#E5E5E2] bg-white">
        <div className="max-w-3xl px-6 py-4 mx-auto">
          <form
            onSubmit={handleMessage}
            className="flex items-center gap-2 bg-[#FAFAF7] border border-[#E5E5E2] rounded-full px-5 py-2.5 focus-within:border-[#1E2A47] transition-colors"
          >
            <input
              type="text"
              name="message"
              disabled={loading}
              placeholder="Type your answer or ask a question..."
              className="flex-1 bg-transparent text-[15px] text-[#1E2A47] placeholder:text-[#4A4A4A] focus:outline-none "
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              disabled={loading || !input.trim()}
              type="submit"
              className="flex items-center justify-center w-9 h-9 text-white transition-colors rounded-full bg-[#1E2A47] hover:bg-[#2a3a60] disabled:bg-[#E5E5E2] disabled:text-[#4A4A4A] disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </footer>
    </section>
  );
}
