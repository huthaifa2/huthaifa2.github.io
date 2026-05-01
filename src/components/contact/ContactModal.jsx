import { contactLinks } from '../../data/contactLinks'

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl px-4 dark:bg-black/20 transition-colors duration-500">

      <div className="bg-white/70 dark:bg-[#24242c]/70 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 md:p-14 w-full max-w-2xl relative transition-colors duration-500">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full transition-colors bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow-md"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-3xl font-bold text-[#1d1d1f] dark:text-white mb-8 tracking-tight text-center transition-colors duration-500">Get in Touch</h3>
        
        <div className="flex flex-col space-y-6">
          {contactLinks.map((contact, index) => (
            <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-5 bg-white dark:bg-white/5 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
              
              <div className="w-14 h-14 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-white rounded-full flex items-center justify-center mr-6 group-hover:bg-[#1d1d1f] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-[#1d1d1f] transition-colors duration-300">
                {contact.icon}
              </div>
              
              <div>
                <p className="text-sm text-[#86868b] dark:text-gray-400 font-medium mb-1 transition-colors duration-500">{contact.label}</p>
                <p className="text-[#1d1d1f] dark:text-gray-200 font-semibold text-sm break-all transition-colors duration-500">{contact.value}</p>
              </div>

            </a>
          ))}
        </div>
      </div>
    </div>
  )
}