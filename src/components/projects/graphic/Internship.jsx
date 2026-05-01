export default function Internship({ onOpen }) {
  return (
    <div className="w-full bg-gradient-to-br from-white/90 to-white/60 dark:from-[#24242c]/90 dark:to-[#1a1a28]/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-colors duration-500">

      <div className="w-full aspect-video bg-black overflow-hidden rounded-t-[2.5rem] relative group cursor-pointer" onClick={onOpen}>
        <img
          src="/images/graphic/internship.png"
          alt="Internship"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 rounded-full bg-white/20 backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-500">
          Internship Announcement
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Adobe Photoshop'].map((tool, i) => (
            <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-sm font-semibold border border-gray-200 dark:border-white/5 transition-colors duration-500">
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}