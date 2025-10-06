import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import usePageMetadata from '../hooks/usePageMetadata'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const pageUrl = `https://www.gerardo-mena.com/blog/${slug}`

  usePageMetadata(
    post
      ? {
          title: `${post.title} | Gerardo Mena Blog`,
          description: post.excerpt,
          image: post.heroImage,
          url: pageUrl,
          type: 'article',
          publishedTime: post.publishedTime,
          modifiedTime: post.updatedTime || post.publishedTime
        }
      : null
  )

  useEffect(() => {
    setLoading(true)
    setPost(null)

    const removeStructuredData = () => {
      const existing = document.getElementById('structured-data-article')
      if (existing) {
        existing.remove()
      }
    }

    removeStructuredData()

    let postData = null

    if (slug === 'what-a-week') {
      postData = {
        title: 'What a Week!',
        author: 'Gerardo Mena',
        date: 'August 25, 2025',
        publishedTime: '2025-08-25T00:00:00.000Z',
        updatedTime: '2025-08-25T00:00:00.000Z',
        excerpt:
          'We rushed a documentary onto a Vegas jumbotron, then briefed the Harding Project on AI—exhausting, humbling, and worth it.',
        heroImage: '/blog-photo.png',
        tags: ['Updates', 'Documentary', 'AI', 'Conference'],
        readTime: '3 min read',
        content: `Wow. What a productive week!

We kicked things off with our first commissioned documentary style piece for a nonprofit that needed it—fast—for a horse show in Las Vegas. It was headed to the jumbotron, which meant every pixel had to be perfect. We tightened the cut and survived brutal high end render times.

Then it rolled. All those tiny choices we sweated at 2 a.m. showed up big and clean. We're proud of what the team pulled off in such a short window.

## The Harding Project: Speed, Truth, and AI

Then we followed that up with a presentation on AI imagery and video for the Harding Project conference—tied to the U.S. Army's branch journals. We walked through the top trends in AI and how to put them to work for graphic design and video editing: ideation to mood boards, concept frames to quick cuts, and the latest in trends and legal happenings. Not everyone agreed on everything, which was the point, and what made the conference so beautiful. The discussions and breakouts were sharp—smart questions, real concerns, and a lot of useful pushback. Iron sharpening iron.

I left grateful to be a part of all of it.

## Onwards

Exhausting? Yes. Worth it? Absolutely. On to the next project. Our queue is already full again.`
      }
    } else if (slug === 'the-future-of-generative-engine-optimization') {
      postData = {
        title: 'The Future of Generative Engine Optimization',
        author: 'Gerardo Mena',
        date: 'August 16, 2025',
        publishedTime: '2025-08-16T00:00:00.000Z',
        updatedTime: '2025-08-16T00:00:00.000Z',
        excerpt:
          "The digital marketing landscape is in the midst of a seismic shift. Traditional SEO is making way for Generative Engine Optimization (GEO). As AI becomes integrated into search, understanding GEO is no longer futuristic—it's an immediate necessity.",
        heroImage: '/blog-1.webp',
        tags: ['AI', 'SEO', 'GEO', 'Search', 'Strategy'],
        readTime: '8 min read',
        content: `# The Future of Search: A Deep Dive into Generative Engine Optimization (GEO)

The digital marketing landscape is in the midst of a seismic shift. Traditional search engine optimization (SEO), long the cornerstone of online visibility, is making way for a new paradigm: Generative Engine Optimization (GEO). As artificial intelligence (AI) and large language models (LLMs) become increasingly integrated into our online experiences, understanding and implementing GEO is no longer a futuristic concept—it's an immediate necessity for any brand that wants to remain relevant.

## What is Generative Engine Optimization (GEO)?

Generative Engine Optimization is the practice of optimizing content to be found, understood, and featured by AI-powered search engines and generative models like Google's AI Overviews (formerly Search Generative Experience), Perplexity, and ChatGPT. Unlike traditional SEO, which focuses on ranking a webpage in a list of blue links, GEO aims to have your content directly integrated and cited within the AI-generated responses that users are increasingly turning to for answers.

## The Shift from Search to Synthesis

The core of this evolution lies in the changing nature of information retrieval. Users are moving away from sifting through multiple links to find answers. Instead, they are posing complex questions and expecting direct, synthesized responses. This fundamental change in user behavior is what makes GEO so critical. Gartner predicts that traditional search engine volume will drop by 25% by 2026, a clear indicator of this ongoing transformation.

## Key Differences: SEO vs. GEO

| Feature | Traditional SEO | Generative Engine Optimization (GEO) |
|---------|----------------|--------------------------------------|
| **Objective** | Rank higher in search engine results pages (SERPs) | Be featured and cited in AI-generated responses |
| **Content Display** | Presents a list of links for users to click | Provides a synthesized, conversational, and direct answer |
| **User Interaction** | Requires users to navigate to different websites | Delivers immediate insights and answers within the search interface |
| **Optimization Focus** | Keywords, backlinks, and technical SEO | Context, authority, conversational tone, and structured data |
| **Performance Metrics** | Website traffic, click-through rates, and conversions | Frequency of AI citations, brand mentions, and user engagement |

## How to Optimize for Generative Engines: A Practical Guide

Adapting your content strategy for GEO requires a multi-faceted approach. Here are actionable steps to get started:

### 1. Embrace E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)

**Show, Don't Just Tell:** Google's emphasis on E-E-A-T is even more critical in the age of AI. Create content that demonstrates real-world experience. Include case studies, original research, and expert quotes.

**Authoritative Backlinks:** High-quality backlinks from reputable sources remain a powerful signal of authority.

**Build Trust:** Be transparent about your sources and provide clear author bios with credentials.

### 2. Focus on User Intent and Conversational Language

**Answer Questions Directly:** Structure your content to provide clear, concise answers to common user questions. Use headings that are phrased as questions.

**Long-Tail Keywords:** Optimize for longer, more conversational keywords that mirror how people ask questions in natural language.

**Natural Language:** Write in a clear, conversational tone that is easy for both users and AI to understand.

### 3. Structure Your Content for AI

**Use Structured Data (Schema Markup):** Implementing schema markup helps search engines understand the context of your content, making it easier to be featured in AI-generated responses.

**Clear Hierarchy:** Use descriptive headings (H1, H2, H3), bullet points, and numbered lists to break down complex information into digestible chunks.

**FAQs:** Include frequently asked questions sections to directly address specific user queries.

### 4. Leverage Multimedia

**Go Beyond Text:** Generative engines are increasingly multimodal, incorporating images, videos, and infographics into their responses.

**Optimize Visuals:** Ensure your images and videos are high-quality and have descriptive alt text and captions.

### 5. Technical SEO is Still Crucial

**Site Speed and Mobile-Friendliness:** A fast, mobile-friendly website is essential for a good user experience and is a key ranking factor.

**Crawlability:** Ensure that AI crawlers can access and index your content. Check your robots.txt file and meta tags.

## The Future of GEO: What to Expect

The world of GEO is constantly evolving, but several key trends are emerging:

**Hyper-Personalization:** AI will deliver increasingly personalized responses based on a user's individual needs and past behavior.

**Voice Search Dominance:** As voice-activated devices become more prevalent, optimizing for conversational, voice-based queries will be paramount.

**AI-Driven Analytics:** New tools will emerge to track brand mentions and citations within AI-generated responses, providing a new set of metrics to measure success.

## Conclusion: The Time to Act is Now

Generative Engine Optimization is not a far-off concept; it's the present and future of search. By embracing the principles of GEO, you can ensure that your brand not only survives but thrives in this new AI-driven landscape. The businesses that adapt first and focus on providing high-quality, authoritative, and well-structured content will be the ones that win the race to "be the answer."

## Sources and Further Reading

- [The Beginner's Guide to Generative Engine Optimization (GEO) - AIOSEO](https://aioseo.com/generative-engine-optimization-geo/)
- [Generative Engine Optimization: What It Is & How to Prepare | HubSpot](https://blog.hubspot.com/marketing/generative-engine-optimization)
- [Generative Engine Optimization (GEO): The Future of Search? | WordStream](https://www.wordstream.com/blog/generative-engine-optimization)
- [What Is Generative Engine Optimization (GEO)? | Search Engine Land](https://searchengineland.com/what-is-generative-engine-optimization-geo-444418)
- [Generative Engine Optimization: How to Optimize for AI Overviews | Semrush](https://www.semrush.com/blog/generative-engine-optimization/)`
      }
    }

    if (postData) {
      setPost(postData)
      setLoading(false)

      const baseUrl = 'https://www.gerardo-mena.com'
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: postData.title,
        description: postData.excerpt,
        image: `${baseUrl}${postData.heroImage}`,
        author: {
          '@type': 'Person',
          name: postData.author,
          url: `${baseUrl}/about`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Gerardo Mena',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/GM-Logo.png`
          }
        },
        datePublished: postData.publishedTime,
        dateModified: postData.updatedTime || postData.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog/${slug}`
        },
        keywords: postData.tags.join(', '),
        articleSection: 'AI Strategy',
        wordCount: postData.content.split(' ').length
      }

      const structuredDataScript = document.createElement('script')
      structuredDataScript.type = 'application/ld+json'
      structuredDataScript.id = 'structured-data-article'
      structuredDataScript.textContent = JSON.stringify(structuredData)
      document.head.appendChild(structuredDataScript)
    } else {
      setLoading(false)
    }

    return removeStructuredData
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
                      <span className="font-semibold">{numberPart}</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: contentPart.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
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
                      <span className="font-semibold">{numberPart}</span>
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
                              <span className="mr-3 mt-1 font-semibold text-gray-200">•</span>
                              <span
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{
                                  __html: linkProcessed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                                }}
                              />
                            </li>
                          )
                        }

                        // Handle regular bullet items
                        return (
                          <li key={itemIndex} className="flex items-start">
                            <span className="mr-3 mt-1 font-semibold text-gray-200">•</span>
                            <span
                              className="text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
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
                            <span className="mr-3 mt-1 font-semibold text-gray-200">•</span>
                            <span
                              className="text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: linkProcessed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                              }}
                            />
                          </li>
                        )
                      }
                      
                      // Handle regular bullet items
                      return (
                        <li key={itemIndex} className="flex items-start">
                          <span className="mr-3 mt-1 font-semibold text-gray-200">•</span>
                          <span
                            className="text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html: cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
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
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                    }}
                  />
                )
              }
              
              return null
            })}
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-16">
          <h3 className="font-orbitron text-2xl font-bold text-white mb-8">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/portfolio" className="group" target="_blank">
              <article className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                  Portfolio
                </span>
                <h4 className="font-orbitron text-lg font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  View My Work
                </h4>
                <p className="text-gray-400 text-sm">
                  Explore my portfolio showcasing AI strategy, graphic design, and documentary work with proven results.
                </p>
              </article>
            </Link>
            
            <Link to="/contact" className="group" target="_blank">
              <article className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                  Contact
                </span>
                <h4 className="font-orbitron text-lg font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  Let's Work Together
                </h4>
                <p className="text-gray-400 text-sm">
                  Ready to bring your ideas to life? Get in touch to discuss your next project or collaboration.
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

