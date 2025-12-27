import { Link } from 'react-router-dom'

import usePageMetadata from '../hooks/usePageMetadata'

function Blog() {
  usePageMetadata({
    title: 'Blog | Insights on AI Strategy & Creative Leadership',
    description:
      'Read the latest articles from Gerardo Mena on AI-driven marketing, creative leadership, and the future of generative search.',
    image: '/GEO-Feature.webp',
    url: 'https://www.gerardo-mena.com/blog'
  })

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
              title: "What a Week!",
              excerpt: "We rushed a documentary onto a Vegas jumbotron, then briefed the Harding Project on AI—exhausting, humbling, and worth it.",
              date: "August 25, 2025",
              category: "Updates",
              slug: "what-a-week",
              published: true,
              image: "/blog-photo.webp"
            },
            {
              title: "The Future of Generative Engine Optimization",
              excerpt: "How AI is reshaping the way we think about content strategy and brand narrative in the digital age.",
              date: "August 16, 2025",
              category: "AI Strategy",
              slug: "the-future-of-generative-engine-optimization",
              published: true,
              image: "/blog-1.webp"
            }
          ].map((post, index) => (
            <article key={index} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group">
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    width="600"
                    height="338"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
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
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 text-sm font-medium hover:text-white transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

