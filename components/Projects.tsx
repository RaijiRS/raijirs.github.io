'use client'

import { ExternalLink, Github } from 'lucide-react'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

const projects = [
  {
    id: 1,
    title: 'Eagle-Eye Navigation',
    description: 'Full-stack mobile app enabling real-time campus navigation using Vue, Firebase, and Node.js/Express. Built using Scrum with backend ownership.',
    tech: ['Node.js', 'Firebase', 'Vue','Mobile'],
    image: '🦅',
    url: 'https://github.com/CSCI-400/eagle_eye_api/blob/main/README.md'
  },
  {
    id: 2,
    title: 'Spades Web Game',
    description: 'A fully interactive Spades card game built in React with AI opponents, drag-and-drop card play, and full game logic (bidding, tricks, scoring, and team play).',
    tech: ['React', 'JavaScript', 'tailwindcss'],
    image: '♠️',
    url: 'https://github.com/RaijiRS/Spades'
  },
  {
    id: 3,
    title: 'Clover AI',
    description: 'Clover is a lightweight AI chatbot assistant powered by FastAPI, React, and ChromaDB. It supports file upload, webpage ingestion, contextual chat with memory, and live knowledge injection.',
    tech: ['React', 'ChromaDB', 'Python', 'FastAPI'],
    image: '🍀',
    url: 'https://github.com/RaijiRS/Clover/blob/main/README.md'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and transaction history.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: '💳',
    url: 'example.com'
  },
]



export default function Projects({ setActiveSection }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-8xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                    <Github size={18} />
                    <span>View Project</span>
                  </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

