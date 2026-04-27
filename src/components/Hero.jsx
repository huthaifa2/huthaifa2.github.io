import FadeIn from './FadeIn'
import profilePic from '../assets/huthaifa.png'

export default function Hero() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto pt-32 md:pt-40 pb-12">
      <FadeIn delay={100}>
        <div className="relative mb-8 md:mb-10 mx-auto w-32 h-32 md:w-56 md:h-56">
          <div className="w-full h-full rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white/60 dark:border-white/10 transition-colors duration-500">
            <img 
              src={profilePic} 
              alt="Hothaifah" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="inline-block mb-6 md:mb-8 px-4 py-2 md:px-5 rounded-full bg-white/60 dark:bg-[#24242c]/90 border border-gray-200/50 dark:border-white/10 shadow-sm backdrop-blur-md transition-colors duration-500">
          <span className="text-sm md:text-base font-medium text-[#86868b] dark:text-gray-300 tracking-wide transition-colors duration-500">Mobile Developer & UI/UX Designer</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={300}>
        <h1 className="text-5xl md:text-[5.5rem] leading-tight font-bold tracking-tight mb-6 md:mb-8 text-[#1d1d1f] dark:text-white transition-colors duration-500">
          Building clean, functional <br className="hidden md:block" /> mobile apps.
        </h1>
      </FadeIn>
      
      <FadeIn delay={400}>
        <p className="text-lg md:text-3xl text-[#86868b] dark:text-gray-400 max-w-4xl leading-relaxed font-medium transition-colors duration-500">
          I specialize in transforming UI/UX designs into high-performance iOS and Android applications using Flutter. My focus is on writing scalable, maintainable code using Clean Architecture, BLoC/Cubit for state management, and Dio for seamless backend integration.
        </p>
      </FadeIn>
    </main>
  )
}