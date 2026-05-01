import FadeIn from '../FadeIn'

export default function Tools() {
  const tools = [
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Adobe Photoshop', icon: '/icons/photoshop.png' },
    { name: 'Adobe Illustrator', icon: '/icons/illustrator.png' },
    { name: 'Adobe After Effects', icon: '/icons/after_effects.png' },
    { name: 'Flutter', icon: '/icons/flutter.png' },
    { name: 'Dart', icon: '/icons/dart.png' },
    { name: 'Clean Architecture', icon: '/icons/clean_arch.png' },
    { name: 'BLoC', icon: '/icons/bloc.png' },
    { name: 'Cubit', icon: '/icons/cubit.png' },
    { name: 'Dio', icon: '/icons/dio.png' },
    { name: 'Xcode', icon: '/icons/xcode.png' },
    { name: 'Android Studio', icon: '/icons/android_studio.png' },
    { name: 'VS Code', icon: '/icons/vscode.png' },
    { name: 'Git & GitHub', icon: '/icons/github.png' },
    
  ]

  return (
    <section id="tools" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4 transition-colors duration-500">Core Technologies.</h2>
          <p className="text-xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-500">The tools and frameworks I use to bring ideas to life.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="flex flex-col items-center justify-center group">
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