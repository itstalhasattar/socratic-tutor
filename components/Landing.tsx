import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen lg:h-screen lg:flex lg:flex-col">
      <section className="flex flex-1 items-center justify-center px-6 py-10 lg:py-6">
      <div className="grid items-center w-full max-w-6xl gap-10 mx-auto lg:grid-cols-2 lg:gap-16">
        {/* Left column: intro */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="w-16 mb-4 lg:w-20">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                fill="none"
                stroke="#1E2A47"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="50" r="12" fill="#D4A24C" />
              <path
                d="M50 35 L50 42 M50 58 L50 65"
                stroke="#1E2A47"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#1E2A47] md:text-5xl lg:text-6xl font-serif-head">
            Socratic Tutor
          </h1>

          <p className="mt-4 text-lg leading-snug text-[#1E2A47] md:text-xl">
            Learn by thinking, not by copying.
          </p>

          <p className="max-w-md mt-5 leading-relaxed text-[#4A4A4A]">
            A tutor that never gives you the answer &mdash; it asks the right
            question at the right time until you figure things out yourself.
            Pick any topic: math, programming, science, philosophy. Claude
            adapts to your level and guides you step by step.
          </p>

          <div className="max-w-md mt-8 space-y-3 text-left">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D4A24C]">
              What to know
            </p>
            <div className="grid gap-2.5 text-sm leading-relaxed text-[#4A4A4A]">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#D4A24C]" />
                <span>20 questions per session &mdash; make them count.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#D4A24C]" />
                <span>Shared daily token budget &mdash; the tutor is free, not unlimited.</span>
              </div>
            </div>
          </div>

          <Link
            href="/learn"
            className="px-8 py-3 mt-8 font-medium text-white transition-all rounded-lg cursor-pointer bg-[#1E2A47] hover:bg-[#2a3a60] hover:scale-[1.02]"
          >
            Start learning
          </Link>
        </div>

        {/* Right column: sample conversation */}
        <div className="hidden w-full lg:block">
          <p className="mb-3 text-xs tracking-wider text-center uppercase text-[#4A4A4A] lg:text-left">
            Here&apos;s how a session might go
          </p>

          <div className="flex flex-col gap-3 p-5 bg-white border border-[#E5E5E2] rounded-2xl md:p-6">
            <div className="flex justify-end opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-2.5 text-white">
                <p className="text-sm">
                  What&apos;s the derivative of x squared?
                </p>
              </div>
            </div>

            <div className="flex justify-start gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 15 L82 32 L82 68 L50 85 L18 68 L18 32 Z"
                    fill="none"
                    stroke="#1E2A47"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-2.5">
                <p className="text-sm text-[#1E2A47]">
                  Do you remember the power rule &mdash; what happens to the
                  exponent when you take a derivative?
                </p>
              </div>
            </div>

            <div className="flex justify-end opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-2.5 text-white">
                <p className="text-sm">Bring it down and subtract one?</p>
              </div>
            </div>

            <div className="flex justify-start gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
              <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 15 L82 32 L82 68 L50 85 L18 68 L18 32 Z"
                    fill="none"
                    stroke="#1E2A47"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-2.5">
                <p className="text-sm text-[#1E2A47]">
                  Right. So apply that to x squared &mdash; what do you get?
                </p>
              </div>
            </div>

            <div className="flex justify-end opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-2.5 text-white">
                <p className="text-sm">2x.</p>
              </div>
            </div>

            <div className="flex justify-start gap-2.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.85s" }}>
              <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 15 L82 32 L82 68 L50 85 L18 68 L18 32 Z"
                    fill="none"
                    stroke="#1E2A47"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-2.5">
                <p className="text-sm text-[#1E2A47]">
                  Exactly. Can you walk me through why that works?
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <footer className="flex flex-col items-center gap-3 pb-6 text-center lg:pb-8">
      <div className="flex items-center gap-5">
        <a
          href="https://linkedin.com/in/itstalhasattar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#6B6B6B] hover:text-[#1E2A47] transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-[#E5E5E2]">|</span>
        <a
          href="https://github.com/itstalhasattar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#6B6B6B] hover:text-[#1E2A47] transition-colors"
        >
          GitHub
        </a>
        <span className="text-[#E5E5E2]">|</span>
        <a
          href="https://github.com/itstalhasattar/socratic-tutor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#6B6B6B] hover:text-[#1E2A47] transition-colors"
        >
          Source
        </a>
      </div>
      <p className="text-xs text-[#6B6B6B]">
        Chat engine powered by Anthropic&apos;s Claude
      </p>
    </footer>
    </div>
  );
}
