import FadeIn from '../FadeIn'

export default function CleanArchitectureGuide() {
  return (
    <FadeIn>
      <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors duration-300 group">
        
        <div className="w-full lg:w-3/5 p-6 md:p-12 flex flex-col items-start justify-center relative z-10">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
             {/* Emerald Green Icon Container */}
             <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
             </span>
             <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Project Blueprint</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-[#1d1d1f] dark:text-white mb-4 tracking-tight transition-colors duration-300">
            Flutter Clean Architecture <br/>Universal Project Blueprint
          </h3>
          
          <p className="text-[#86868b] dark:text-gray-400 text-base md:text-lg mb-6 font-medium transition-colors duration-300 leading-relaxed">
            The definitive starting point for every new Flutter project. This guide defines the universal folder structure, explains layer responsibilities, and provides standard file templates to ensure dependencies point strictly inward.
          </p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Folder Structure</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Layer Responsibilities</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Dependency Injection</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm">Error Handling</span>
          </div>

          <a 
            href="/docs/clean_architecture_guide.pdf" 
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

        {/* Pale Green to Yellow Gradient */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-emerald-50 to-lime-100/50 dark:from-[#212b25] dark:to-[#1e241c] p-8 md:p-12 flex justify-center items-center relative transition-colors duration-300 min-h-[400px]">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80 aspect-[1/1.29] transform transition-all duration-500 ease-out z-10 group-hover:-translate-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 bg-white">
            <img 
              src="/icons/flutter_clean_architecture_cover_page.png" 
              alt="Flutter Clean Architecture Guide Cover" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-400/20 transition-colors duration-500 z-0"></div>
        </div>

      </div>
    </FadeIn>
  )
}