import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-green-500/30 py-12">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-mono text-green-400 hacker-glow">&gt; Let's Build Something Amazing Together</h3>
          <p className="text-green-500/70 mb-6 max-w-2xl mx-auto font-mono text-sm">
            I'm always excited to work on new projects and collaborate with creative minds.
            Don't hesitate to reach out if you have an idea you'd like to discuss.
          </p>
          <div className="flex justify-center space-x-6 mb-8 font-mono">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500/70 hover:text-green-400 transition-colors"
            >
              &gt; GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500/70 hover:text-green-400 transition-colors"
            >
              &gt; LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500/70 hover:text-green-400 transition-colors"
            >
              &gt; Twitter
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-green-500/70 hover:text-green-400 transition-colors"
            >
              &gt; Email
            </a>
          </div>
          <div className="border-t border-green-500/30 pt-8">
            <p className="text-green-500/70 flex items-center justify-center font-mono text-sm">
              Made with <FaHeart className="mx-2 text-red-500 animate-pulse" /> by Ohi © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
