import usePageMetadata from '../hooks/usePageMetadata'

function Home() {
  usePageMetadata({
    title: 'Gerardo Mena | AI Strategist, Creative Technologist & Storyteller',
    description:
      "Explore Gerardo Mena's award-winning blend of AI strategy, storytelling, and digital production that has generated millions of views and funding for clients.",
    image: '/Gerardo-Mena-Future.webp',
    url: 'https://www.gerardo-mena.com/',
    type: 'website'
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 lg:pl-24 lg:pr-16 z-10">
          <div className="max-w-xl text-center lg:text-left pt-24 pb-12 lg:pt-0 lg:pb-0">
            <p className="font-orbitron text-cyan-400 text-sm md:text-base font-bold tracking-widest uppercase">
              The AI Revolution
            </p>
            <h1 className="font-orbitron text-5xl md:text-7xl font-black my-4">
              <div className="text-gradient-gerardo">GERARDO</div>
              <div className="text-gradient-mena">MENA</div>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
              Published author, AI artist, social media coordinator, and web developer. 
              Has generated millions of views for clients and millions of dollars in seed funding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="/contact" 
                target="_blank"
                className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's work together
              </a>
              <a 
                href="/portfolio" 
                target="_blank"
                className="btn-secondary-glow bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
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
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full bg-black rounded-none overflow-hidden border-0 lg:border-4 lg:border-black shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 hero-media scanline-overlay"></div>
          </div>
        </div>
      </section>

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

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/contact"
              target="_blank"
              className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Click here to bring your amazing ideas to life!
            </a>
          </div>

          {/* Featured Fire Project Video */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-cyan-500/40">
              <video
                className="w-full h-full"
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="/Gerardo-Mena-Future.webp"
              >
                <source src="/Fire-s.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

