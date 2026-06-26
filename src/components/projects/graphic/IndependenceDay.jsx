export default function IndependenceDay({ onOpen }) {
  return (
    <div
      className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
      onClick={onOpen}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative overflow-hidden md:w-1/2 aspect-video md:aspect-auto">
          <img
            src="/images/graphic/independence_day.png"
            alt="Jordan Independence Day"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/[0.06] dark:bg-white/10 text-[#1d1d1f] dark:text-white/80">
              Adobe Photoshop
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] dark:text-white leading-tight">
            Jordan Independence Day
          </h3>

          <p className="text-base text-[#6e6e73] dark:text-gray-400 leading-relaxed">
            A Photoshop composition marking Jordan's eightieth Independence Day. Anchored by a detailed illustration of Petra at night, a bold oversized eighty dominates the sky alongside fighter jets trailing national flag colors. A traditional woven textile border bridges the modern celebration with historic cultural art.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#1d1d1f] dark:text-white/70 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 mt-2">
            <span>View full piece</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}