import { useState } from 'react'
import FadeIn from '../../FadeIn'
import FigmaPosterCard from './FigmaPosterCard'
import AnimatedPolarisLogo from './AnimatedPolarisLogo'
import JustLookUp from './JustLookUp'
import CelebrationCards from './CelebrationCards'

export default function GraphicDesignCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
      <div className={`space-y-8 overflow-hidden transition-all duration-1000 ease-in-out ${expanded ? 'max-h-[6000px]' : 'max-h-[650px]'}`}>
        <FadeIn delay={0}>
          <FigmaPosterCard />
        </FadeIn>
        <FadeIn delay={100}>
          <CelebrationCards />
        </FadeIn>
        <FadeIn delay={200}>
          <AnimatedPolarisLogo />
        </FadeIn>
        <FadeIn delay={300}>
          <JustLookUp />
        </FadeIn>
      </div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-72 rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden pointer-events-none z-10">
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
              Explore All Visuals
            </>
          )}
        </button>
      </div>
    </div>
  )
}