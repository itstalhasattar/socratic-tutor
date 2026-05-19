"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import ModelMessage from "./ModelMessage";
import ModelLoading from "./ModelLoading";
import { TMessage, TMessagesHistory } from "@/consts/chat";
import { toast } from "sonner";

const INITIAL_MESSAGE: TMessage = {
  role: "assistant",
  content:
    "What would you like to explore today? Choose a concept, problem, or idea to think through.",
};

export default function ChatSession() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<TMessagesHistory>([INITIAL_MESSAGE]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }
  }, [messages]);

  function handleClear() {
    setMessages([INITIAL_MESSAGE]);
    setInput("");
    toast.success("Started a fresh conversation");
  }

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  async function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedMessage = input.trim();

    if (!trimmedMessage) return;

    const newMessage: TMessage = {
      role: "user",
      content: trimmedMessage,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (!isMobile) {
      inputRef.current?.focus();
    }
    setLoading(true);

    try {
      // We build the logic here later
      console.log(newMessage);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMessages),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        const errorMessage = getErrorMessage(result.error);

        toast.error(errorMessage);
        console.log("Error", result.error);
        return;
      }

      const newModelMessage: TMessage = {
        role: "assistant",
        content: result.message,
      };
      setMessages((prev) => [...prev, newModelMessage]);

      console.log("success");
    } catch (err) {
      console.error(err);
      toast.error("The tutor hit a snag. Give it a moment and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex flex-col h-dvh bg-[#FAFAF7]">
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
          <div className="flex items-center gap-2">
            {userMessageCount > 1 && (
              <button
                onClick={handleClear}
                className="px-3 py-1.5 text-xs font-medium text-[#4A4A4A] transition-colors rounded-full hover:text-[#1E2A47] hover:bg-[#F1EFE8]"
              >
                Start over
              </button>
            )}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F1EFE8] to-[#FAFAF7] border border-[#E5E5E2]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#D4A24C] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-800" />
              </span>
              <span className="text-xs font-medium text-[#1E2A47]">
                Session Active
              </span>
            </div>

            {/* Mobile: just the dot */}
            <div className="sm:hidden flex items-center justify-center w-9 h-9">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#D4A24C] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-800" />
              </span>
            </div>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4A24C]/30 to-transparent" />
      </header>

      {/* Messages */}
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl px-4 sm:px-6 py-6 sm:py-8 mx-auto space-y-5">
          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <ModelMessage key={i} message={m.content} />
            ) : (
              <UserMessage key={i} message={m.content} />
            ),
          )}
          {loading && <ModelLoading />}
        </div>
      </main>

      {/* Input bar */}
      <footer className="border-t border-[#E5E5E2] bg-white">
        <div className="max-w-3xl px-6 py-4 mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[11px] text-[#4A4A4A]">
              {userMessageCount}/20 questions asked
            </p>

            {userMessageCount >= 20 && (
              <p className="text-[11px] text-red-500 ml-auto">
                Session limit reached. Tap &quot;Start over&quot; for a new
                conversation.
              </p>
            )}
            {input.length > 0 && (
              <p
                className={`text-[11px] ml-auto ${input.length > 2900 ? "text-red-500" : "text-[#4A4A4A]"}`}
              >
                {input.length}/3000
              </p>
            )}
          </div>
          <form
            onSubmit={handleMessage}
            className="flex items-center gap-2 bg-[#FAFAF7] border border-[#E5E5E2] rounded-full px-4 sm:px-5 py-2.5 focus-within:border-[#1E2A47] transition-colors"
          >
            <input
              ref={inputRef}
              disabled={userMessageCount >= 20}
              type="text"
              name="message"
              readOnly={loading}
              placeholder="Type your answer or ask a question..."
              className={`flex-1 bg-transparent text-base sm:text-[15px] text-[#1E2A47] placeholder:text-[#4A4A4A] focus:outline-none ${
                loading ? "opacity-60" : ""
              }`}
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
          <p className="mt-2 text-xs sm:text-[11px] text-[#4A4A4A] text-center">
            Press Enter to send &middot; Token usage limited per conversation
          </p>
        </div>
      </footer>
    </section>
  );
}

function getErrorMessage(error: unknown) {
  if (typeof error === "string") {
    return error;
  }

  if (error && typeof error === "object") {
    const zodError = error as {
      formErrors?: string[];
      fieldErrors?: Record<string, string[]>;
    };

    const formError = zodError.formErrors?.[0];
    if (formError) {
      return formError;
    }

    const fieldError = Object.values(zodError.fieldErrors ?? {})[0]?.[0];
    if (fieldError) {
      return fieldError;
    }
  }

  return "Something went wrong with your request. Try rephrasing your message.";
}
