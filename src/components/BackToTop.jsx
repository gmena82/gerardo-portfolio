import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 md:w-14 md:h-14
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br from-cyan-500 to-cyan-600
        text-white
        shadow-lg shadow-cyan-500/30
        transition-all duration-300 ease-out
        cursor-pointer
        group
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
        ${isHovered 
          ? 'scale-110 shadow-xl shadow-cyan-400/50' 
          : 'scale-100'
        }
        hover:from-cyan-400 hover:to-cyan-500
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
      `}
      style={{
        boxShadow: isHovered 
          ? '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.3)' 
          : '0 4px 20px rgba(34, 211, 238, 0.3)'
      }}
    >
      {/* Pulse ring animation */}
      <span 
        className={`
          absolute inset-0 rounded-full
          bg-cyan-400/30
          transition-all duration-500
          ${isHovered ? 'animate-ping' : ''}
        `}
        style={{ animationDuration: '1.5s' }}
      />
      
      {/* Inner glow ring */}
      <span 
        className={`
          absolute inset-1 rounded-full
          border-2 border-cyan-300/50
          transition-all duration-300
          ${isHovered ? 'border-cyan-200/80 scale-105' : ''}
        `}
      />
      
      {/* Arrow icon with bounce animation on hover */}
      <ChevronUp 
        className={`
          w-6 h-6 md:w-7 md:h-7
          relative z-10
          transition-transform duration-300
          ${isHovered ? '-translate-y-0.5' : ''}
        `}
        strokeWidth={2.5}
      />
      
      {/* Second arrow for parallax effect on hover */}
      <ChevronUp 
        className={`
          absolute w-6 h-6 md:w-7 md:h-7
          transition-all duration-300
          ${isHovered 
            ? 'opacity-50 -translate-y-2' 
            : 'opacity-0 translate-y-0'
          }
        `}
        strokeWidth={2.5}
      />
    </button>
  )
}

export default BackToTop

