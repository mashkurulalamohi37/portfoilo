import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-emerald-500/10 py-12">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-xl font-light mb-4 font-mono text-emerald-400/90 tracking-wide">Let's Build Something Amazing Together</h3>
          <p className="text-emerald-400/60 mb-6 max-w-2xl mx-auto font-light text-sm">
            I'm always excited to work on new projects and collaborate with creative minds.
            Don't hesitate to reach out if you have an idea you'd like to discuss.
          </p>
          <div className="flex justify-center space-x-6 mb-8 font-light text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/60 hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/60 hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/60 hover:text-emerald-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-emerald-400/60 hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
          </div>
          <div className="border-t border-emerald-500/10 pt-8">
            <p className="text-emerald-400/50 flex items-center justify-center font-light text-xs">
              Made with <FaHeart className="mx-2 text-pink-400/60" /> by Ohi © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
