import FadeIn from '../../FadeIn'

export default function AjeerProject({ onOpenSlider }) {
  return (
    <FadeIn>
      <div className="flex flex-col lg:flex-row items-stretch bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors duration-500">
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col items-start justify-center">
          <div className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-8">
            <img src="/images/ajeer/ajeer_icon.png" alt="Ajeer Icon" className="w-full h-full object-cover drop-shadow-xl" />
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-2 md:mb-4 tracking-tight transition-colors duration-500">Ajeer Mobile</h3>
          <p className="text-[#86868b] dark:text-gray-400 text-lg md:text-2xl mb-6 font-medium transition-colors duration-500">Home Services Booking App</p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Flutter / Dart</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">UI/UX Design</span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6 mb-6 md:mb-8 text-xs md:text-base w-full">
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Frontend</span><span className="text-[#86868b] dark:text-gray-400">Flutter / Dart</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Backend</span><span className="text-[#86868b] dark:text-gray-400">.NET</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">State Management</span><span className="text-[#86868b] dark:text-gray-400">Provider</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Networking</span><span className="text-[#86868b] dark:text-gray-400">HTTP</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Database</span><span className="text-[#86868b] dark:text-gray-400">SQL Server</span></div>
          </div>
          
          <p className="text-[#1d1d1f] dark:text-gray-300 text-sm md:text-lg opacity-90 leading-relaxed font-bold transition-colors duration-500">
            This was the first iOS application ever built and deployed for the Prince Al-Hussein bin Abdullah II Faculty of Information Technology at The Hashemite University. I took full responsibility for its iOS development using Xcode, utilized Docker for database integration, and designed the complete UI/UX.
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100/40 dark:from-blue-900/20 dark:to-blue-800/5 p-8 md:p-16 flex justify-center items-center min-h-[350px] md:min-h-[500px] relative transition-colors duration-500">
          <div className="relative w-full max-w-[400px] h-[350px] md:h-[500px] flex items-center justify-center">
            <div className="absolute right-0 lg:right-6 w-[160px] md:w-[260px] translate-x-4 -translate-y-6 scale-90 transition-transform duration-500">
              <img src="/images/ajeer/ajeer9.png" alt="Ajeer App Background" className="w-full h-auto object-contain" />
            </div>
            <div className="relative z-10 w-[180px] md:w-[280px] -translate-x-6 lg:-translate-x-12 translate-y-4 transition-transform duration-500 hover:-translate-y-2">
              <img src="/images/ajeer/ajeer.png" alt="Ajeer App Main" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          <button 
            onClick={onOpenSlider}
            className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 bg-white/90 dark:bg-[#2d2d36]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-[#1d1d1f] dark:text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold text-xs md:text-sm flex items-center gap-2 hover:bg-white dark:hover:bg-[#3f3f4e] hover:scale-105 transition-all duration-300"
          >
            See more <span className="text-base md:text-lg leading-none mt-[-2px]">&gt;</span>
          </button>
        </div>
      </div>
    </FadeIn>
  )
}