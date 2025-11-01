import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-black relative scan-line">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            &gt; About <span className="gradient-text hacker-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="terminal-border bg-black/50 p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-400 font-mono hacker-glow">$ My Story</h3>
            <div className="space-y-4 font-mono text-green-500/80 text-sm leading-relaxed">
              <p>
                &gt; Welcome to my portfolio! I'm a passionate Flutter developer with a love for creating
                beautiful and functional mobile applications.
              </p>
              <p>
                &gt; My journey in tech started with curiosity and has evolved into a full-fledged career 
                dedicated to crafting exceptional user experiences.
              </p>
              <p>
                &gt; When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge at tech conferences.
              </p>
              <p>
                &gt; My goal is to build applications that not only solve real problems but also bring joy
                to users.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="terminal-border bg-green-900/10 p-6 hover:bg-green-900/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/30 text-green-400 p-3 border border-green-500/50">
                  <FaGraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 text-green-400 font-mono">Education</h4>
                  <p className="text-green-500/70 font-mono text-sm">
                    &gt; Bachelor's in Computer Science<br />
                    <span className="text-green-600/60">Your University, 2020-2024</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-cyan-900/10 p-6 hover:bg-cyan-900/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600/30 text-cyan-400 p-3 border border-cyan-500/50">
                  <FaCode size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 text-cyan-400 font-mono">What I Do</h4>
                  <p className="text-cyan-500/70 font-mono text-sm">
                    &gt; Developing cross-platform mobile applications using Flutter,
                    creating seamless user experiences across iOS and Android.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-pink-900/10 p-6 hover:bg-pink-900/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600/30 text-pink-400 p-3 border border-pink-500/50">
                  <FaHeart size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 text-pink-400 font-mono">Interests</h4>
                  <p className="text-pink-500/70 font-mono text-sm">
                    &gt; Mobile Development • UI/UX Design • Open Source • Tech Blogging • 
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

