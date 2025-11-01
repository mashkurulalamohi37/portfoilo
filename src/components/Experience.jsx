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
    <section id="experience" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey, presentations, and notable achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <div className={`text-2xl ${
                      exp.type === 'work' ? 'text-blue-600' :
                      exp.type === 'presentation' ? 'text-purple-600' :
                      'text-pink-600'
                    }`}>
                      {exp.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 md:ml-8 flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
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

