import { useState, useEffect } from 'react'

export default function Navigation({ onOpenContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center mt-6 px-4">
      {/* Increased max-w-4xl to max-w-5xl to give the tabs more breathing room */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-5xl bg-white/70 dark:bg-[#24242c]/70 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-50 transition-colors duration-300">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white pl-2 md:pl-0 shrink-0">
          Huthaifa Ma'in
        </div>

        {/* --- DESKTOP MENU --- */}
        {/* Adjusted spacing: space-x-4 on medium screens, space-x-8 on large screens */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm lg:text-base font-medium text-[#86868b] dark:text-gray-400 items-center">
          <a href="#projects" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">Projects</a>
          <a href="#tools" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">Tools</a>
          <a href="#skills" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">Skills</a>
          <a href="#publications" className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">Publications</a>
          <button onClick={onOpenContact} className="hover:text-[#1d1d1f] dark:hover:text-white transition-colors duration-300 whitespace-nowrap">Contact</button>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shrink-0"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-7 lg:h-7 text-blue-300 drop-shadow-md">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-500 drop-shadow-md">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </button>

          <a 
            href="/resume/huthaifa_resume.pdf" 
            download="huthaifa_resume.pdf"
            className="flex items-center gap-1.5 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-5 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm shrink-0"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>

        {/* --- MOBILE CONTROLS (Right Side) --- */}
        <div className="flex items-center md:hidden gap-3 pr-1">
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-300 drop-shadow-md">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500 drop-shadow-md">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </button>
          <button 
            className="p-1 text-[#1d1d1f] dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 w-[calc(100%-2rem)] max-w-sm bg-white/70 dark:bg-[#24242c]/70 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl shadow-2xl py-6 px-6 flex flex-col space-y-5 text-center z-40 transition-colors duration-300">
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white">Projects</a>
          <a href="#tools" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white">Tools</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white">Skills</a>
          <a href="#publications" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white">Publications</a>
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="text-lg font-medium text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white">Contact</button>

          <div className="pt-5 mt-2 border-t border-gray-100 dark:border-white/10 flex justify-center">
            <a 
              href="/resume/huthaifa_resume.pdf" 
              download="huthaifa_resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-6 py-3.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm w-full justify-center font-medium"
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}