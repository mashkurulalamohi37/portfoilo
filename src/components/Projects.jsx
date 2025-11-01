import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce application with payment integration, product catalog, and user authentication.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tech: ['Flutter', 'Firebase', 'Stripe API', 'Provider'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Real-time analytics dashboard for social media metrics with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tech: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts, detailed analytics, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
      tech: ['Flutter', 'OpenWeather API', 'Bloc Pattern', 'SQLite'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and project tracking.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      tech: ['Flutter', 'WebSocket', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      tech: ['Flutter', 'Health API', 'Cloud Functions', 'Firestore'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Language Learning Platform',
      description: 'Interactive language learning app with gamification, speech recognition, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      tech: ['Flutter', 'TensorFlow Lite', 'Firebase', 'Speech Recognition'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-black relative scan-line">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            &gt; My <span className="gradient-text hacker-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-green-500/70 max-w-2xl mx-auto font-mono">
            $ A collection of projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="terminal-border bg-black/50 overflow-hidden hover:bg-green-900/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-400 font-mono hacker-glow">{project.title}</h3>
                <p className="text-green-500/70 mb-4 text-sm leading-relaxed font-mono">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-mono border border-green-500/30"
                    >
                      &gt; {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 font-mono text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaGithub />
                    <span>&gt; Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>&gt; Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

