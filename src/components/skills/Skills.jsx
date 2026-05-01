import FadeIn from '../FadeIn'

export default function Skills() {
  const technicalSkills = [
    'Flutter', 'Dart', 'BLoC', 'Cubit', 'GetIt',
    'Dio', 'Clean Architecture', 'REST API Integration',
    'iOS Development', 'Android Development',
    'Arabic/English Localization', 'Dark/Light Theming',
  ]

  const designSkills = [
    'UI/UX Design', 'Figma', 'Motion Design',
    'Adobe Photoshop', 'Adobe Illustrator',
    'Adobe After Effects', 'Adobe Premiere Pro',
    'Graphic Design', 'Brand & Marketing Design',
  ]

  const professionalSkills = [
    'Flutter Team Leadership', 'Code Review & Merge Approval',
    'Technical Documentation', 'Cross-functional Communication',
    'Git & Version Control', 'Agile Collaboration',
  ]

  const categories = [
    { title: 'Technical Skills', skills: technicalSkills, delay: 100 },
    { title: 'Design & Creative', skills: designSkills, delay: 200 },
    { title: 'Professional Skills', skills: professionalSkills, delay: 300 },
  ]

  return (
    <section id="skills" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      <FadeIn>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4 transition-colors duration-500">Skills & Expertise.</h2>
          <p className="text-lg md:text-xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-500">A comprehensive overview of my technical capabilities and professional strengths.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <FadeIn key={category.title} delay={category.delay}>
            <div className="bg-white/60 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 h-full transition-colors duration-500">
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] dark:text-white mb-6 tracking-tight transition-colors duration-500">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full text-xs md:text-sm font-semibold tracking-wide border border-gray-200 dark:border-white/5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
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