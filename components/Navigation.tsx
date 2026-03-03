'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail} from 'lucide-react'



interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-4 flex-shrink-0">
  <button
    onClick={() => scrollToSection('home')}
    className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
  >
    Raiji Sacaza
  </button>

  {/* Social Icons */}
  <div className="flex items-center gap-3">
    <a
      href="https://github.com/RaijiRS"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-black transition"
      aria-label="GitHub"
    >
      <Github size={18} />
    </a>

    <a
      href="https://linkedin.com/in/raijisacaza"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition"
      aria-label="LinkedIn"
    >
      <Linkedin size={18} />
    </a>
    <a
  href="mailto:raiji87@gmail.com"
  className="text-gray-600 hover:text-red-600 transition"
  aria-label="Mail"
  onClick={(e) => {
    e.preventDefault()
    window.location.href =
      'mailto:raiji87@gmail.com'
    setTimeout(() => {
      window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=raiji87@gmail.com',
        '_blank'
      )
    }, 300)
  }}
>
  <Mail size={22} />
</a>

  </div>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  activeSection === item.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

