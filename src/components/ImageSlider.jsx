import { useState } from 'react'

export default function ImageSlider({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!images || images.length === 0) return null

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-white/20 dark:bg-black/20 transition-colors duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-8 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-12 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 md:p-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="w-[75%] md:w-[85%] max-w-4xl h-[85vh] flex items-center justify-center">
        <img 
          src={images[currentSlide]} 
          alt={`Screenshot ${currentSlide}`} 
          className="max-w-full max-h-full object-contain drop-shadow-2xl"
        />
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-12 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 md:p-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      <div className="absolute bottom-8 text-black/60 dark:text-white/60 font-medium tracking-widest text-xs md:text-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}