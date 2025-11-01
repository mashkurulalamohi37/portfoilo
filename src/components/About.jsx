import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 font-mono tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="terminal-border bg-[#0f0f0f]/60 p-8">
            <h3 className="text-xl font-light mb-6 text-emerald-400/90 font-mono tracking-wide">My Story</h3>
            <div className="space-y-4 text-emerald-400/70 text-sm leading-relaxed font-light">
              <p>
                Welcome to my portfolio! I'm a passionate Flutter developer with a love for creating
                beautiful and functional mobile applications.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a full-fledged career 
                dedicated to crafting exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge at tech conferences.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="terminal-border bg-[#0f0f0f]/60 p-5 hover:bg-[#0f0f0f]/80 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/10 text-emerald-400/80 p-3 border border-emerald-500/20">
                  <FaGraduationCap size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-light mb-2 text-emerald-400/90 font-mono">Education</h4>
                  <p className="text-emerald-400/60 text-sm font-light">
                    Bachelor's in Computer Science<br />
                    <span className="text-emerald-400/40">Your University, 2020-2024</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-[#0f0f0f]/60 p-5 hover:bg-[#0f0f0f]/80 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/10 text-cyan-400/80 p-3 border border-cyan-500/20">
                  <FaCode size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-light mb-2 text-cyan-400/90 font-mono">What I Do</h4>
                  <p className="text-cyan-400/60 text-sm font-light">
                    Developing cross-platform mobile applications using Flutter,
                    creating seamless user experiences across iOS and Android.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-[#0f0f0f]/60 p-5 hover:bg-[#0f0f0f]/80 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-500/10 text-pink-400/80 p-3 border border-pink-500/20">
                  <FaHeart size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-light mb-2 text-pink-400/90 font-mono">Interests</h4>
                  <p className="text-pink-400/60 text-sm font-light">
                    Mobile Development • UI/UX Design • Open Source • Tech Blogging • 
                    Conference Speaking • Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

