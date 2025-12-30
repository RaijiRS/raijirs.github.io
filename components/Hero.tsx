'use client'

import { ChevronDown } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Who is
              <span className="text-primary-600 block">Raiji Sacaza?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Software Developer building full-stack systems with Java, JavaScript, Python, and cloud infrastructure
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors animate-bounce"
            >
              <span className="text-sm mb-2">Learn More</span>
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

