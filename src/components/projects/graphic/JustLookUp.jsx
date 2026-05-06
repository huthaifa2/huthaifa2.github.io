export default function JustLookUp() {
  return (
    <div className="w-full bg-gradient-to-br from-white/90 to-white/60 dark:from-[#24242c]/90 dark:to-[#1a1a28]/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-colors duration-500">
      <div className="w-full aspect-video bg-black overflow-hidden rounded-t-[2.5rem] relative group">
        <video
          src="/images/graphic/just_look_up.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <button
          onClick={() => window.open('/images/graphic/just_look_up.mp4', '_blank')}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          aria-label="Open video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </button>
      </div>

      <div className="p-8 md:p-12">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-500">
          Just Look Up
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {['Adobe Photoshop', 'Adobe After Effects'].map((tool, i) => (
            <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-sm font-semibold border border-gray-200 dark:border-white/5 transition-colors duration-500">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}