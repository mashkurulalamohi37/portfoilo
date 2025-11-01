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
    <section id="experience" className="section-padding bg-black relative scan-line">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            &gt; Experience & <span className="gradient-text hacker-glow">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-green-500/70 max-w-2xl mx-auto font-mono">
            $ My professional journey, presentations, and notable achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-cyan-400 to-pink-400 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-black border-2 border-green-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                    <div className={`text-2xl ${
                      exp.type === 'work' ? 'text-green-400' :
                      exp.type === 'presentation' ? 'text-cyan-400' :
                      'text-pink-400'
                    }`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 md:ml-8 flex-1 terminal-border bg-black/50 p-6 hover:bg-green-900/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-green-400 font-mono hacker-glow">{exp.title}</h3>
                      <span className="text-sm text-green-500/70 mt-1 md:mt-0 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-cyan-400 font-medium mb-3 font-mono">&gt; {exp.company}</p>
                    <p className="text-green-500/70 mb-4 leading-relaxed font-mono text-sm">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start font-mono text-sm">
                          <span className="text-green-400 mr-2">$</span>
                          <span className="text-green-500/70">{achievement}</span>
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
