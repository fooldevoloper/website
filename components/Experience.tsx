"use client"

import { useState } from "react"

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null)

  const experiences = [
    {
      id: 1,
      company: "Virtuosway",
      location: "Kathmandu, Nepal",
      position: "Associate Software Engineer",
      year: "Feb 2024 - Present",
      status: "current",
      description: "Developing scalable web applications and contributing to innovative software solutions.",
      skills: ["Node.js", "Mongodb", "Firebase", "Elastic Search"],
      duration: "1 yrs + 5 mos",
    },
    {
      id: 2,
      company: "LanceMe Up",
      location: "Lalitpur, Nepal",
      position: "Backend Engineer",
      year: "Nov 2022 - Dec 2023",
      status: "past",
      description: "Built robust backend systems and API integrations for freelancing platform.",
      skills: ["Nestjs", "SocketIO", "PostgreSQL", "Docker"],
      duration: "1 years + 2 months",
    },
    {
      id: 3,
      company: "IES-Consult",
      location: "Kathmandu, Nepal",
      position: "Software Consultant",
      year: "Feb 2022 - September 2022",
      status: "past",
      description: "Provided technical consultation and developed custom software solutions.",
      skills: ["NextJS", "Tailwind CSS", "Figma"],
      duration: "8 months",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Simple Header */}
          <div className="mb-12">
            <h1 className="font-bold text-3xl md:text-4xl mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-teal-600 dark:from-white dark:via-gray-300 dark:to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <div className="w-16 h-0.5 bg-teal-500 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              A comprehensive overview of my professional journey and technical expertise
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveCard(exp.id as any)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-md transition-all duration-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-2 h-2 rounded-full ${exp.status === "current" ? "bg-green-500" : "bg-gray-400"
                            }`}
                        ></div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {exp.status === "current" ? "Current" : "Previous"}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded">
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Position & Location */}
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{exp.position}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-teal-400 rounded-full mr-2"></span>
                      {exp.location}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{exp.year}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 text-teal-700 dark:text-teal-300 rounded border border-teal-200 dark:border-teal-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div
                    className={`mt-4 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transition-all duration-200 ${activeCard === exp.id ? "opacity-100" : "opacity-0"
                      }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Experience Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-1">
                  {["React", "Next JS",].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 text-teal-700 dark:text-teal-300 rounded border border-teal-200 dark:border-teal-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-1">
                  {["Node.js", "Firebase", "Elastic Search"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 text-teal-700 dark:text-teal-300 rounded border border-teal-200 dark:border-teal-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Database</h4>
                <div className="flex flex-wrap gap-1">
                  {["MongoDB", "PostgreSQL", "Firestore", "Redis"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 text-teal-700 dark:text-teal-300 rounded border border-teal-200 dark:border-teal-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
