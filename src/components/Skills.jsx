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
    <section id="skills" className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 font-mono tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-4"></div>
          <p className="text-emerald-400/60 max-w-2xl mx-auto font-light text-sm mt-6 tracking-wide">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="terminal-border bg-[#0f0f0f]/60 p-8"
            >
              <h3 className="text-xl font-light mb-6 text-emerald-400/90 font-mono tracking-wide">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2.5 font-light text-sm">
                      <span className="text-emerald-400/90">{skill.name}</span>
                      <span className="text-emerald-400/50">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#050505] h-1.5 overflow-hidden border border-emerald-500/10">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500/80 to-cyan-400/80 transition-all duration-1000"
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

