import { useRef, useEffect } from 'react'
import FadeIn from '../../FadeIn'

export default function PortfolioPrototype() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <FadeIn delay={100}>
      <div className="w-full bg-gradient-to-br from-white/90 to-white/60 dark:from-[#24242c]/90 dark:to-[#1a1a28]/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-colors duration-500">
        
        <div className="w-full aspect-video bg-black overflow-hidden relative group">
          <video
            ref={videoRef}
            src="/images/portfolio-figma/portfolio_figma.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <button
            onClick={() => window.open('/images/portfolio-figma/portfolio_figma.mp4', '_blank')}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            aria-label="Open video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4 transition-colors duration-500">
                Portfolio Design System
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['Figma', 'UI/UX Design', 'Auto Layout', 'Prototyping'].map((tool, i) => (
                  <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-sm font-semibold border border-gray-200 dark:border-white/5 transition-colors duration-500">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://www.figma.com/design/AoQCHlOAp48JGkLUP86TBf/Portfolio?node-id=1-2&t=S3rtHy6vLmyoRKjS-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 font-semibold text-sm shrink-0"
            >
              View Figma Project
            </a>
          </div>

          <p className="text-[#1d1d1f] dark:text-gray-300 text-sm md:text-lg opacity-90 leading-relaxed font-medium transition-colors duration-500">
            The complete high-fidelity wireframes and design system behind this very portfolio. Fully built in Figma utilizing advanced Auto Layout, component variants, and interactive prototyping to map out the responsive behavior and visual language before writing a single line of React.
          </p>
        </div>

      </div>
    </FadeIn>
  )
}