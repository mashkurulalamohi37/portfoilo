import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-black pt-16 relative scan-line">
      <div className="container-custom text-center relative z-10">
        <div className="animate-float mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-green-400/50 shadow-[0_0_30px_rgba(0,255,0,0.5)] animate-pulse-glow">
            <img 
              src="/assets/profile.jpg" 
              alt="Ohi" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="font-mono mb-4">
          <p className="text-green-400/70 text-sm md:text-lg mb-2">&gt; Initializing system...</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 hacker-glow">
            <span className="gradient-text">$ whoami</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 hacker-glow">
            <span className="text-green-400">Ohi</span>
          </h1>
          <p className="text-green-400/50 text-xs md:text-sm">[root@portfolio ~]#</p>
        </div>
        
        <div className="terminal-border bg-black/50 p-4 md:p-6 mb-8 max-w-3xl mx-auto">
          <p className="text-green-400 text-lg md:text-2xl font-mono mb-2">
            &gt; Flutter Developer & Tech Enthusiast
          </p>
          <p className="text-green-500/70 text-sm md:text-base font-mono leading-relaxed">
            $ Building beautiful, performant mobile applications and exploring the latest in technology.
            <br />
            $ Passionate about creating user-centric solutions that make a difference.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center hover:bg-green-900 hover:text-green-300 transition-all border border-green-500/30 hover:border-green-400 animate-pulse-glow"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center hover:bg-green-900 hover:text-green-300 transition-all border border-green-500/30 hover:border-green-400 animate-pulse-glow"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center hover:bg-green-900 hover:text-green-300 transition-all border border-green-500/30 hover:border-green-400 animate-pulse-glow"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-12 h-12 rounded-full bg-green-900/50 text-green-400 flex items-center justify-center hover:bg-green-900 hover:text-green-300 transition-all border border-green-500/30 hover:border-green-400 animate-pulse-glow"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center space-x-2 bg-green-900/30 text-green-400 px-8 py-4 font-mono font-semibold border border-green-500/50 hover:border-green-400 hover:bg-green-900/50 transition-all transform hover:scale-105 animate-pulse-glow"
        >
          <span>&gt; View My Work</span>
          <FaArrowDown />
        </button>
      </div>
    </section>
  )
}

export default Home

