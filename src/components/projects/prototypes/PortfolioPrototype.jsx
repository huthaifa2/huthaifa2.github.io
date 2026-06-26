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

        <div className="w-full aspect-video bg-black overflow-hidden">
          <video
            ref={videoRef}
            src="/images/portfolio-figma/portfolio_figma.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-6">
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

          <p className="text-[#1d1d1f] dark:text-gray-300 text-sm md:text-lg opacity-90 leading-relaxed font-medium transition-colors duration-500">
            The complete high-fidelity wireframes and design system behind this very portfolio. Fully built in Figma utilizing advanced Auto Layout, component variants, and interactive prototyping to map out the responsive behavior and visual language before writing a single line of React.
          </p>
        </div>

      </div>
    </FadeIn>
  )
}