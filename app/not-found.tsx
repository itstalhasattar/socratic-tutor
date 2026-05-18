import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FAF9F6] px-6 text-center">
      <div className="w-16">
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

      <h1 className="text-4xl font-bold tracking-tight text-[#1E2A47] md:text-5xl font-serif-head">
        404
      </h1>
      <p className="max-w-sm leading-relaxed text-[#4A4A4A]">
        This page does not exist. The tutor is ready to ask you questions
        elsewhere.
      </p>
      <Link
        href="/"
        className="px-8 py-3 mt-4 font-medium text-white transition-all rounded-lg bg-[#1E2A47] hover:bg-[#2a3a60] hover:scale-[1.02]"
      >
        Go home
      </Link>
    </main>
  );
}
