import FadeIn from '../FadeIn'
import { contactLinks } from '../../data/contactLinks'

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 w-full border-t border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-transparent backdrop-blur-lg mt-12 py-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-12 text-center transition-colors duration-500">Let's Connect.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {contactLinks.map((contact, index) => (
            <FadeIn key={index} delay={index * 100}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-8 bg-white/80 dark:bg-[#24242c]/90 rounded-[2rem] shadow-sm border border-white/60 dark:border-white/10 hover:shadow-lg dark:hover:bg-[#2d2d36] hover:-translate-y-2 transition-all duration-300 group h-full text-center">
                <div className="w-14 h-14 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1d1d1f] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-[#1d1d1f] transition-colors duration-300">
                  {contact.icon}
                </div>
                <p className="text-sm text-[#86868b] dark:text-gray-400 font-medium mb-2 transition-colors duration-500">{contact.label}</p>
                <p className="text-[#1d1d1f] dark:text-gray-200 font-semibold text-[0.9rem] break-all transition-colors duration-500">{contact.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <p className="text-[#86868b] dark:text-gray-500 text-sm mt-16 text-center font-medium transition-colors duration-500">
            &copy; {new Date().getFullYear()} Huthaifa Maan. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}