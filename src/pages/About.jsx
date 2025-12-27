import usePageMetadata from '../hooks/usePageMetadata'

function About() {
  usePageMetadata({
    title: 'About Gerardo Mena | Veteran Strategist & AI Innovator',
    description:
      'Discover the journey of Gerardo “Tony” Mena—from elite special operations to acclaimed author and AI strategist leading next-generation storytelling.',
    image: '/Gerardo-Mena-Future.webp',
    url: 'https://www.gerardo-mena.com/about'
  })

  return (
    <>
      {/* Full-width Hero Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-[80vh] overflow-hidden pt-24 sm:pt-32">
        <img 
          src="/Gerardo-Mena-Future.webp" 
          alt="Gerardo Tony Mena - AI Strategist and Creative Technologist portrait"
          width="1920"
          height="1080"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: '50% 10%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60"></div>
      </div>

      <section className="py-20 px-8 -mt-16 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* About Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-orbitron text-3xl md:text-5xl font-black text-center mb-12 mt-8 md:mt-12">
              <span className="text-gradient-gerardo">ABOUT ME</span>
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-lg md:text-xl leading-relaxed">
                For more than two decades, Gerardo "Tony" Mena has worked in high-pressure environments that demand clear thinking and decisive action. His career spans military operations, leadership roles, and emerging technologies, including artificial intelligence, with a focus on understanding complex systems and turning insight into results.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Mena began his career as a U.S. Navy Special Amphibious Reconnaissance Corpsman (SARC), serving alongside Reconnaissance Marines. In this role, he was trained in both combat operations and advanced trauma medicine, often operating in austere, high-risk conditions. These experiences required clear judgment under pressure and the ability to remain effective in uncertain environments. For his service in Iraq, he was awarded the Navy Achievement Medal with Valor.
              </p>

              {/* Military Service Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Navy-Ball-2-F.webp" 
                    alt="Navy Ball - Military formal event"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Navy Ball</h3>
                    <p className="text-gray-400 text-xs">Having a blast with my best friends after our Iraq deployment in 2007.</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Chuck-Norris-F.webp" 
                    alt="Military unit with Chuck Norris visit"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Chuck Norris Visit</h3>
                    <p className="text-gray-400 text-xs">Chuck Norris visited after one of our platoonmates was severely wounded and he was kind enough to hold up a sign for him that we sent him.</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Iraq-07-F.webp" 
                    alt="Iraq deployment 2007 - Combat unit"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Iraq Deployment 2007</h3>
                    <p className="text-gray-400 text-xs">Combat deployment with reconnaissance unit in Iraq theater of operations</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Mongolia-F.webp" 
                    alt="Mongolia training exercise - Military personnel"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Mongolia 2005</h3>
                    <p className="text-gray-400 text-xs">Our Recon unit was assigned to protect President Bush during his Mongolia stop on his Asia tour. Good times were had all around. I miss these days.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Returning home, he turned to the world of creative writing, translating his experiences into language. His acclaimed book, <em className="text-cyan-400">The Shape of Our Faces No Longer Matters</em>, and his work in publications like <em className="text-cyan-400">The New York Times</em> and the <em className="text-cyan-400">Best New Poets</em> anthology turned into a new mission: to build a narrative bridge between the civilian world and the realities of the veteran experience. He became a recognized voice, performing his work at charity events alongside cultural figures like Jake Gyllenhaal, Lili Taylor, Adam Driver, and others.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Today, he applies the same strategic principles to the defining system of a new era: artificial intelligence. As a web designer, social media coordinator, and AI Specialist at Army University Press, Mena is a pioneer in the emerging field of Generative Engine Optimization (GEO). He sees AI as a new operational environment with its own rules, patterns, and languages. He designs the frameworks that allow brands to navigate this new terrain, translating their core values into stories that AI understands and amplifies.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                For Mena, the mission has always remained the same: do the work, understand the systems, and achieve the objectives. Whether you need to build a resilient brand story, develop a cutting-edge AI marketing strategy, or learn the principles of high-stakes leadership, Gerardo "Tony" Mena brings a unique perspective forged in conflict, honed by art, and proven in the marketplace.
              </p>

              {/* Civilian Career & Literary Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Seth-Myers-F.webp" 
                    alt="Seth Meyers event - Literary career"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Literary Career</h3>
                    <p className="text-gray-400 text-xs">Performing alongside celebrities and fellow writers at literary events and charity fundraisers</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/BoysatState-F.webp" 
                    alt="Boys at State wrestling event"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Family & Community</h3>
                    <p className="text-gray-400 text-xs">Supporting young athletes and building community connections through youth sports programs</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/WordsofWar-F.webp" 
                    alt="Words of War publication feature"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Published Author</h3>
                    <p className="text-gray-400 text-xs">Featured in major publications and literary reviews, bridging military experience with civilian understanding</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Luke-State-F.webp" 
                    alt="Luke State wrestling championship"
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Coaching & Mentorship</h3>
                    <p className="text-gray-400 text-xs">Applying military leadership principles to develop young champions and future leaders</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About CTA */}
            <div className="text-center mt-16">
              <a 
                href="/contact" 
                target="_blank"
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

