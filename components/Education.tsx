"use client"

import { useState, useEffect } from "react"

interface EducationItem {
  id: number
  year: string
  title: string
  institution: string
  university?: string
  duration: string
  location: string
  type: string
  description: string
}

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const educationData: EducationItem[] = [
    {
      id: 1,
      year: "2022",
      title: "Full Stack MERN Application Development",
      institution: "Deer-Walk Training Center",
      duration: "4 months",
      location: "Kathmandu, Nepal",
      type: "Professional Course",
      description: "Comprehensive training in MongoDB, Express.js, React, and Node.js development.",
    },
    {
      id: 2,
      year: "2019 – 2023",
      title: "Bachelor's Degree in Computer Science & IT",
      institution: "Patan Multiple Campus",
      university: "Tribhuwan University",
      duration: "4 years",
      location: "Patan, Nepal",
      type: "Bachelor's Degree",
      description: "Comprehensive study of computer science fundamentals, programming, and information technology.",
    },
    {
      id: 3,
      year: "2016 – 2018",
      title: "Higher Secondary Education (+2 Science)",
      institution: "Liverpool International College",
      duration: "2 years",
      location: "Kathmandu, Nepal",
      type: "Higher Secondary",
      description: "Science stream focusing on Physics, Chemistry, Mathematics, and Computer Science.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-index")
            if (indexAttr !== null) {
              const index = Number.parseInt(indexAttr, 10)
              if (!isNaN(index)) {
                setVisibleItems((prev) => new Set([...Array.from(prev), index]))
              }
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll<HTMLElement>("[data-index]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-teal-600 dark:from-white dark:via-gray-300 dark:to-teal-400 bg-clip-text text-transparent">
              Education
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and computer science
            </p>
          </div>

          {/* Education Grid */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                data-index={index}
                className={`group transition-all duration-700 transform ${
                  visibleItems.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-600 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-full border border-teal-200 dark:border-teal-700">
                            {edu.type}
                          </span>
                          <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm">{edu.year}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                          {edu.title}
                        </h3>
                      </div>
                    </div>

                    {/* Institution Info */}
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{edu.university}</p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                    {/* Footer Info */}
                    <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-teal-300"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-teal-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education