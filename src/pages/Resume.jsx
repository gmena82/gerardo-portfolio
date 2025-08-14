function Resume() {
  return (
    <section className="py-20 px-8 pt-32">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8">
            <span className="text-gradient-gerardo">MY</span> <span className="text-gradient-mena">RESUME</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Two decades of experience spanning elite military operations, creative writing, and cutting-edge AI innovation.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
            <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-cyan-500/30 pl-6">
                <h3 className="font-orbitron text-xl font-bold text-white">AI Specialist</h3>
                <p className="text-cyan-400 font-semibold">Army University Press</p>
                <p className="text-gray-400 text-sm mb-3">Present</p>
                <p className="text-gray-300 leading-relaxed">
                  Pioneer in Generative Engine Optimization (GEO), developing frameworks for AI-driven content strategy and brand narrative optimization.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/30 pl-6">
                <h3 className="font-orbitron text-xl font-bold text-white">Published Author & Creative Writer</h3>
                <p className="text-cyan-400 font-semibold">Independent</p>
                <p className="text-gray-400 text-sm mb-3">2010 - Present</p>
                <p className="text-gray-300 leading-relaxed">
                  Author of "The Shape of Our Faces No Longer Matters" with publications in The New York Times and Best New Poets anthology.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/30 pl-6">
                <h3 className="font-orbitron text-xl font-bold text-white">Special Amphibious Reconnaissance Corpsman (SARC)</h3>
                <p className="text-cyan-400 font-semibold">U.S. Navy</p>
                <p className="text-gray-400 text-sm mb-3">Military Service</p>
                <p className="text-gray-300 leading-relaxed">
                  Elite special operations role combining combat tactics and advanced trauma medicine. Awarded Navy Achievement Medal with Valor for actions in Iraq.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
            <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Key Achievements</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Generated millions of views for client campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Secured millions in seed funding through strategic narratives</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Performed alongside Jake Gyllenhaal and Adam Driver at charity events</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Navy Achievement Medal with Valor recipient</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume

