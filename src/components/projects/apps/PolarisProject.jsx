import FadeIn from '../../FadeIn'

export default function PolarisProject({ onOpenSlider }) {
  return (
    <FadeIn>
      <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors duration-500">
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col items-start justify-center">
          <div className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-8">
            <img src="/images/polaris/polaris_icon.png" alt="Polaris Icon" className="w-full h-full object-cover drop-shadow-xl" />
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-2 md:mb-4 tracking-tight transition-colors duration-500">Polaris Mobile</h3>
          <p className="text-[#86868b] dark:text-gray-400 text-lg md:text-2xl mb-6 font-medium transition-colors duration-500">Advanced ERP System</p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Flutter / Dart</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Clean Architecture</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">BLoC / Cubit</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Dio</span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6 mb-6 md:mb-8 text-xs md:text-base w-full">
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Frontend</span><span className="text-[#86868b] dark:text-gray-400">Flutter / Dart</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Backend</span><span className="text-[#86868b] dark:text-gray-400">Python Sanic</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">State Management</span><span className="text-[#86868b] dark:text-gray-400">BLoC / Cubit</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f] dark:text-gray-200">Networking</span><span className="text-[#86868b] dark:text-gray-400">Dio</span></div>
          </div>
          
          <p className="text-[#1d1d1f] dark:text-gray-300 text-sm md:text-lg opacity-90 leading-relaxed font-bold transition-colors duration-500">
            I was the Flutter Team Leader for this project and took full responsibility for debugging and deploying on iOS.
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-50 to-purple-100/40 dark:from-purple-900/20 dark:to-purple-800/5 p-8 md:p-16 flex justify-center items-center min-h-[350px] md:min-h-[500px] relative transition-colors duration-500">
          <div className="relative w-full max-w-[400px] h-[350px] md:h-[500px] flex items-center justify-center">
            <div className="absolute left-0 lg:left-6 w-[160px] md:w-[260px] -translate-x-4 -translate-y-6 scale-90 transition-transform duration-500">
              <img src="/images/polaris/polaris7.png" alt="Polaris App Background" className="w-full h-auto object-contain" />
            </div>
            <div className="relative z-10 w-[180px] md:w-[280px] translate-x-6 lg:translate-x-12 translate-y-4 transition-transform duration-500 hover:-translate-y-2">
              <img src="/images/polaris/polaris.png" alt="Polaris App Main" className="w-full h-auto object-contain" />
            </div>
          </div>

          <button 
            onClick={onOpenSlider}
            className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20 bg-white/90 dark:bg-[#2d2d36]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-[#1d1d1f] dark:text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold text-xs md:text-sm flex items-center gap-2 hover:bg-white dark:hover:bg-[#3f3f4e] hover:scale-105 transition-all duration-300"
          >
            See more <span className="text-base md:text-lg leading-none mt-[-2px]">&gt;</span>
          </button>
        </div>
      </div>
    </FadeIn>
  )
}