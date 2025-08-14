function About() {
  return (
    <>
      {/* Full-width Hero Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden mt-40 md:mt-48 lg:mt-72">
        <img 
          src="/about-hero.webp" 
          alt="Gerardo Tony Mena - Professional portrait"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 0%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60"></div>
      </div>

      <section className="py-20 px-8 -mt-16 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* About Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-orbitron text-3xl md:text-5xl font-black text-center mb-12">
              <span className="text-gradient-gerardo">ABOUT</span> <span className="text-gradient-mena">TONY</span>
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-lg md:text-xl leading-relaxed">
                In the world's most demanding environments, strategy is the art of seeing patterns where others see chaos. For over two decades, Gerardo "Tony" Mena has built a career on mastering complex systems—from the front lines of special operations to the vanguard of artificial intelligence—and translating that understanding into decisive action. He is a strategist of systems and stories, and crafting the narratives within them.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                His journey began as a U.S. Navy Special Amphibious Reconnaissance Corpsman (SARC), one of the military's most elite and challenging roles. Embedded with Reconnaissance Marines, his mission was a study in duality: to be a master of both combat tactics and advanced trauma medicine. Operating far behind enemy lines, he learned to make life-or-death decisions, and to find order and calm in the most unpredictable circumstances. For his actions in Iraq, he was awarded the Navy Achievement Medal with Valor.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Returning home, he faced a new system to decode: the complex landscape of trauma and memory. He turned to the world of creative writing, translating his experiences into language. His acclaimed book, <em className="text-cyan-400">The Shape of Our Faces No Longer Matters</em>, and his work in publications like <em className="text-cyan-400">The New York Times</em> and the <em className="text-cyan-400">Best New Poets</em> anthology turned into a new mission: to build a narrative bridge between the civilian world and the realities of the veteran experience. He became a recognized voice, performing his work at charity events alongside cultural figures like Jake Gyllenhaal and Adam Driver.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Today, he applies the same strategic principles to the defining system of a new era: artificial intelligence. As a web designer, social media coordinator, and AI Specialist at Army University Press, Tony is a pioneer in the emerging field of Generative Engine Optimization (GEO). He sees AI as a new operational environment with its own rules, patterns, and languages. He designs the frameworks that allow brands to navigate this new terrain, translating their core values into stories that AI understands and amplifies.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                From decoding enemy movements in Iraq to decoding the algorithms of search engines, the mission has remained the same: do the work, understand the systems, and achieve the objectives. Whether you need to build a resilient brand story, develop a cutting-edge AI marketing strategy, or learn the principles of high-stakes leadership, Gerardo "Tony" Mena brings a unique perspective forged in conflict, honed by art, and proven in the marketplace.
              </p>
            </div>

            {/* About CTA */}
            <div className="text-center mt-16">
              <a 
                href="#" 
                className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block"
              >
                Ready to work with a proven strategist?
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

