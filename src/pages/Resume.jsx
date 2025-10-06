import usePageMetadata from '../hooks/usePageMetadata'

function Resume() {
  usePageMetadata({
    title: 'Resume | Gerardo Mena – Web Developer & AI Strategist',
    description:
      'Download the comprehensive resume for Gerardo Mena, highlighting 10+ years in web development, Section 508 leadership, AI content creation, and digital strategy.',
    image: '/social-media.png',
    url: 'https://www.gerardo-mena.com/resume'
  })

  return (
    <section className="py-20 px-8 pt-32">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-3xl md:text-5xl font-black mb-8">
            <span className="text-gradient-gerardo">MY</span> <span className="text-gradient-mena">RESUME</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Web Developer and Social-Media Strategist with 10+ years of digital experience and 3+ years leading Section 508 accessibility efforts. 
            Combines clean, standards-based code with audience-centric storytelling to deliver compliant, high-impact web and social experiences.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Kansas City, MO 64152</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>Gerardomena82@live.com</span>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "HTML5, CSS3",
              "Responsive/mobile-first design", 
              "Section 508 & WCAG 2.1 AA compliance",
              "PDF/UA remediation",
              "Hootsuite & Sprinklr social-media management",
              "SEO / GEO / LLMSO keyword research & analytics",
              "Adobe Creative Cloud (Photoshop, Premier Pro, InDesign)",
              "AI-generated audio/video integration",
              "Agile project leadership & cross-functional training"
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-8">Professional Experience</h2>
          
          <div className="space-y-10">
            {/* Army University Press */}
            <div className="border-l-2 border-cyan-500/30 pl-6">
              <h3 className="font-orbitron text-xl font-bold text-white">Web Developer / Social Media Coordinator / AI Specialist</h3>
              <p className="text-cyan-400 font-semibold text-lg">Army University Press, Fort Leavenworth, KS</p>
              <p className="text-gray-400 mb-4">January 2022 – Present</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Content:</strong> Developed and maintained over 1,000 web pages for high-profile military publications — to include creating digital assets such as automated audio narration and AI-generated feature graphics and videos—to elevate user engagement and accessibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Digital Archive Leadership:</strong> Core team member that built the initial website for Line of Departure. The team built a comprehensive, 508-compliant digital archive consolidating all U.S. Army branch journals into a single, audio-narrated repository.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Social Media Strategy:</strong> Spearheaded the implementation of Hootsuite and Sprinklr, which doubled audience engagement and fortified the organization's digital strategy across Army University.</span>
                </li>
              </ul>
            </div>

            {/* NCO Journal */}
            <div className="border-l-2 border-cyan-500/30 pl-6">
              <h3 className="font-orbitron text-xl font-bold text-white">Senior Editor / Graphic Designer / Web Development</h3>
              <p className="text-cyan-400 font-semibold text-lg">The NCO Journal (Army University Press), Fort Leavenworth, KS</p>
              <p className="text-gray-400 mb-4">September 2018 – January 2022</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Editorial Excellence:</strong> Directed graphic design, editorial efforts, and web development for The NCO Journal, editing over 200 articles while managing a team of junior editors to ensure high-quality, engaging content.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Milestone Projects:</strong> Was a core team member for the creation of the 30-Year Anniversary Edition, incorporating innovative multimedia elements that reinforced the publication's legacy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Digital Outreach:</strong> Played a key role in creating The NCO Journal Podcast, using digital media to extend content reach and engage diverse audiences on military topics.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-4">AI Content Creation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Automated audio narration, AI-generated graphics, AI generated video and ads, and intelligent content optimization.</p>
            </div>
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-4">Digital Marketing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Social media strategy, campaign development, audience analytics, and content distribution.</p>
            </div>
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-4">Web Development & Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed">HTML/CSS, Adobe Creative Suite, and 508 accessibility compliance.</p>
            </div>
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-4">Content Management</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Editorial oversight, copyediting, content formatting, and podcast production.</p>
            </div>
          </div>
        </div>

        {/* Professional Achievements & Awards */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Professional Achievements & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Featured Speaker",
                description: "Featured presenter at The Headstrong Project's national fundraising events alongside notable figures such as Jake Gyllenhaal and Adam Driver."
              },
              {
                title: "Engaging Educator", 
                description: "Delivered workshops and speaking engagements at prestigious institutions, including the U.S. Coast Guard Academy, University of Missouri, and NPR."
              },
              {
                title: "Leadership Recognition",
                description: "Awarded the University of Missouri's \"2011 Chancellor's Award for Excellence in Leadership.\""
              },
              {
                title: "Published Works",
                description: "Authored poetry and essays featured in The New York Times, Poets & Writers Magazine, and other renowned publications."
              },
              {
                title: "Community Impact",
                description: "Honored as the Kansas City Royals' \"Walk Off Hero\" for exceptional military and post-military contributions."
              },
              {
                title: "Youth Mentorship",
                description: "Created, coached, and led a youth wrestling team to 3 Missouri Youth State Championship team titles in 2021, 2023, and 2024."
              }
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500/30 pl-6">
              <h3 className="font-orbitron text-xl font-bold text-white">Master of Fine Arts (M.F.A.) in Creative Writing</h3>
              <p className="text-cyan-400 font-semibold">Goddard College</p>
              <p className="text-gray-400">January 2015</p>
            </div>
            <div className="border-l-2 border-cyan-500/30 pl-6">
              <h3 className="font-orbitron text-xl font-bold text-white">Bachelor of Science in Education: Language Arts (9-12)</h3>
              <p className="text-cyan-400 font-semibold">University of Missouri-Columbia</p>
              <p className="text-gray-400">May 2012</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <a 
            href="/contact" 
            target="_blank"
            className="btn-primary-glow bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-block"
          >
            Contact for more info!
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume

