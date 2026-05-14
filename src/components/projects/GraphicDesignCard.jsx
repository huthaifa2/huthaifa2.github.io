import { useState } from 'react'
import { createPortal } from 'react-dom'
import FadeIn from '../FadeIn'
import JustLookUp from './graphic/JustLookUp'
import AnimatedPolarisLogo from './graphic/AnimatedPolarisLogo'
import IndependenceDay from './graphic/IndependenceDay'
import WorkersDay from './graphic/WorkersDay'
import Internship from './graphic/Internship'

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
          className="fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-2xl"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {modalImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <div className="w-[85%] max-w-4xl h-[85vh] flex items-center justify-center relative">
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

      <div className="relative">
        <div className={`space-y-8 overflow-hidden transition-all duration-700 ${expanded ? 'max-h-[5000px]' : 'max-h-[650px]'}`}>
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
            <WorkersDay onOpen={() => openModal(['/images/graphic/workers_day.png'])} />
          </FadeIn>
          <FadeIn delay={400}>
            <Internship onOpen={() => openModal(['/images/graphic/internship.png'])} />
          </FadeIn>
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
                See All Work
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}