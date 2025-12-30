'use client'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5+
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Front-Ends</h3>
                  <p className="text-gray-600">Responsive UIs that enage users</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  100+
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Robust Backends</h3>
                  <p className="text-gray-600">Scalable APIs and efficient server logic </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  50+
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Agile Collaboration</h3>
                  <p className="text-gray-600">Delivering results fast in SCRUM teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

