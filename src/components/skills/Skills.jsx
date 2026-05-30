import FadeIn from '../FadeIn'

export default function Skills() {
  const designSkills = [
    'UI/UX Design', 'Interaction Design', 'Wireframing & Prototyping',
    'Figma', 'Motion Design', 'Visual Identity',
    'Adobe Photoshop', 'Adobe Illustrator',
    'Adobe After Effects', 'Adobe Premiere Pro',
    'Graphic Design', 'Brand & Marketing Design',
  ]

  const professionalSkills = [
    'Cross-functional Comms', 'Agile Collaboration',
    'Technical Documentation', 'Git & Version Control',
    'Project Leadership', 'Code Review',
  ]

  const legacyTechnicalSkills = [
    'Flutter', 'Dart', 'BLoC', 'Cubit', 'GetIt',
    'Dio', 'Clean Architecture', 'REST API Integration',
    'iOS Development', 'Android Development',
    'AR/EN Localization', 'Dark/Light Theming',
  ]

  const categories = [
    { title: 'Design & Creative', skills: designSkills, delay: 100 },
    { title: 'Professional Skills', skills: professionalSkills, delay: 200 },
    { title: 'Legacy Technical Experience', skills: legacyTechnicalSkills, delay: 300 },
  ]

  return (
    <section id="skills" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-32">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-300">
            Skills & Expertise.
          </h2>
          <p className="text-xl md:text-2xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-300 max-w-4xl mx-auto">
            A comprehensive overview of my creative capabilities and professional background.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <FadeIn key={category.title} delay={category.delay}>
            <div className={`bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 h-full transition-colors duration-500 ${category.title.includes('Legacy') ? 'opacity-80' : ''}`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 tracking-tight transition-colors duration-500 ${category.title.includes('Legacy') ? 'text-[#86868b] dark:text-gray-400' : 'text-[#1d1d1f] dark:text-white'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`whitespace-nowrap px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${category.title.includes('Legacy') ? 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/5' : 'bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white border-gray-200 dark:border-white/5'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}