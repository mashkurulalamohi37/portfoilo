import { FaBriefcase, FaChalkboardTeacher, FaAward } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Flutter Developer Intern',
      company: 'Tech Company Inc.',
      period: 'Summer 2023',
      description: 'Developed and maintained mobile applications using Flutter. Collaborated with cross-functional teams to deliver high-quality features and improve app performance.',
      achievements: [
        'Reduced app load time by 40% through optimization',
        'Implemented new payment integration feature',
        'Participated in code reviews and agile ceremonies',
      ],
    },
    {
      type: 'presentation',
      icon: <FaChalkboardTeacher />,
      title: 'Conference Speaker',
      company: 'FlutterCon 2023',
      period: 'October 2023',
      description: 'Presented on "Building Scalable Flutter Apps: Best Practices and Architecture Patterns" to an audience of 500+ developers.',
      achievements: [
        'Received positive feedback from attendees',
        'Topic featured in conference highlights',
        'Networked with industry professionals',
      ],
    },
    {
      type: 'achievement',
      icon: <FaAward />,
      title: 'Hackathon Winner',
      company: 'Tech Innovation Hackathon',
      period: 'March 2023',
      description: 'Led a team of 4 developers to win first place with an innovative health tracking app built in 48 hours.',
      achievements: [
        'First place out of 50+ teams',
        'Best UI/UX design award',
        'Implemented ML-powered health insights',
      ],
    },
    {
      type: 'work',
      icon: <FaBriefcase />,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2022 - Present',
      description: 'Work with clients to build custom mobile applications. Focus on creating user-friendly interfaces and robust backend integrations.',
      achievements: [
        'Delivered 10+ successful projects',
        '100% client satisfaction rate',
        'Expertise in multiple industries',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 font-mono tracking-tight">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-4"></div>
          <p className="text-emerald-400/60 max-w-2xl mx-auto font-light text-sm mt-6 tracking-wide">
            My professional journey, presentations, and notable achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-cyan-500/30 to-pink-500/30 hidden md:block"></div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#0f0f0f] border border-emerald-500/20 flex items-center justify-center">
                    <div className={`text-lg ${
                      exp.type === 'work' ? 'text-emerald-400/80' :
                      exp.type === 'presentation' ? 'text-cyan-400/80' :
                      'text-pink-400/80'
                    }`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 md:ml-8 flex-1 terminal-border bg-[#0f0f0f]/60 p-6 hover:bg-[#0f0f0f]/80 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-light text-emerald-400/90 font-mono tracking-wide">{exp.title}</h3>
                      <span className="text-xs text-emerald-400/50 mt-1 md:mt-0 font-light">{exp.period}</span>
                    </div>
                    <p className="text-cyan-400/80 font-light mb-3 text-sm">{exp.company}</p>
                    <p className="text-emerald-400/60 mb-4 leading-relaxed font-light text-sm">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-sm font-light">
                          <span className="text-emerald-400/50 mr-2">•</span>
                          <span className="text-emerald-400/60">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
