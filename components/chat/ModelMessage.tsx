export default function ModelMessage({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3">
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
      <div className="max-w-[80%] bg-[#F1EFE8] rounded-2xl rounded-tl-sm px-4 py-3 text-[15px] leading-relaxed text-[#1E2A47]">
        {message}
      </div>
    </div>
  );
}