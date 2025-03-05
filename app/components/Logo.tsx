export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative hover:rotate-12 transition-transform">
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#FFD166]"></div>
        <div className="absolute top-1 left-[-8px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#1E1E2F]"></div>
      </div>
      <span className="text-[#FFD166] font-poppins text-2xl font-semibold tracking-wide">
        MarkSync
      </span>
    </div>
  );
}
