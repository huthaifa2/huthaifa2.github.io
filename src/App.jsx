import { useState } from 'react'
import FadeIn from './components/FadeIn'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AjeerProject from './components/projects/AjeerProject'
import PolarisProject from './components/projects/PolarisProject'
import GraphicDesignCard from './components/projects/GraphicDesignCard'
import Tools from './components/tools/Tools'
import Skills from './components/skills/Skills'
import ContactFooter from './components/contact/ContactFooter'
import ContactModal from './components/contact/ContactModal'
import ImageSlider from './components/ImageSlider'
import FlutterApiGuide from './components/publications/FlutterApiGuide'
import ThemeManagerGuide from './components/publications/ThemeManagerGuide'
import CleanArchitectureGuide from './components/publications/CleanArchitectureGuide'

function PublicationsList() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative">
      <div className={`space-y-16 overflow-hidden transition-all duration-700 ${expanded ? 'max-h-[2000px]' : 'max-h-[700px]'}`}>
        <FlutterApiGuide />
        <CleanArchitectureGuide />
        <ThemeManagerGuide />
      </div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f5f5f7] dark:from-[#13131A] to-transparent pointer-events-none" />
      )}

      <div className="flex justify-center mt-6 relative z-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-[#1d1d1f] dark:text-white font-semibold text-sm"
        >
          {expanded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              Show Less
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              See All Docs
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function ProjectTabs({ onOpenAjeer, onOpenPolaris }) {
  const [activeTab, setActiveTab] = useState('apps')
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState(null)
  const [expanded, setExpanded] = useState(false)

  const switchTab = (tab) => {
    if (tab === activeTab) return
    setDirection(tab === 'design' ? 'left' : 'right')
    setSliding(true)
    setExpanded(false)
    setTimeout(() => {
      setActiveTab(tab)
      setSliding(false)
    }, 300)
  }

  return (
    <div>
      <FadeIn delay={100}>
        <div className="flex justify-center mb-14">
          <div className="flex gap-2 p-1.5 bg-white/70 dark:bg-[#24242c]/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-full shadow-sm">
            <button
              onClick={() => switchTab('apps')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'apps'
                  ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-md'
                  : 'text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              Flutter Apps
            </button>
            <button
              onClick={() => switchTab('design')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'design'
                  ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-md'
                  : 'text-[#86868b] dark:text-gray-400 hover:text-[#1d1d1f] dark:hover:text-white'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>
      </FadeIn>

      <div className="overflow-hidden">
        <div
          className="transition-all duration-300"
          style={{
            opacity: sliding ? 0 : 1,
            transform: sliding
              ? `translateX(${direction === 'left' ? '-40px' : '40px'})`
              : 'translateX(0)',
          }}
        >
          {activeTab === 'apps' ? (
            <div className="relative">
              <div className={`space-y-24 overflow-hidden transition-all duration-700 ${expanded ? 'max-h-[5000px]' : 'max-h-[650px]'}`}>
                <AjeerProject onOpenSlider={onOpenAjeer} />
                <PolarisProject onOpenSlider={onOpenPolaris} />
              </div>

              {!expanded && (
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#f5f5f7] dark:from-[#13131A] to-transparent pointer-events-none" />
              )}

              <div className="flex justify-center mt-6 relative z-10">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-[#24242c]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-[#1d1d1f] dark:text-white font-semibold text-sm"
                >
                  {expanded ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      See All Apps
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <GraphicDesignCard />
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const ajeerScreenshots = [
    '/images/ajeer/ajeer.png', '/images/ajeer/ajeer0.png', '/images/ajeer/ajeer1.png',
    '/images/ajeer/ajeer2.png', '/images/ajeer/ajeer3.png', '/images/ajeer/ajeer4.png',
    '/images/ajeer/ajeer5.png', '/images/ajeer/ajeer6.png', '/images/ajeer/ajeer7.png',
    '/images/ajeer/ajeer8.png', '/images/ajeer/ajeer9.png', '/images/ajeer/ajeer10.png'
  ]

  const polarisScreenshots = [
    '/images/polaris/polaris.png', '/images/polaris/polaris0.png', '/images/polaris/polaris1.png',
    '/images/polaris/polaris2.png', '/images/polaris/polaris3.png', '/images/polaris/polaris4.png',
    '/images/polaris/polaris5.png', '/images/polaris/polaris6.png', '/images/polaris/polaris7.png',
    '/images/polaris/polaris8.png', '/images/polaris/polaris9.png', '/images/polaris/polaris10.png',
    '/images/polaris/polaris11.png', '/images/polaris/polaris12.png'
  ]

  const activeScreenshots = activeProject === 'ajeer' ? ajeerScreenshots : activeProject === 'polaris' ? polarisScreenshots : []

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-gradient-to-br dark:from-[#1e1e2f] dark:via-[#13131A] dark:to-[#0d0d12] text-[#1d1d1f] dark:text-[#f4f4f5] font-sans selection:bg-blue-200 dark:selection:bg-blue-900/60 selection:text-blue-900 dark:selection:text-blue-100 antialiased relative overflow-hidden transition-colors duration-300">

      {activeProject && (
        <ImageSlider images={activeScreenshots} onClose={() => setActiveProject(null)} />
      )}

      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}

      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-200/50 dark:bg-white/10 rounded-full filter blur-[100px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] bg-purple-200/40 dark:bg-purple-900/30 rounded-full filter blur-[100px] md:blur-[120px] pointer-events-none z-0" />

      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />

      <Hero />

      <section id="projects" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-300">Selected Works.</h2>
            <p className="text-xl md:text-2xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-300">Production apps and design work I've crafted from architecture and backend integration to UI/UX systems and motion graphics.</p>
          </div>
        </FadeIn>

        <ProjectTabs
          onOpenAjeer={() => setActiveProject('ajeer')}
          onOpenPolaris={() => setActiveProject('polaris')}
        />
      </section>

      <section id="publications" className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-4 transition-colors duration-300">Things I Learned & Documented.</h2>
            <p className="text-xl text-[#86868b] dark:text-gray-400 font-medium transition-colors duration-300">Guides I put together while diving deep into these topics, written to help my team, and anyone else who might find them useful.</p>
          </div>
        </FadeIn>

        <PublicationsList />
      </section>

      <Tools />
      <Skills />
      <ContactFooter />
    </div>
  )
}