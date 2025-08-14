function Portfolio() {
  return (
    <section className="py-20 px-8 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8">
            <span className="text-gradient-gerardo">MY</span> <span className="text-gradient-mena">PORTFOLIO</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore a curated collection of my work spanning AI innovation, creative content, web development, and strategic marketing campaigns that have generated millions of views and secured substantial funding.
          </p>
        </div>

        {/* Portfolio Grid - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 font-orbitron">Project {item}</span>
              </div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                Portfolio Item {item}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Description of this amazing project and its impact on the client's success.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">AI</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">Design</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#" 
            className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block"
          >
            Let's create something amazing together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

