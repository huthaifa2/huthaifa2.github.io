import { useState } from 'react'
import { createPortal } from 'react-dom'
import FadeIn from '../../FadeIn'
import JustLookUp from './JustLookUp'
import AnimatedPolarisLogo from './AnimatedPolarisLogo'
import IndependenceDay from './IndependenceDay'
import EidAlAdha from './EidAlAdha'
import WorkersDay from './WorkersDay'
import Internship from './Internship'

export default function GraphicDesignCard() {
  const [expanded, setExpanded] = useState(false)
  const [modalImages, setModalImages] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (images) => {
    setModalImages(images)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setModalImages(null)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length)
  }

  return (
    <>
      {modalImages && createPortal(
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-2xl bg-white/20 dark:bg-black/20"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {modalImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 md:p-4 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 md:p-4 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <div className="w-[75%] md:w-[85%] max-w-4xl h-[85vh] flex items-center justify-center relative">
            <img
              src={modalImages[currentImageIndex]}
              alt="Preview"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>,
        document.body
      )}

      <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <div className={`space-y-8 overflow-hidden transition-all duration-1000 ease-in-out ${expanded ? 'max-h-[6000px]' : 'max-h-[650px]'}`}>
          <FadeIn delay={0}>
            <JustLookUp />
          </FadeIn>
          <FadeIn delay={100}>
            <AnimatedPolarisLogo />
          </FadeIn>
          <FadeIn delay={200}>
            <IndependenceDay onOpen={() => openModal(['/images/graphic/independence_day.png', '/images/graphic/independence_day_night.png'])} />
          </FadeIn>
          <FadeIn delay={300}>
            <EidAlAdha onOpen={() => openModal(['/images/graphic/eid_al_adha.png'])} />
          </FadeIn>
          <FadeIn delay={400}>
            <WorkersDay onOpen={() => openModal(['/images/graphic/workers_day.png'])} />
          </FadeIn>
          <FadeIn delay={500}>
            <Internship onOpen={() => openModal(['/images/graphic/internship.png'])} />
          </FadeIn>
        </div>

        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-72 rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden pointer-events-none z-10">
            <div
              className="w-full h-full bg-white/40 dark:bg-[#13131A]/60 backdrop-blur-2xl transition-colors duration-300"
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
        )}

        <div className={`flex justify-center z-20 transition-all duration-500 ${expanded ? 'mt-8 pb-8' : 'absolute bottom-8 left-0 right-0'}`}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-[#24242c]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-[#1d1d1f] dark:text-white font-semibold text-sm"
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
                See All Work
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}