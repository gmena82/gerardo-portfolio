import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BackToTop from './BackToTop'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
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
      <header className="absolute top-0 left-0 right-0 z-30 p-4 md:p-6 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link 
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/GM-Logo.png" 
              alt="GM Logo" 
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              About Me
            </Link>
            <Link 
              to="/portfolio"
              className={`transition-colors ${isActive('/portfolio') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/resume"
              className={`transition-colors ${isActive('/resume') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Resume
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Contact Us
            </Link>
            <Link 
              to="/blog"
              className={`transition-colors ${isActive('/blog') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              Blog
            </Link>
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

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

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
          <Link 
            to="/"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/about') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            About Me
          </Link>
          <Link 
            to="/portfolio"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/portfolio') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/resume"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/resume') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Resume
          </Link>
          <Link 
            to="/contact"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/contact') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Contact Us
          </Link>
          <Link 
            to="/blog"
            onClick={closeMobileMenu}
            className={`text-lg transition-colors ${isActive('/blog') ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
          >
            Blog
          </Link>
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

      {/* Back to Top Button */}
      <BackToTop />

      {/* Professional Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <img 
                  src="/GM-Logo.png" 
                  alt="GM Logo" 
                  className="h-12 w-auto mx-auto md:mx-0"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming ideas into reality through AI innovation, creative content, and cutting-edge web development.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <Link 
                  to="/"
                  className={`block transition-colors text-sm ${isActive('/') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Home
                </Link>
                <Link 
                  to="/about"
                  className={`block transition-colors text-sm ${isActive('/about') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  About Me
                </Link>
                <Link 
                  to="/portfolio"
                  className={`block transition-colors text-sm ${isActive('/portfolio') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/resume"
                  className={`block transition-colors text-sm ${isActive('/resume') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Resume
                </Link>
                <Link 
                  to="/contact"
                  className={`block transition-colors text-sm ${isActive('/contact') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Contact Us
                </Link>
                <Link 
                  to="/blog"
                  className={`block transition-colors text-sm ${isActive('/blog') ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Ready to collaborate?</p>
                <Link 
                  to="/contact"
                  className="block text-cyan-400 hover:text-white transition-colors"
                >
                  Let's work together
                </Link>
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

