import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, Play } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
          <a href="#" className="font-orbitron text-2xl font-bold text-white">GM</a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Resume</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
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
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">Home</a>
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">Resume</a>
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">Contact Us</a>
          <a href="#" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">Blog</a>
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
      <main id="main-content" className="relative min-h-screen flex flex-col lg:flex-row items-center">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 lg:pl-24 lg:pr-16 z-10">
          <div className="max-w-xl text-center lg:text-left pt-24 pb-12 lg:pt-0 lg:pb-0">
            <p className="font-orbitron text-cyan-400 text-sm md:text-base font-bold tracking-widest uppercase">
              The AI Revolution
            </p>
            <h1 className="font-orbitron text-5xl md:text-7xl font-black my-4 text-gradient">
              GERARDO MENA
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
              Published author, AI artist, social media coordinator, and web developer. 
              Has generated millions of views for clients and millions of dollars in seed funding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#" 
                className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's work together
              </a>
              <a 
                href="#" 
                className="btn-secondary-glow bg-[#ff3d68] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View portfolio
              </a>
            </div>
            <ul className="text-gray-400 space-y-3 text-base md:text-lg">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Millions of views generated for clients</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Millions in seed funding secured</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Expert in Web Dev, AI Art & Social Media</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Hero Video */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full hero-media scanline-overlay">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover object-center opacity-40 lg:opacity-100"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      {/* YouTube Highlight Reel Section */}
      <section className="bg-main-gradient py-16 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-white text-2xl md:text-4xl mb-8 font-manrope slide-in-right">
            Enjoy a highlight reel of Tony Mena's recent work.
          </h2>
          
          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-3xl mx-auto mb-12">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hsK5Z3dkaTw"
                title="Tony Mena Highlight Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* New CTA Button */}
          <div className="flex justify-center">
            <a 
              href="#" 
              className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Click here to bring your amazing ideas to life!
            </a>
          </div>
        </div>
      </section>

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
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="font-orbitron text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Ready to collaborate?</p>
                <a href="#" className="block text-cyan-400 hover:text-white transition-colors">
                  Let's work together
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Gerardo Mena. All rights reserved. | Powered by AI Innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

