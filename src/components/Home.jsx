import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container-custom text-center">
        <div className="animate-float mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            OH
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Ohi</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-600 mb-6">
          Flutter Developer & Tech Enthusiast
        </p>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
          Building beautiful, performant mobile applications and exploring the latest in technology.
          Passionate about creating user-centric solutions that make a difference.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
        >
          <span>View My Work</span>
          <FaArrowDown />
        </button>
      </div>
    </section>
  )
}

export default Home

