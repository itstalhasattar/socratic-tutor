export default function UserMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] bg-[#1E2A47] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-base sm:text-[15px] leading-relaxed">
        {message}
      </div>
    </div>
  );
}