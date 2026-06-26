import { useState } from 'react'
import { createPortal } from 'react-dom'

const posters = [
  {
    id: 'auto-layout',
    title: 'Figma Workshop: Auto Layout',
    image: '/images/graphic/Auto_Layout_Poster.png',
    tools: ['Figma'],
    description:
      'A warm orange and yellow palette commands immediate attention. Overlapping geometric shapes guide the eye through the typographic hierarchy, while vector illustrations of a ruler and pencil ground the digital subject in something tactile — precision made visible.',
  },
  {
    id: 'components',
    title: 'Figma Workshop: Components',
    image: '/images/graphic/Components_Poster.png',
    tools: ['Figma'],
    description:
      'Bold purple and teal shift the series palette while holding the same structural DNA. The central visual stacks overlapping interface cards around the four-diamond master component icon, making the concept of scalable, reusable systems literal. A solid black badge anchors the typographic hierarchy.',
  },
  {
    id: 'prototyping',
    title: 'Figma Workshop: Prototyping',
    image: '/images/graphic/Prototyping_Poster.png',
    tools: ['Figma'],
    description:
      'A deep blue canvas sets a technical atmosphere that lets glowing interaction lines and bright interface panels breathe. Translucent panels built with liquid glass techniques replace flat opacity drops. The winding connection line threading the screens is the centrepiece — a visual metaphor for a journey from static to interactive.',
  },
]

export default function FigmaPosterCard() {
  const [modalImage, setModalImage] = useState(null)

  return (
    <>
      {modalImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-2xl bg-white/20 dark:bg-black/20"
            onClick={() => setModalImage(null)}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors p-2 z-10"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-[90%] md:w-[85%] max-w-4xl h-[85vh] flex items-center justify-center">
              <img
                src={modalImage}
                alt="Poster preview"
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/[0.06] dark:border-white/10 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
            onClick={() => setModalImage(poster.image)}
          >
            <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 dark:bg-white/5">
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/90 dark:bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-[#1d1d1f] dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3 flex-1">
              <h4 className="text-xs md:text-base font-bold text-[#1d1d1f] dark:text-white leading-snug">{poster.title}</h4>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {poster.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs font-semibold rounded-full bg-black/[0.06] dark:bg-white/10 text-[#1d1d1f] dark:text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="hidden md:block text-sm text-[#6e6e73] dark:text-gray-400 leading-relaxed">{poster.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}