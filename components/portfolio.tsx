"use client"

import { useState } from "react"

const Portfolio = () => {
  const [activeHover, setActiveHover] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Family Tree",
      description: "A project to visualize and manage family relationships.",
      longDescription:
        "An interactive family tree application built with modern web technologies, featuring dynamic relationship mapping and intuitive navigation.",
      url: "https://family-tree-eight.vercel.app/",
      category: "Web Application",
      tech: ["React", "JavaScript", "CSS", "Vercel"],
      status: "Live",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 2,
      title: "Meet Applications",
      description: "A platform for scheduling and managing meetings efficiently.",
      longDescription:
        "A comprehensive meeting management system with real-time scheduling, participant management, and seamless integration capabilities.",
      url: "https://meet.balkrishnapokharel.com.np/",
      category: "SaaS Platform",
      tech: ["React", "Node.js", "Database", "API"],
      status: "Live",
      color: "from-blue-400 to-indigo-600",
    },
    {
      id: 3,
      title: "LLM Chatbot",
      description: "An AI-powered chatbot leveraging large language models.",
      longDescription:
        "Cutting-edge conversational AI chatbot built with advanced language models, featuring context-aware responses and natural language processing.",
      url: "https://ai-chatbot-frontend-olive.vercel.app/",
      category: "AI/ML",
      tech: ["AI/ML", "Python", "React", "OpenAI"],
      status: "Live",
      color: "from-purple-400 to-pink-600",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with secure payments.",
      longDescription:
        "Feature-rich e-commerce solution with product management, secure checkout, and customer account features.",
      url: "#",
      category: "Web Application",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      status: "In Progress",
      color: "from-orange-400 to-red-600",
    },
    {
      id: 5,
      title: "Task Management",
      description: "Streamlined project and task management application.",
      longDescription:
        "Intuitive task management tool with drag-and-drop interfaces, team collaboration features, and progress tracking.",
      url: "#",
      category: "Productivity",
      tech: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      status: "Live",
      color: "from-teal-400 to-cyan-600",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting with interactive maps.",
      longDescription:
        "Comprehensive weather application with location-based forecasts, historical data analysis, and severe weather alerts.",
      url: "#",
      category: "Utility",
      tech: ["React", "Weather API", "Chart.js", "Mapbox"],
      status: "Live",
      color: "from-yellow-400 to-amber-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <section className="py-12 md:py-16 relative">
        {/* Simplified Background - Single Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 dark:bg-teal-800 rounded-full opacity-10 blur-3xl"></div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          {/* Simplified Header */}
          <div className="text-center mb-10">
            <h1 className="font-bold text-gray-900 dark:text-white text-3xl md:text-4xl mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-teal-600 dark:from-white dark:via-gray-300 dark:to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="h-0.5 w-16 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Showcasing my creative work and technical projects
            </p>
          </div>

          {/* Filter Categories - Optional */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button className="px-4 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-400 dark:hover:border-teal-400 transition-colors">
              All
            </button>
            <button className="px-4 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-400 dark:hover:border-teal-400 transition-colors">
              Web Apps
            </button>
            <button className="px-4 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-400 dark:hover:border-teal-400 transition-colors">
              AI/ML
            </button>
            <button className="px-4 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-400 dark:hover:border-teal-400 transition-colors">
              Utilities
            </button>
          </div>

          {/* Projects Grid - Smaller Cards, Better Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="h-full"
                onMouseEnter={() => setActiveHover(project.id as any)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <div
                  className={`h-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-lg ${
                    activeHover === project.id ? "border-teal-300 dark:border-teal-500" : ""
                  }`}
                >
                  {/* Thin Gradient Header */}
                  <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

                  {/* Card Content - More Compact */}
                  <div className="p-5">
                    {/* Category & Status - Smaller */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-1 ${
                            project.status === "Live" ? "bg-green-500" : "bg-amber-500"
                          }`}
                        ></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{project.status}</span>
                      </div>
                    </div>

                    {/* Project Title - Smaller */}
                    <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                      {project.title}
                    </h2>

                    {/* Description - Concise */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                    {/* Tech Stack - Smaller Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Link - Simpler */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Footer */}
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              View All Projects
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
