"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BsFillMoonStarsFill, BsMedium } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Hero = ({ darkmode, setDarkmode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeElement, setActiveElement] = useState(null)
  const [typedText, setTypedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "Tech Enthusiast"]

  // Typing animation effect
  useEffect(() => {
    let timeout
    const currentText = roles[currentRole]

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentRole])

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: <AiFillGithub className="text-2xl" />,
      url: "https://github.com/fooldevoloper",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/balkrishna-pokharel-600a4814a/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Medium",
      icon: <BsMedium className="text-2xl" />,
      url: "https://medium.com/@sushil.pokharel.7528",
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <section className="min-h-screen relative z-10">
        {/* Navigation */}
        <nav className="py-6 md:py-10 mb-6 md:mb-12 flex justify-between items-center container max-w-screen-xl mx-auto px-4">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 dark:from-white dark:to-teal-400 bg-clip-text text-transparent">
              Balkrishna Pokharel
            </h1>
          </div>

          <ul
            className={`flex items-center gap-2 md:gap-4 transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <li>
              <button
                className="p-2 md:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-xl md:text-2xl text-teal-600 dark:text-teal-400"
                onClick={() => setDarkmode(!darkmode)}
                onMouseEnter={() => setActiveElement("darkmode")}
                onMouseLeave={() => setActiveElement(null)}
              >
                <BsFillMoonStarsFill />
              </button>
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                href="#"
                onMouseEnter={() => setActiveElement("resume")}
                onMouseLeave={() => setActiveElement(null)}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Hero Content */}
            <div
              className={`text-center p-4 md:p-10 transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              {/* Greeting */}
              <div className="mb-4 md:mb-8">
                <p className="text-xl md:text-2xl py-2 text-teal-600 dark:text-teal-400 font-medium">Hello, I am</p>

                {/* Name with Gradient - FIXED RESPONSIVE SIZING */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 md:py-4 font-bold bg-gradient-to-r from-gray-900 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Balkrishna Pokharel
                </h2>

                {/* Animated Role */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl md:text-3xl py-2 text-teal-500 dark:text-teal-400 font-semibold min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                    {typedText}
                    <span className="animate-pulse ml-1">|</span>
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto mb-8 md:mb-12">
                <p className="text-base md:text-lg py-2 md:py-3 leading-7 md:leading-8 text-gray-700 dark:text-gray-300">
                  I have experience in designing and building web applications and deploying them with modern
                  technologies and best practices.
                </p>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-2xl md:text-3xl mb-2">🚀</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Fast Development</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Quick turnaround times</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-2xl md:text-3xl mb-2">💡</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Innovation</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Creative solutions</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-2xl md:text-3xl mb-2">🎯</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Results</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Quality focused</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 transform delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 md:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-2xl md:text-3xl text-gray-600 dark:text-gray-400 ${social.color} group relative`}
                    onMouseEnter={() => setActiveElement(social.name)}
                    onMouseLeave={() => setActiveElement(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {social.icon}
                    {activeElement === social.name && (
                      <div className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded-lg text-xs whitespace-nowrap">
                        {social.name}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div
              className={`transition-all duration-1000 transform delay-1000 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="relative group">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-teal-500 to-blue-600 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Profile Container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-t from-teal-500 via-teal-400 to-transparent overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  {/* Image */}
                  <Image
                    src="/bakrishna_pokharel_profile.jpeg"
                    alt="Balkrishna Pokharel"
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-teal-400 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full opacity-70"></div>
                <div className="absolute top-1/4 -left-8 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full opacity-70"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`mt-10 md:mt-16 transition-all duration-1000 transform delay-1200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105">
                  Get In Touch
                </button>
                <button className="bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 border-2 border-teal-500 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-teal-500 hover:text-white hover:scale-105">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Hero
