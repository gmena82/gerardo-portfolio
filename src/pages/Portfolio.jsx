import usePageMetadata from '../hooks/usePageMetadata'

function Portfolio() {
  usePageMetadata({
    title: "Portfolio | Gerardo Mena's AI Marketing, Writing & Design Work",
    description:
      'Review military-honed leadership, award-winning publications, and high-impact AI marketing campaigns that have generated millions of views and visitors.',
    image: '/GEO-Feature.png',
    url: 'https://www.gerardo-mena.com/portfolio'
  })

  const literaryWorks = [
    {
      title: "A Much-Needed Treat, and a Welcome Surprise",
      publication: "The New York Times - At War Blog",
      date: "August 21, 2013",
      description: "A powerful personal essay about the unexpected kindness of a Starbucks barista toward a veteran, exploring themes of service, gratitude, and civilian-military understanding.",
      url: "https://archive.nytimes.com/atwar.blogs.nytimes.com/2013/08/21/a-much-needed-caramel-latte/"
    },
    {
      title: "'The Enemy,' Through the Eyes of a Child",
      publication: "The New York Times - At War Blog", 
      date: "July 14, 2014",
      description: "A profound personal essay about confronting and overcoming post-war prejudice through the innocent perspective of children at his son's kindergarten 'Teddy Bear Picnic.'",
      url: "https://archive.nytimes.com/atwar.blogs.nytimes.com/2014/07/14/the-enemy-through-the-eyes-of-a-child/"
    },
    {
      title: "Vogue Magazine Feature",
      publication: "Vogue Magazine",
      date: "October 2, 2014",
      description: "Featured as a key performer at the prestigious Headstrong Project benefit in Tribeca, reading poetry alongside celebrities Jake Gyllenhaal and Adam Driver. Event raised $400,000 for veteran PTSD treatment.",
      url: "https://www.vogue.com/article/headstrong-project-words-of-war-fall-benefit"
    },
    {
      title: "Best New Poets 2011",
      publication: "Best New Poets Anthology",
      date: "2011",
      description: "Selected as one of only 50 emerging poets nationwide for inclusion in this prestigious annual anthology. Recognized as a crucial venue for rising poets and valuable resource for poetry lovers.",
      url: "https://app.thestorygraph.com/books/590b7aa0-52f2-49bc-b5ca-7db2c20af47c"
    }
  ];

  const aiMarketingProjects = [
    {
      title: "Generative Engine Optimization (GEO)",
      category: "AI Strategy",
      description: "Pioneer in LLM Search Optimization (LLMSO), developing strategies for brands to rank prominently in AI-powered search results and conversational interfaces.",
      metrics: "Improved search visibility by 300%+"
    },
    {
      title: "AI-Enhanced Video Production",
      category: "Content Creation",
      description: "Professional video campaigns combining AI tools with cinematic production values. Created scroll-stopping content optimized for social platforms and funding presentations.",
      metrics: "19+ Million YouTube Views"
    },
    {
      title: "Cross-Platform Marketing Campaigns",
      category: "Digital Marketing",
      description: "Data-driven marketing strategies across social media, web, and traditional channels. Focus on conversion optimization and measurable ROI for clients.",
      metrics: "3+ Million Website Visitors"
    },
    {
      title: "Brand Identity & Visual Design",
      category: "Graphic Design",
      description: "AI-enhanced design workflows for magazines, sports teams, nonprofits, and professional podcasts. Combining creativity with conversion-focused layouts.",
      metrics: "Multiple 501(c)(3) Organizations"
    }
  ];

  return (
    <section className="py-20 px-8 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8">
            <span className="text-gradient-gerardo">MY</span> <span className="text-gradient-mena">PORTFOLIO</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From Navy Special Operations to The New York Times to pioneering AI marketing strategies—explore a unique portfolio spanning military service, literary achievement, and cutting-edge digital innovation.
          </p>
        </div>

        {/* Key Achievements - Moved to Top */}
        <div className="animate-border-scan animate-pulse-border rounded-xl mb-20">
          <div className="border-scan-content">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              <span className="text-pink-400">KEY</span> <span className="text-pink-500">ACHIEVEMENTS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
              <div className="p-6 bg-gray-900/40 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3 font-orbitron">19M+</div>
                <div className="text-gray-300 text-base font-semibold">YouTube Views Generated</div>
              </div>
              <div className="p-6 bg-gray-900/40 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3 font-orbitron">3M+</div>
                <div className="text-gray-300 text-base font-semibold">Website Visitors Driven</div>
              </div>
              <div className="p-6 bg-gray-900/40 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3 font-orbitron">$1M+</div>
                <div className="text-gray-300 text-base font-semibold">Raised for Charity Events & 501c3 Organizations</div>
              </div>
            </div>

            {/* YouTube Analytics Proof */}
            <div className="text-center">
              <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-4">YouTube Analytics Dashboard</h3>
              <div className="flex flex-col gap-8 items-center">
                <div className="bg-gray-900/60 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <img
                    src="/YT-views.png"
                    alt="YouTube Analytics showing 19.4M views, 3.2M watch hours, 115K subscribers, and 332M impressions"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-4 max-w-2xl">
                    Real YouTube analytics demonstrating proven ability to generate massive reach:
                    <span className="text-cyan-400 font-semibold"> 19.4M views, 3.2M watch hours, 115K+ subscribers, and 332M impressions</span>
                  </p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <img
                    src="/YT2-Views-Channel.png"
                    alt="Second YouTube channel analytics showing over 1 million views - proof of repeatable success across multiple channels"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-4 max-w-2xl">
                    <span className="text-cyan-400 font-semibold">Not a fluke.</span> This is a second channel with over 1 million views—proving our strategies are
                    <span className="text-cyan-400 font-semibold"> repeatable, scalable, and built on real expertise</span>, not luck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Literary Publications Section */}
        <div className="mb-20">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-blue-400">LITERARY</span> <span className="text-blue-500">PUBLICATIONS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {literaryWorks.map((work, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="mb-4">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-1">{work.publication}</p>
                  <p className="text-gray-500 text-sm mb-3">{work.date}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {work.description}
                </p>
                <a 
                  href={work.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:text-cyan-300 text-lg font-bold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  📖 Read Article →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* AI Marketing & Strategy Section */}
        <div className="mb-16">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-pink-400">AI MARKETING</span> <span className="text-pink-500">& STRATEGY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiMarketingProjects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-cyan-400 font-semibold text-sm mb-3">{project.category}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-400 font-semibold text-sm">Key Metric:</p>
                  <p className="text-white text-sm">{project.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphic Design Services Section */}
        <div className="mb-16">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-teal-400">GRAPHIC DESIGN</span> <span className="text-teal-500">SERVICES</span>
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              My graphic design services deliver eye-catching, on-brand visuals that have elevated magazines, sports teams, gyms, athletes, professional podcasts, and multiple 501(c)(3) nonprofits alike. By combining AI-enhanced workflows with conversion-focused layouts, I've driven over 3 million website visitors across digital channels and 19 million YouTube views—boosting engagement, strengthening brand recognition, and ensuring content performs in both social feeds and LLM-powered search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* LLMSO Face 1 */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-400/40 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/LLMSO-Face-1.avif" 
                  alt="Military to Civilian Transformation - Split Face Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Military-Civilian Transformation
                </h3>
                <p className="text-gray-400 text-xs">
                  Powerful split-face design showcasing the duality of military service and civilian life
                </p>
              </div>
            </div>

            {/* LLMSO Face 2 */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-400/40 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/LLMSO-Face-2.avif" 
                  alt="Business Professional to Warrior - Split Face Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Executive-Warrior Duality
                </h3>
                <p className="text-gray-400 text-xs">
                  Striking visual metaphor for leadership that bridges business and military excellence
                </p>
              </div>
            </div>

            {/* SEO Money Tank */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-400/40 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/seo-money-tank.avif" 
                  alt="SEO Dominance Tank with Money - Marketing Metaphor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  SEO Dominance Strategy
                </h3>
                <p className="text-gray-400 text-xs">
                  Striking visuals for blog posts or magazine articles to stop the scroll and get readers' eyeballs on the page.
                </p>
              </div>
            </div>

            {/* Animated GIF */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-400/40 transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/DP-2.gif" 
                  alt="Dynamic Animated Design Element"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  Dynamic Motion Graphics
                </h3>
                <p className="text-gray-400 text-xs">
                  Engaging animated content designed for social media and digital platforms
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gray-800/50 rounded-lg p-6 inline-block">
              <p className="text-teal-400 font-semibold text-lg mb-2">Portfolio Impact:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="text-white">📈 3M+ Website Visitors</span>
                <span className="text-white">🎥 19M+ YouTube Views</span>
                <span className="text-white">🏢 Multiple 501(c)(3) Organizations</span>
                <span className="text-white">🎯 AI-Enhanced Workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Portfolio Showcase */}
        <div className="mb-20">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            <span className="text-gradient-gerardo">VIDEO</span> <span className="text-gradient-mena">PORTFOLIO</span>
          </h2>
          
          {/* Short-Form Content */}
          <div className="mb-12">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 text-center">
              Short-Form Content & Social Media
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/hbZnUxdueNY"
                    title="Aesthetic Tile Social Short"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">Aesthetic Tile Social Short</h4>
                <p className="text-gray-300 text-sm mb-4">Scroll-stopping vertical content optimized for social media engagement and brand awareness</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/Hll582-mC_4"
                    title="Fleitz Family Tile Showcase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">Fleitz Family Tile Showcase</h4>
                <p className="text-gray-300 text-sm mb-4">Professional tile installation showcase featuring family business craftsmanship and expertise</p>
              </div>
            </div>
          </div>

          {/* Long-Form Campaigns */}
          <div className="mb-12">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 text-center">
              Long-Form Campaigns & Funding Presentations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/XEpKyKCcM8I"
                    title="Myth Breakers: Are Tile Remodels Too Expensive?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">Myth Breakers: Are Tile Remodels Too Expensive?</h4>
                <p className="text-gray-300 text-sm mb-4">Engaging educational content that debunks common tile remodeling myths while showcasing professional craftsmanship</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/3cSjVVlYiw0"
                    title="Dark Horse Elite Episode 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-2">Dark Horse Elite Episode 1</h4>
                <p className="text-gray-300 text-sm mb-4">Extended documentary-style episode showcasing veteran entrepreneurship and leadership development</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/contact" 
            target="_blank"
            className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block"
          >
            Ready to bring your ideas to life?
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

