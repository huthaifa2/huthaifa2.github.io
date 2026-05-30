import FadeIn from '../FadeIn'

export default function Tools() {
  const tools = [
    { name: 'Figma', icon: '/icons/figma.png', isLegacy: false },
    { name: 'Adobe Photoshop', icon: '/icons/photoshop.png', isLegacy: false },
    { name: 'Adobe Illustrator', icon: '/icons/illustrator.png', isLegacy: false },
    { name: 'Adobe After Effects', icon: '/icons/after_effects.png', isLegacy: false },
    { name: 'VS Code', icon: '/icons/vscode.png', isLegacy: false },
    { name: 'Git & GitHub', icon: '/icons/github.png', isLegacy: false },
    { name: 'Flutter', icon: '/icons/flutter.png', isLegacy: true },
    { name: 'Dart', icon: '/icons/dart.png', isLegacy: true },
    { name: 'Clean Architecture', icon: '/icons/clean_arch.png', isLegacy: true },
    { name: 'BLoC', icon: '/icons/bloc.png', isLegacy: true },
    { name: 'Cubit', icon: '/icons/cubit.png', isLegacy: true },
    { name: 'Dio', icon: '/icons/dio.png', isLegacy: true },
    { name: 'Xcode', icon: '/icons/xcode.png', isLegacy: true },
    { name: 'Android Studio', icon: '/icons/android_studio.png', isLegacy: true },
  ]

  return (
    <section id="tools" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-32">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-300">
            Tools of the Trade.
          </h2>
          <p className="text-xl md:text-2xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-300 max-w-4xl mx-auto">
            The primary tools I use for design and prototyping, alongside my legacy development stack.
          </p>
          <p className="mt-4 text-sm md:text-base text-[#86868b]/70 dark:text-gray-500 italic transition-colors duration-300">
            * Grayed-out icons represent legacy tools I have previous professional experience with.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className={`flex flex-col items-center justify-center group ${tool.isLegacy ? 'grayscale opacity-40 hover:opacity-60 transition-opacity duration-300' : ''}`}>
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-3">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-full h-full object-contain drop-shadow-xl" 
                  />
                </div>
                <span className="text-[#1d1d1f] dark:text-gray-300 font-semibold text-sm tracking-wide transition-colors duration-500 text-center">
                  {tool.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}