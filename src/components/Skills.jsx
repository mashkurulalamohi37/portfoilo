import { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({})
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      category: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Flutter', level: 90, icon: '🎯' },
        { name: 'Dart', level: 88, icon: '💎' },
        { name: 'iOS Development', level: 75, icon: '🍎' },
        { name: 'Android Development', level: 80, icon: '🤖' },
      ],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'JavaScript', level: 88, icon: '🟨' },
        { name: 'TypeScript', level: 82, icon: '🔷' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'REST APIs', level: 88, icon: '🔌' },
        { name: 'GraphQL', level: 75, icon: '📊' },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'CI/CD', level: 80, icon: '🔄' },
        { name: 'Figma', level: 85, icon: '✏️' },
        { name: 'VS Code', level: 95, icon: '💻' },
      ],
    },
  ]

  useEffect(() => {
    let hasAnimated = false
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true
            // Animate skills when section is visible
            skillCategories.forEach((category, catIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setVisibleSkills((prev) => ({
                    ...prev,
                    [`${catIndex}-${skillIndex}`]: true,
                  }))
                }, (catIndex * 100) + (skillIndex * 50))
              })
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getSkillColor = (level) => {
    if (level >= 85) return 'from-emerald-500 to-cyan-400'
    if (level >= 75) return 'from-cyan-400 to-blue-400'
    return 'from-blue-400 to-purple-400'
  }

  const getSkillGlow = (level) => {
    if (level >= 85) return 'shadow-[0_0_15px_rgba(16,185,129,0.4)]'
    if (level >= 75) return 'shadow-[0_0_12px_rgba(6,182,212,0.3)]'
    return 'shadow-[0_0_10px_rgba(59,130,246,0.3)]'
  }

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-[#0a0a0a] relative">
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
              className="terminal-border bg-[#0f0f0f]/60 p-8 hover:bg-[#0f0f0f]/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-light text-emerald-400/90 font-mono tracking-wide">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, index) => {
                  const skillKey = `${categoryIndex}-${index}`
                  const isVisible = visibleSkills[skillKey]
                  
                  return (
                    <div 
                      key={index}
                      className="group/skill hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl opacity-70 group-hover/skill:opacity-100 transition-opacity">
                            {skill.icon}
                          </span>
                          <span className="text-emerald-400/90 font-light text-sm tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400/50 font-light text-xs">
                            {isVisible ? skill.level : 0}%
                          </span>
                          {skill.level >= 85 && (
                            <span className="text-sm text-emerald-400/60">⭐</span>
                          )}
                        </div>
                      </div>
                      <div className="relative w-full bg-[#050505] h-2 overflow-hidden border border-emerald-500/10 rounded-full">
                        <div
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out rounded-full ${getSkillGlow(skill.level)}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (index * 50)}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          {isVisible && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 terminal-border bg-[#0f0f0f]/60 p-6 text-center">
          <p className="text-emerald-400/70 font-light text-sm">
            Continuously learning and expanding my skill set to stay at the forefront of technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills

