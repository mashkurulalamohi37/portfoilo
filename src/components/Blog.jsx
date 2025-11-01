import { FaCalendar, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Flutter: A Complete Guide for Beginners',
      excerpt: 'Learn the fundamentals of Flutter development, from setting up your environment to building your first app. Perfect for developers new to mobile development.',
      date: 'December 15, 2023',
      category: 'Tutorial',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    },
    {
      id: 2,
      title: 'State Management in Flutter: Provider vs Bloc vs Riverpod',
      excerpt: 'A comprehensive comparison of popular state management solutions in Flutter. Understand when to use each approach and best practices.',
      date: 'December 10, 2023',
      category: 'Technical',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    },
    {
      id: 3,
      title: 'My Journey to Becoming a Flutter Developer',
      excerpt: 'A personal story about my transition into mobile development, challenges faced, and lessons learned along the way.',
      date: 'December 5, 2023',
      category: 'Story',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    },
    {
      id: 4,
      title: 'Building Beautiful UIs with Flutter: Design Tips and Tricks',
      excerpt: 'Discover how to create stunning user interfaces in Flutter using custom widgets, animations, and design principles.',
      date: 'November 28, 2023',
      category: 'Design',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    },
  ]

  return (
    <section id="blog" className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 font-mono tracking-tight">
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto mt-4"></div>
          <p className="text-emerald-400/60 max-w-2xl mx-auto font-light text-sm mt-6 tracking-wide">
            Thoughts, tutorials, and stories from my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="terminal-border bg-[#0f0f0f]/60 overflow-hidden hover:bg-[#0f0f0f]/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0f0f0f]/90 text-emerald-400/80 px-2.5 py-1 font-light text-xs border border-emerald-500/30">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-emerald-400/50 mb-3 font-light">
                  <FaCalendar className="mr-2" size={12} />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-light mb-3 text-emerald-400/90 font-mono group-hover:text-emerald-400 transition-colors tracking-wide">
                  {post.title}
                </h3>
                
                <p className="text-emerald-400/60 mb-4 leading-relaxed font-light text-sm">{post.excerpt}</p>
                
                <button className="flex items-center space-x-2 text-emerald-400/70 hover:text-emerald-400 group-hover:translate-x-1 transition-all font-light text-xs">
                  <span>Read More</span>
                  <FaArrowRight size={10} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0f0f0f]/60 text-emerald-400/90 px-6 py-3 font-mono text-sm font-light tracking-wide border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
