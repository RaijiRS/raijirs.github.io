'use client'
import TechMarquee from './TechMarquee'


interface AboutProps {
  setActiveSection: (section: string) => void
}


export default function About({ setActiveSection }: AboutProps) {
  return (
    <section
      id="about"
      className="py-5 bg-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <TechMarquee/>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        

        <div className="grid md:grid-cols-2 gap-12 items-center"><div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
            <iframe src="\resume\RRSResume.pdf" width="100%" height="600px">
               
            </iframe>

            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
            I build fast, reliable web applications that solve real
            business problems. My work spans the full stack, from clean,
            scalable backend APIs to intuitive, responsive front-end interfaces built
            with modern frameworks like React.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Clients work with me to bring ideas to life, creating software
            that’s practical, scalable, and built to last. I focus on clear
            communication, understanding goals, and turning requirements into
            working systems whether it’s a custom web app, API integration, or
            improving an existing platform. I approach every project as a partnership,
            making sure the solution works for everyone while continuing to grow and refine
            my craft.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Web Developer
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Backend & Frontend Development
              </span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Performance Optimization
              </span>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

