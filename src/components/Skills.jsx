const Skills = () => {
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 88 },
        { name: 'iOS Development', level: 75 },
        { name: 'Android Development', level: 80 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-black relative scan-line">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            &gt; My <span className="gradient-text hacker-glow">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-green-500/70 max-w-2xl mx-auto font-mono">
            $ Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="terminal-border bg-black/50 p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-green-400 font-mono hacker-glow">&gt; {category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2 font-mono">
                      <span className="text-green-400 font-medium">{skill.name}</span>
                      <span className="text-green-500/70 text-sm">[{skill.level}%]</span>
                    </div>
                    <div className="w-full bg-green-900/20 h-3 overflow-hidden border border-green-500/20">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-cyan-400 transition-all duration-1000 shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

