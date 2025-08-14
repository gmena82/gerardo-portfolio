import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Layout({ children, currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-main-gradient relative min-h-screen overflow-x-hidden">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 p-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="font-orbitron text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            GM
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${currentPage === 'about' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className={`transition-colors ${currentPage === 'portfolio' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleNavClick('resume')}
              className={`transition-colors ${currentPage === 'resume' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Resume
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`transition-colors ${currentPage === 'blog' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Blog
            </button>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              aria-label="Open menu" 
              className="text-white focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/90 backdrop-blur-sm z-40 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMobileMenu}
            aria-label="Close menu" 
            className="text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-lg transition-colors ${currentPage === 'home' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`text-lg transition-colors ${currentPage === 'about' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('portfolio')}
            className={`text-lg transition-colors ${currentPage === 'portfolio' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavClick('resume')}
            className={`text-lg transition-colors ${currentPage === 'resume' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Resume
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`text-lg transition-colors ${currentPage === 'contact' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Contact Us
          </button>
          <button 
            onClick={() => handleNavClick('blog')}
            className={`text-lg transition-colors ${currentPage === 'blog' ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Blog
          </button>
        </nav>
      </div>

      {/* Vertical Label (Desktop Only) */}
      <div className="hidden lg:block absolute top-0 left-4 h-full z-10">
        <div className="flex items-center h-full">
          <p className="vertical-label text-gray-500 font-orbitron tracking-widest text-xs uppercase">
            Gerardo Mena // Portfolio 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" className="relative min-h-screen">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">GM</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming ideas into reality through AI innovation, creative content, and cutting-edge web development.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => handleNavClick('about')}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('portfolio')}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </button>
                <button 
                  onClick={() => handleNavClick('blog')}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Blog
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Ready to collaborate?</p>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="block text-cyan-400 hover:text-white transition-colors"
                >
                  Let's work together
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Gerardo Mena. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

