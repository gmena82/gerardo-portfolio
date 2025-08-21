import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, we'll load the GEO post directly
    // In the future, this could be expanded to load multiple posts
    if (slug === 'the-future-of-generative-engine-optimization') {
      const postData = {
        title: "The Future of Generative Engine Optimization",
        author: "Gerardo Mena",
        date: "2025-08-16",
        excerpt: "Search is morphing into something new. Instead of sending you to a list of websites, generative engines synthesize answers from multiple sources and present a summarized, conversational response. Discover how GEO can boost your site's visibility by up to 40%.",
        heroImage: '/blog-1.webp',
        tags: ["AI", "SEO", "GEO", "Search", "Strategy"],
        readTime: "8 min read",
        content: `# The Future of Generative Engine Optimization

## From "10 blue links" to answer engines

Search is morphing into something new. Instead of sending you to a list of websites, generative engines synthesize answers from multiple sources and present a summarized, conversational response—often with citations and follow-up prompts. You see this across Google's AI Overviews / AI Mode, ChatGPT Search, and Perplexity. Google describes these features as snapshots and exploration starting points; OpenAI's Search efforts emphasize fast, sourced answers; and Perplexity frames itself as a "search and answer" engine with inline citations.

This shift is profound for creators and brands. If AI is the front door to the web, how do we ensure our work is selected, summarized, and cited? That's the promise—and challenge—of **Generative Engine Optimization (GEO)**.

## What is Generative Engine Optimization (GEO)?

GEO is a research-backed framework for improving a site's likelihood of being surfaced and cited within generative answers. In 2023–2024, researchers introduced GEO and released GEO-Bench, showing that targeted content and presentation strategies can boost a site's visibility inside generative responses by **as much as 40%** across tested domains. In practice, this means deliberately crafting content that LLMs (and the retrievers that feed them) can understand, trust, and reuse with attribution.

Unlike classic SEO, where position on a results page is the prize, GEO seeks inclusion and attribution inside synthesized answers—ideally with a link or brand mention. It's less about ranking for a single query and more about becoming a go-to factual building block for clusters of related questions.

## How generative engines choose content

Behind the scenes, generative systems blend three layers:

### 1. Crawl & indexing signals
Your pages still need to be discoverable, indexable, and eligible for snippets—foundational SEO persists. Google explicitly states there are no special schema types required just to appear in AI features; the same eligibility and snippet controls apply.

### 2. Retrieval & grounding
For an answer, the engine fans out to sub-queries, fetches relevant sources, and grounds the model's output with citations. Structured data that matches visible text, clear headings, and machine-readable facts help you get selected more often.

### 3. Generation & attribution
The model synthesizes a response and often shows links. Increasingly, engines like ChatGPT Search and Perplexity position verifiable, citation-rich sources more prominently.

## A practical GEO playbook for 2025

### 1) Nail the fundamentals (they still matter)
Keep robots open, provide sitemaps and canonicals, ensure important text is actually on the page, and align structured data with visible content. These are table stakes for even being eligible in AI features.

### 2) Use structured data where it reinforces facts
While there's no "AI Overviews" schema, consistent JSON-LD for things like Article, FAQ, HowTo, Product, Organization, Person/Author, and Video makes your content more digestible to crawlers and knowledge graphs. That indirectly improves inclusion and the quality of citations. Ensure your schema matches what users see.

### 3) Author credibility and E-E-A-T signals
Clear bylines, credentials, original media, and transparent sourcing help both traditional ranking systems and generative systems that try to privilege trustworthy content—especially on YMYL topics. Build demonstrable Experience, Expertise, Authoritativeness, and Trustworthiness across your site and author pages.

### 4) Write "GEO-ready" content
Generative engines prefer:
- **Declarative sentences** that state facts explicitly
- **Short, scannable sections** answering common sub-questions (which map neatly to "fan-out" retrieval)
- **Embedded FAQs and key takeaways** that models can lift with attribution

These patterns echo techniques tested in the GEO research.

### 5) Publish primary sources & data
Original research, checklists, implementation steps, and annotated examples are frequently cited because they're uniquely valuable and unambiguous to quote. If you're a service brand, publish proof of work artifacts (methodologies, case studies with metrics, sample datasets) that an answer engine can point to.

### 6) Reduce ambiguity for machines
Disambiguate entities (company names, products, locations) with consistent naming, glossary sections, and internal links. Use descriptive alt text and transcripts. The goal is to make your page the easiest node to map to a concept.

### 7) Control your preview, not just your crawl
If you need to limit what appears in AI features (or in Search generally), use snippet controls like max-snippet, data-nosnippet, or nosnippet. For training controls beyond Search, review Google-Extended. Be intentional: total blocking can reduce discoverability and mentions.

### 8) Measure share-of-voice in answers
Track when your brand is cited inside AI Overviews, ChatGPT Search results, and Perplexity answers. While analytics is evolving, you can combine Search Console's "Web" performance data with manual spot checks and third-party trackers to approximate your answer presence. Google indicates that clicks from pages with AI Overviews often show higher engagement—another reason to optimize for inclusion.

## Reality check: accuracy, safety, and brand risk

Generative engines can still hallucinate or surface low-quality data. Recent reporting shows AI Overviews have, at times, surfaced incorrect or even scammy information (e.g., fraudulent phone numbers), reminding us that quality signals and verified sources matter. The broader industry press has also documented ongoing reliability challenges in AI search. As you pursue GEO, treat citations and brand mentions as earned trust—and monitor for misattribution.

## Where this is going

Expect three big arcs:

### 1. Better attribution economics
Licensing deals and new pay-for-use models are accelerating. From large publisher agreements with AI companies to emerging attribution startups, incentives are shifting toward licensed and verifiable sources. This is good news for creators who invest in high-quality, original content.

### 2. Answer-native UX
Interfaces like ChatGPT Search and Perplexity's answer cards will push users deeper through related prompts rather than back to a generic results page. The winners will be sources that consistently power those hops with clear, verifiable facts.

### 3. GEO as a team sport
GEO will blend editorial, design, data, and engineering: writers craft answer-friendly sections; developers maintain clean markup and entity clarity; analysts monitor citations; and brand leads ensure authorship and originality shine. The research community will keep publishing techniques that measurably increase visibility inside generative answers.

## Quick GEO checklist

- ✅ Page is indexable, fast, and text-forward; important facts are in plain HTML
- ✅ Accurate JSON-LD that mirrors visible content (Article, FAQ/HowTo, Product, Person, Organization)
- ✅ Clear authorship, bios, sources, and original assets (E-E-A-T)
- ✅ Content structured into explicit answers and FAQs that map to sub-queries
- ✅ Monitoring for brand citations/links in AI Overviews, ChatGPT Search, and Perplexity
- ✅ Thoughtful use of snippet/training controls where needed

## Further Reading

<section class="further-reading" aria-labelledby="further-reading-heading">
  <ul class="further-reading-list">
    <li>
      <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">
        GEO: Generative Engine Optimization (arXiv, 2023)
      </a>
    </li>
    <li>
      <a href="https://developers.google.com/search/docs/appearance/ai-overviews" target="_blank" rel="noopener noreferrer">
        Google Search Central - AI Features (Google, 2024)
      </a>
    </li>
    <li>
      <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">
        Google Structured Data Guidelines (Google, 2024)
      </a>
    </li>
    <li>
      <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">
        Google E-E-A-T Guidelines (Google, 2024)
      </a>
    </li>
    <li>
      <a href="https://www.washingtonpost.com/technology/2024/05/30/google-ai-overviews-errors/" target="_blank" rel="noopener noreferrer">
        AI Overviews reliability challenges (The Washington Post, 2024)
      </a>
    </li>
    <li>
      <a href="https://searchengineland.com/google-ai-overviews-seo-impact-445234" target="_blank" rel="noopener noreferrer">
        AI search reliability and SEO impact (Search Engine Land, 2024)
      </a>
    </li>
    <li>
      <a href="https://www.wired.com/story/ai-search-engines-publishers-licensing/" target="_blank" rel="noopener noreferrer">
        Publisher licensing trends and attribution economics (WIRED, 2024)
      </a>
    </li>
    <li>
      <a href="https://digiday.com/media/publishers-ai-licensing-deals/" target="_blank" rel="noopener noreferrer">
        Media industry perspective on AI licensing (Digiday, 2024)
      </a>
    </li>
    <li>
      <a href="https://openai.com/index/introducing-chatgpt-search/" target="_blank" rel="noopener noreferrer">
        OpenAI ChatGPT Search announcement (OpenAI, 2024)
      </a>
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Perplexity_AI" target="_blank" rel="noopener noreferrer">
        Perplexity AI Overview (Wikipedia)
      </a>
    </li>
    <li>
      <a href="https://dl.acm.org/doi/10.1145/3589335.3651434" target="_blank" rel="noopener noreferrer">
        Academic research on generative search optimization (ACM Digital Library, 2024)
      </a>
    </li>
  </ul>
</section>`
      }
      
      setPost(postData)
      
      // Set document title and meta description for SEO
      document.title = `${postData.title} | Gerardo Mena - AI Strategy & Innovation`
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = postData.excerpt
      
      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": postData.title,
        "description": postData.excerpt,
        "image": `https://www.gerardo-mena.com${postData.heroImage}`,
        "author": {
          "@type": "Person",
          "name": postData.author,
          "url": "https://www.gerardo-mena.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Gerardo Mena",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.gerardo-mena.com/GM-Logo.png"
          }
        },
        "datePublished": postData.date,
        "dateModified": postData.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.gerardo-mena.com/blog/${slug}`
        },
        "keywords": postData.tags.join(', '),
        "articleSection": "AI Strategy",
        "wordCount": postData.content.split(' ').length
      }
      
      // Add structured data script
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]')
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script')
        structuredDataScript.type = 'application/ld+json'
        document.head.appendChild(structuredDataScript)
      }
      structuredDataScript.textContent = JSON.stringify(structuredData)
      
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-cyan-400 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-gray-900 py-20 px-8 pt-32">
      <div className="container mx-auto max-w-4xl">
        {/* Back to Blog Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl border border-cyan-500/20"
          />
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400">
            <div className="flex items-center gap-4">
              <span>By <span className="text-cyan-400 font-medium">{post.author}</span></span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="blog-content text-gray-300 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle H1 headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="font-orbitron text-3xl font-bold text-cyan-400 mb-6 mt-8">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              
              // Handle H2 headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-orbitron text-2xl font-bold text-cyan-400 mb-4 mt-8">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              // Handle numbered lists (1. 2. 3. etc.) - MUST come before H3 handling
              if (/^\d+\.\s/.test(paragraph.trim())) {
                const match = paragraph.match(/^(\d+\.\s)(.*)/)
                if (match) {
                  const [, numberPart, contentPart] = match
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      <span className="text-pink-400 font-semibold">{numberPart}</span>
                      <span 
                        dangerouslySetInnerHTML={{
                          __html: contentPart.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                        }}
                      />
                    </p>
                  )
                }
              }
              
              // Handle H3 headings
              if (paragraph.startsWith('### ')) {
                const headerText = paragraph.replace('### ', '')
                
                // Check if this H3 starts with a number (like "1. " or "1) ")
                const numberedMatch = headerText.match(/^(\d+[.)]\s)(.*)/)
                if (numberedMatch) {
                  const [, numberPart, contentPart] = numberedMatch
                  return (
                    <h3 key={index} className="font-orbitron text-xl font-bold mb-3 mt-6">
                      <span className="text-pink-400">{numberPart}</span>
                      <span className="text-gray-300">{contentPart}</span>
                    </h3>
                  )
                }
                
                // Check if this is a Further Reading subsection (Research & Documentation, etc.)
                const furtherReadingSections = ['Research & Documentation', 'Industry Coverage & Analysis', 'Platform Documentation']
                if (furtherReadingSections.includes(headerText)) {
                  return (
                    <h3 key={index} className="font-orbitron text-xl font-bold text-cyan-400 mb-3 mt-6">
                      {headerText}
                    </h3>
                  )
                }
                
                // Regular H3 header (cyan color)
                return (
                  <h3 key={index} className="font-orbitron text-xl font-bold text-cyan-400 mb-3 mt-6">
                    {headerText}
                  </h3>
                )
              }
              
              // Handle multi-line bullet sections (like Further Reading)
              if (paragraph.includes('\n- [') || (paragraph.includes('- [') && paragraph.includes('\n'))) {
                const lines = paragraph.split('\n')
                const bulletItems = lines.filter(line => line.trim().startsWith('- '))
                
                if (bulletItems.length > 0) {
                  return (
                    <ul key={index} className="list-none space-y-3 mb-6">
                      {bulletItems.map((item, itemIndex) => {
                        const cleanItem = item.replace('- ', '')
                        
                        // Handle markdown links [text](url)
                        if (cleanItem.includes('[') && cleanItem.includes('](')) {
                          const linkProcessed = cleanItem.replace(
                            /\[([^\]]+)\]\(([^)]+)\)/g, 
                            '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-white transition-colors underline">$1</a>'
                          )
                          
                          return (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-pink-400 mr-3 mt-1">•</span>
                              <span 
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{
                                  __html: linkProcessed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                                }}
                              />
                            </li>
                          )
                        }
                        
                        // Handle regular bullet items
                        return (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-pink-400 mr-3 mt-1">•</span>
                            <span 
                              className="text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                              }}
                            />
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
              }
              
              // Handle bullet lists with links (single line)
              if (paragraph.includes('- [') || paragraph.includes('- **') || paragraph.includes('- ✅')) {
                const listItems = paragraph.split('\n').filter(line => line.trim().startsWith('- '))
                return (
                  <ul key={index} className="list-none space-y-3 mb-6">
                    {listItems.map((item, itemIndex) => {
                      const cleanItem = item.replace('- ', '')
                      
                      // Handle markdown links [text](url)
                      if (cleanItem.includes('[') && cleanItem.includes('](')) {
                        const linkProcessed = cleanItem.replace(
                          /\[([^\]]+)\]\(([^)]+)\)/g, 
                          '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-white transition-colors underline">$1</a>'
                        )
                        
                        return (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-pink-400 mr-3 mt-1">•</span>
                            <span 
                              className="text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: linkProcessed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                              }}
                            />
                          </li>
                        )
                      }
                      
                      // Handle regular bullet items
                      return (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-pink-400 mr-3 mt-1">•</span>
                          <span 
                            className="text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html: cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                            }}
                          />
                        </li>
                      )
                    })}
                  </ul>
                )
              }
              
              // Handle HTML sections (like Further Reading)
              if (paragraph.includes('<section') && paragraph.includes('</section>')) {
                return (
                  <div 
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                    }}
                  />
                )
              }
              
              // Handle simple markdown links (not in bullet lists)
              if (paragraph.includes('[') && paragraph.includes('](') && !paragraph.includes('- [')) {
                const linkProcessed = paragraph.replace(
                  /\[([^\]]+)\]\(([^)]+)\)/g, 
                  '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-white hover:text-cyan-400 transition-colors underline block mb-2">$1</a>'
                )
                
                return (
                  <div 
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: linkProcessed
                    }}
                  />
                )
              }
              
              // Handle horizontal rules
              if (paragraph.trim() === '---') {
                return <hr key={index} className="border-gray-700 my-8" />
              }
              
              // Handle regular paragraphs
              if (paragraph.trim() && !paragraph.startsWith('#')) {
                return (
                  <p 
                    key={index} 
                    className="text-gray-300 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-pink-400 font-semibold">$1</strong>')
                    }}
                  />
                )
              }
              
              return null
            })}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="font-orbitron text-2xl font-bold text-white mb-8">More Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog" className="group">
              <article className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full font-medium">
                  Leadership
                </span>
                <h4 className="font-orbitron text-lg font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  Leadership Lessons from Special Operations
                </h4>
                <p className="text-gray-400 text-sm">
                  Applying military decision-making frameworks to high-stakes business environments.
                </p>
              </article>
            </Link>
            
            <Link to="/blog" className="group">
              <article className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                  AI Strategy
                </span>
                <h4 className="font-orbitron text-lg font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  AI and the Art of Strategic Storytelling
                </h4>
                <p className="text-gray-400 text-sm">
                  How artificial intelligence is transforming the way brands connect with their audiences.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost

