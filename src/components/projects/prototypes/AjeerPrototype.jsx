import FadeIn from '../../FadeIn'

export default function AjeerPrototype({ onOpenSlider }) {
  return (
    <FadeIn delay={200}>
      <div className="flex flex-col lg:flex-row items-stretch bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-colors duration-500">
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col items-start justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-6 md:mb-8 tracking-tight transition-colors duration-500">Ajeer - Home Services App</h3>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Figma</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">UI/UX Design</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-colors duration-500">Prototyping</span>
          </div>
          
          <p className="text-[#1d1d1f] dark:text-gray-300 text-sm md:text-lg opacity-90 leading-relaxed font-bold transition-colors duration-500">
            Reimagining the entire booking flow of the Ajeer app from scratch in Figma. My goal was to create a fresh visual identity with enhanced interaction patterns and features for an intuitive, complete experience from start to finish. The design follows a modern colorful-minimal direction, with soft gradients, frosted glass surfaces, and liquid glass effects. I focused on features such as a persistent booking summary, discount-aware service cards, a clock-based time picker, detailed provider cards, editable review screens, and graceful empty states. 16 screens, 6-step flow. Built with care in Figma.
            See more on Behance: <a href="https://www.behance.net/gallery/250245373/Ajeer-Home-Services-App-UIUX-Redesign" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Behance</a>
          </p>
        </div>
        
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-yellow-50 to-yellow-100/40 dark:from-yellow-900/20 dark:to-yellow-800/5 p-8 md:p-16 flex justify-center items-center min-h-[350px] md:min-h-[500px] relative transition-colors duration-500">
          <div className="relative w-full max-w-[400px] h-[350px] md:h-[500px] flex items-center justify-center">
            <div className="absolute right-0 lg:right-6 w-[160px] md:w-[260px] translate-x-4 -translate-y-6 scale-90 transition-transform duration-500">
              <img src="/images/ajeer-figma/img1.png" alt="Ajeer Figma Screenshot 2" className="w-full h-auto object-contain drop-shadow-xl" />
            </div>
            <div className="relative z-10 w-[180px] md:w-[280px] -translate-x-6 lg:-translate-x-12 translate-y-4 transition-transform duration-500 hover:-translate-y-2">
              <img src="/images/ajeer-figma/img0.png" alt="Ajeer Figma Screenshot 1" className="w-full h-auto object-contain drop-shadow-xl" />
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