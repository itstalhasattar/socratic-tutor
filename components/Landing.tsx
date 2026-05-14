import Link from "next/link";


export default function Landing() {
  return (<section className="flex lg:h-screen max-w-4xl flex-col items-center justify-center gap-4 px-6 py-16 mx-auto">
        <div className="w-20 ">
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

        <h1 className="text-4xl font-bold tracking-tight text-center md:text-5xl font-serif-head">
          Socratic Tutor
        </h1>
        <p className="text-lg font-medium text-center md:text-xl">
          I won&apos;t give you answers. I&apos;ll help you find them.
        </p>

        <p className="max-w-2xl leading-relaxed text-center text-[#6B6B6B]">
          Most tutors hand you the answer. This one asks you questions until you
          find it yourself. Built on the Socratic method &mdash; the oldest
          learning technique we have, now powered by Claude.
        </p>

        <div className="w-full max-w-2xl mt-10">
          <p className="mb-4 text-sm tracking-wider text-center uppercase text-[#6B6B6B]">
            Here&apos;s how a session might go
          </p>

          <div className="flex flex-col gap-4 p-6 bg-white border border-[#E5E5E2] rounded-2xl md:p-8">
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-3 text-white">
                <p className="text-sm">What&apos;s the derivative of x squared?</p>
              </div>
            </div>

            <div className="flex justify-start gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-4 h-4"
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
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-3">
                <p className="text-sm">
                  Good place to start. Do you remember the power rule &mdash;
                  what happens to the exponent when you take a derivative?
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-3 text-white">
                <p className="text-sm">Bring it down and subtract one?</p>
              </div>
            </div>

            <div className="flex justify-start gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-4 h-4"
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
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-3">
                <p className="text-sm">
                  Right. So apply that to x squared &mdash; what do you get?
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1E2A47] px-4 py-3 text-white">
                <p className="text-sm">2x.</p>
              </div>
            </div>

            <div className="flex justify-start gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-[#D4A24C]">
                <svg
                  className="w-4 h-4"
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
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#F1EFE8] px-4 py-3">
                <p className="text-sm">
                  Exactly. Can you walk me through why that works?
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/learn" className="px-8 py-3 mt-10 font-medium text-white transition-colors rounded-lg cursor-pointer bg-[#1E2A47] hover:bg-[#2a3a60]">
          Start learning
        </Link>
      </section>);
}
