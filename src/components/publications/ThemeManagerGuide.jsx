import FadeIn from '../FadeIn'

export default function ThemeManagerGuide() {
  return (
    <FadeIn delay={100}>
      <div className="flex flex-col lg:flex-row items-stretch bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors duration-500 group">
        
        <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col items-start justify-center relative z-10">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
             <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
             </span>
             <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Engineering Blueprint</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight transition-colors duration-500">
            Flutter Theme System <br/>Professional Implementation
          </h3>
          
          <p className="text-[#86868b] dark:text-gray-400 text-base md:text-lg mb-6 font-medium transition-colors duration-500 leading-relaxed">
            A complete, production-ready blueprint for implementing scalable Light/Dark mode switching in Flutter. This guide standardizes semantic color naming via ThemeExtension, manages state with Cubit, and ensures persistent preferences using SharedPreferences.
          </p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">ThemeExtension</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Cubit State</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">SharedPreferences</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Clean Architecture</span>
          </div>

          <a 
            href="/docs/flutter_theme_manager_guide.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Read Publication
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="w-full lg:w-2/5 bg-gradient-to-br from-purple-50 to-purple-200/50 dark:from-[#2d2a35] dark:to-[#221e26] p-8 md:p-12 flex justify-center items-center relative transition-colors duration-500 min-h-[400px]">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80 aspect-[1/1.41] transform transition-all duration-500 ease-out z-10 group-hover:-translate-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
            <img 
              src="/icons/flutter_theme_manager_doc_cover_page.png" 
              alt="Flutter Theme System Guide Cover" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-colors duration-500 z-0"></div>
        </div>

      </div>
    </FadeIn>
  )
}