import { useState } from 'react'
import FlutterApiGuide from './FlutterApiGuide'
import ThemeManagerGuide from './ThemeManagerGuide'
import CleanArchitectureGuide from './CleanArchitectureGuide'

export default function GuideCard() {
  const [expanded, setExpanded] = useState(false)
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
      {!revealed && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#f5f5f7]/60 dark:bg-[#13131A]/70 backdrop-blur-sm">
          <p className="text-sm font-bold tracking-widest uppercase text-[#86868b] dark:text-gray-400 mb-2">
            Legacy Experience
          </p>
          <h4 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] dark:text-white mb-6 text-center px-4">
            Archived Technical Guides & Notes.
          </h4>
          <button
            onClick={() => setRevealed(true)}
            className="flex items-center gap-2 px-8 py-4 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] rounded-full shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
          >
            View Past Guides
          </button>
        </div>
      )}

      <div className={`transition-all duration-700 ${!revealed ? 'grayscale opacity-60 pointer-events-none select-none' : ''}`}>
        <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${expanded ? 'max-h-[2000px]' : 'max-h-[600px]'}`}>
          <div className="space-y-16">
            <FlutterApiGuide />
            <CleanArchitectureGuide />
            <ThemeManagerGuide />
          </div>
        </div>
      </div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-64 rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden pointer-events-none z-10">
          <div
            className="w-full h-full bg-white/40 dark:bg-[#13131A]/60 backdrop-blur-2xl transition-colors duration-300"
            style={{
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      )}

      <div className={`flex justify-center z-20 transition-all duration-500 ${expanded ? 'mt-8 pb-8' : 'absolute bottom-8 left-0 right-0'}`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-[#24242c]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[#1d1d1f] dark:text-white font-semibold text-sm"
        >
          {expanded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              Show Less
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              See All Guides
            </>
          )}
        </button>
      </div>
    </div>
  )
}