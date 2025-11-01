import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const profileRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const x = ((e.clientX - centerX) / rect.width) * 20 // Max 20px movement
        const y = ((e.clientY - centerY) / rect.height) * 20
        
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-[#0a0a0a] pt-16 relative scan-line">
      <div className="container-custom text-center relative z-10">
        <div className="animate-float mb-12 relative">
          <div 
            ref={profileRef}
            className="w-36 h-36 mx-auto rounded-full overflow-hidden ring-2 ring-emerald-500/30 cursor-pointer transition-all duration-300 ease-out relative z-10"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(${mousePosition.y * 0.15}deg) rotateY(${mousePosition.x * 0.15}deg)`,
              boxShadow: `0 ${10 + mousePosition.y * 0.5}px ${30 + Math.abs(mousePosition.x)}px rgba(16,185,129,${0.3 + Math.abs(mousePosition.x) * 0.01})`,
            }}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <img 
              src="/assets/profile.jpg" 
              alt="Ohi" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.002})`,
              }}
            />
            {/* Animated glow effect */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, rgba(16,185,129,0.3), transparent 70%)`,
                opacity: Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 2 ? 0.6 : 0,
              }}
            />
          </div>
        </div>
        
        <div className="font-mono mb-8 space-y-3">
          <p className="text-emerald-400/60 text-xs md:text-sm tracking-wider mb-4">Initializing system...</p>
          <h1 className="text-5xl md:text-7xl font-light mb-3 tracking-tight">
            <span className="gradient-text">Ohi</span>
          </h1>
          <p className="text-emerald-400/80 text-lg md:text-xl font-light tracking-wide mb-6">
            Flutter Developer & Tech Enthusiast
          </p>
        </div>
        
        <div className="terminal-border bg-[#0f0f0f]/80 p-6 md:p-8 mb-10 max-w-2xl mx-auto">
          <p className="text-emerald-400/90 text-base md:text-lg font-mono leading-relaxed tracking-wide">
            Building beautiful, performant mobile applications and exploring the latest in technology.
            <br className="hidden md:block" />
            <span className="hidden md:inline"> </span>
            Passionate about creating user-centric solutions that make a difference.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-11 h-11 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center space-x-3 bg-[#0f0f0f]/60 text-emerald-400/90 px-6 py-3 font-mono text-sm font-light tracking-wide border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span>View My Work</span>
          <FaArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}

export default Home

