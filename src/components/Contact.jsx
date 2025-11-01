import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-black relative scan-line">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            &gt; Get In <span className="gradient-text hacker-glow">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-green-500/70 max-w-2xl mx-auto font-mono">
            $ Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400 font-mono hacker-glow">&gt; Let's Connect</h3>
              <p className="text-green-500/70 mb-8 leading-relaxed font-mono text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of
                your visions. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 terminal-border bg-black/50 p-4 hover:bg-green-900/10 transition-all">
                <div className="bg-green-600/30 text-green-400 p-3 border border-green-500/50">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-1 font-mono">Location</h4>
                  <p className="text-green-500/70 font-mono text-sm">&gt; Your City, Country</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 terminal-border bg-black/50 p-4 hover:bg-green-900/10 transition-all">
                <div className="bg-cyan-600/30 text-cyan-400 p-3 border border-cyan-500/50">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1 font-mono">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-green-400 hover:text-green-300 font-mono text-sm transition-colors">
                    &gt; your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 terminal-border bg-black/50 p-4 hover:bg-green-900/10 transition-all">
                <div className="bg-pink-600/30 text-pink-400 p-3 border border-pink-500/50">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-pink-400 mb-1 font-mono">Phone</h4>
                  <p className="text-green-500/70 font-mono text-sm">&gt; +1 (234) 567-8900</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-green-400 mb-4 font-mono">&gt; Follow Me</h4>
              <div className="flex space-x-4">
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
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-border bg-black/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-green-400 font-medium mb-2 font-mono">
                  &gt; Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-green-400 font-mono focus:ring-2 focus:ring-green-500 focus:border-green-400 outline-none transition placeholder-green-500/50"
                  placeholder="$ Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-green-400 font-medium mb-2 font-mono">
                  &gt; Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-green-400 font-mono focus:ring-2 focus:ring-green-500 focus:border-green-400 outline-none transition placeholder-green-500/50"
                  placeholder="$ your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-green-400 font-medium mb-2 font-mono">
                  &gt; Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-green-400 font-mono focus:ring-2 focus:ring-green-500 focus:border-green-400 outline-none transition placeholder-green-500/50"
                  placeholder="$ What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-green-400 font-medium mb-2 font-mono">
                  &gt; Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-green-400 font-mono focus:ring-2 focus:ring-green-500 focus:border-green-400 outline-none transition resize-none placeholder-green-500/50"
                  placeholder="$ Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-900/30 text-green-400 px-8 py-4 font-mono font-semibold border border-green-500/50 hover:border-green-400 hover:bg-green-900/50 transition-all transform hover:scale-105 animate-pulse-glow"
              >
                &gt; Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
