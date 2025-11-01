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
    <section id="contact" className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 font-mono tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-4"></div>
          <p className="text-emerald-400/60 max-w-2xl mx-auto font-light text-sm mt-6 tracking-wide">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light mb-6 text-emerald-400/90 font-mono tracking-wide">Let's Connect</h3>
              <p className="text-emerald-400/60 mb-8 leading-relaxed font-light text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of
                your visions. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 terminal-border bg-[#0f0f0f]/60 p-4 hover:bg-[#0f0f0f]/80 transition-all duration-300">
                <div className="bg-emerald-500/10 text-emerald-400/80 p-2.5 border border-emerald-500/20">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="font-light text-emerald-400/90 mb-1 text-sm">Location</h4>
                  <p className="text-emerald-400/60 font-light text-sm">Rangpur,Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 terminal-border bg-[#0f0f0f]/60 p-4 hover:bg-[#0f0f0f]/80 transition-all duration-300">
                <div className="bg-cyan-500/10 text-cyan-400/80 p-2.5 border border-cyan-500/20">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="font-light text-cyan-400/90 mb-1 text-sm">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-emerald-400/70 hover:text-emerald-400 font-light text-sm transition-colors">
                    mashkurulalam7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 terminal-border bg-[#0f0f0f]/60 p-4 hover:bg-[#0f0f0f]/80 transition-all duration-300">
                <div className="bg-pink-500/10 text-pink-400/80 p-2.5 border border-pink-500/20">
                  <FaPhone size={18} />
                </div>
                <div>
                  <h4 className="font-light text-pink-400/90 mb-1 text-sm">Phone</h4>
                  <p className="text-emerald-400/60 font-light text-sm">+8801609024005</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-light text-emerald-400/90 mb-4 text-sm">Follow Me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/mashkurulalamohi37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all border border-emerald-500/20 hover:border-emerald-500/40"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="linkedin.com/in/mashkurul-alam-ohi-b978371a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all border border-emerald-500/20 hover:border-emerald-500/40"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0f0f0f]/60 text-emerald-400/80 flex items-center justify-center hover:bg-emerald-500/10 hover:text-emerald-400 transition-all border border-emerald-500/20 hover:border-emerald-500/40"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-border bg-[#0f0f0f]/60 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-emerald-400/90 font-light mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#050505] border border-emerald-500/20 text-emerald-400/90 font-light text-sm focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/40 outline-none transition placeholder-emerald-400/30"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-emerald-400/90 font-light mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#050505] border border-emerald-500/20 text-emerald-400/90 font-light text-sm focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/40 outline-none transition placeholder-emerald-400/30"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-emerald-400/90 font-light mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#050505] border border-emerald-500/20 text-emerald-400/90 font-light text-sm focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/40 outline-none transition placeholder-emerald-400/30"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-emerald-400/90 font-light mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#050505] border border-emerald-500/20 text-emerald-400/90 font-light text-sm focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/40 outline-none transition resize-none placeholder-emerald-400/30"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f0f0f]/60 text-emerald-400/90 px-6 py-3 font-light text-sm tracking-wide border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
