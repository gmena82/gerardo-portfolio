import { Link } from 'react-router-dom'

function Blog() {
  return (
    <section className="py-20 px-8 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8">
            <span className="text-gradient-gerardo">INSIGHTS &</span> <span className="text-gradient-mena">ARTICLES</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Thoughts on AI strategy, creative leadership, and the intersection of technology and human experience from the front lines of innovation.
          </p>
        </div>

        {/* Hero Video Section */}
        <div className="mb-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-2"></div>
            <div className="col-span-12 md:col-span-8">
              <div className="relative rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <video 
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/Blog-F.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "The Future of Generative Engine Optimization",
              excerpt: "How AI is reshaping the way we think about content strategy and brand narrative in the digital age.",
              date: "August 16, 2025",
              category: "AI Strategy",
              slug: "the-future-of-generative-engine-optimization",
              published: true
            },
            {
              title: "Leadership Lessons from Special Operations",
              excerpt: "Applying military decision-making frameworks to high-stakes business environments.",
              date: "January 10, 2025",
              category: "Leadership",
              slug: "leadership-lessons-from-special-operations",
              published: false
            },
            {
              title: "Bridging Worlds: From Combat to Creative Writing",
              excerpt: "The unexpected parallels between military service and artistic expression.",
              date: "January 5, 2025",
              category: "Personal",
              slug: "bridging-worlds-combat-to-creative-writing",
              published: false
            },
            {
              title: "AI and the Art of Strategic Storytelling",
              excerpt: "How artificial intelligence is transforming the way brands connect with their audiences.",
              date: "December 28, 2024",
              category: "AI Strategy",
              slug: "ai-and-strategic-storytelling",
              published: false
            },
            {
              title: "The Veteran's Guide to Tech Innovation",
              excerpt: "Leveraging military experience to drive technological advancement and startup success.",
              date: "December 20, 2024",
              category: "Innovation",
              slug: "veterans-guide-to-tech-innovation",
              published: false
            },
            {
              title: "Building Resilient Brand Narratives",
              excerpt: "Creating stories that withstand market volatility and cultural shifts.",
              date: "December 15, 2024",
              category: "Branding",
              slug: "building-resilient-brand-narratives",
              published: false
            }
          ].map((post, index) => (
            <article key={index} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group">
              <div className="mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                  {post.category}
                </span>
              </div>
              <h2 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">{post.date}</span>
                {post.published ? (
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 text-sm font-medium hover:text-white transition-colors"
                  >
                    Read More →
                  </Link>
                ) : (
                  <span className="text-gray-600 text-sm font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 text-center">
          <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI strategy, leadership, and innovation delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <button className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

