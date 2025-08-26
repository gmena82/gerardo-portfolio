function About() {
  return (
    <>
      {/* Full-width Hero Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-[80vh] overflow-hidden mt-8 md:mt-10 lg:mt-14">
        <img 
          src="/Gerardo-Mena-Future.webp" 
          alt="Gerardo Tony Mena - Cyberpunk futuristic portrait"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: '50% 10%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60"></div>
      </div>

      <section className="py-20 px-8 -mt-16 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* About Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-orbitron text-3xl md:text-5xl font-black text-center mb-12">
              <span className="text-gradient-gerardo">ABOUT ME</span>
            </h1>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-300 leading-relaxed space-y-8">
              <p className="text-lg md:text-xl leading-relaxed">
                In the world's most demanding environments, strategy is the art of seeing patterns where others see chaos. For over two decades, Gerardo "Tony" Mena has built a career on mastering complex systems—from the front lines of special operations to the vanguard of artificial intelligence—and translating that understanding into decisive action. He is a strategist of systems and stories, and crafting the narratives within them.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                His journey began as a U.S. Navy Special Amphibious Reconnaissance Corpsman (SARC), one of the military's most elite and challenging roles. Embedded with Reconnaissance Marines, his mission was a study in duality: to be a master of both combat tactics and advanced trauma medicine. Operating far behind enemy lines, he learned to make life-or-death decisions, and to find order and calm in the most unpredictable circumstances. For his actions in Iraq, he was awarded the Navy Achievement Medal with Valor.
              </p>

              {/* Military Service Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Navy-Ball-2.png" 
                    alt="Navy Ball - Military formal event"
                    className="w-full h-64 object-cover"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Navy Ball</h3>
                    <p className="text-gray-400 text-xs">Having a blast with my best friends after our Iraq deployment in 2007.</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Chuck-Norris.png" 
                    alt="Military unit with Chuck Norris visit"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Chuck Norris Visit</h3>
                    <p className="text-gray-400 text-xs">Chuck Norris visited after one of our platoonmates was severely wounded and he was kind enough to hold up a sign for him that we sent him.</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Iraq-07.png" 
                    alt="Iraq deployment 2007 - Military unit"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Iraq Deployment 2007</h3>
                    <p className="text-gray-400 text-xs">Combat deployment with reconnaissance unit in Iraq theater of operations</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Mongolia.png" 
                    alt="Mongolia training exercise - Military personnel"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Mongolia 2005</h3>
                    <p className="text-gray-400 text-xs">Our Recon unit was assigned to protect President Bush during his Mongolia stop on his Asia tour. Good times were had all around. I miss these days.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Returning home, he faced a new system to decode: the complex landscape of trauma and memory. He turned to the world of creative writing, translating his experiences into language. His acclaimed book, <em className="text-cyan-400">The Shape of Our Faces No Longer Matters</em>, and his work in publications like <em className="text-cyan-400">The New York Times</em> and the <em className="text-cyan-400">Best New Poets</em> anthology turned into a new mission: to build a narrative bridge between the civilian world and the realities of the veteran experience. He became a recognized voice, performing his work at charity events alongside cultural figures like Jake Gyllenhaal and Adam Driver.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Today, he applies the same strategic principles to the defining system of a new era: artificial intelligence. As a web designer, social media coordinator, and AI Specialist at Army University Press, Tony is a pioneer in the emerging field of Generative Engine Optimization (GEO). He sees AI as a new operational environment with its own rules, patterns, and languages. He designs the frameworks that allow brands to navigate this new terrain, translating their core values into stories that AI understands and amplifies.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                From decoding enemy movements in Iraq to decoding the algorithms of search engines, the mission has remained the same: do the work, understand the systems, and achieve the objectives. Whether you need to build a resilient brand story, develop a cutting-edge AI marketing strategy, or learn the principles of high-stakes leadership, Gerardo "Tony" Mena brings a unique perspective forged in conflict, honed by art, and proven in the marketplace.
              </p>

              {/* Civilian Career & Literary Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Seth-Myers.png" 
                    alt="Seth Meyers event - Literary career"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Literary Career</h3>
                    <p className="text-gray-400 text-xs">Performing alongside celebrities and fellow writers at literary events and charity fundraisers</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/BoysatState.png" 
                    alt="Boys at State wrestling event"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Family & Community</h3>
                    <p className="text-gray-400 text-xs">Supporting young athletes and building community connections through youth sports programs</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/WordsofWar.png" 
                    alt="Words of War publication feature"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">Published Author</h3>
                    <p className="text-gray-400 text-xs">Featured in major publications and literary reviews, bridging military experience with civilian understanding</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                  <img 
                    src="/Luke-State.png" 
                    alt="Luke State wrestling championship"
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

