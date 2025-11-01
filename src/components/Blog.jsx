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
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and stories from my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendar className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-2 transition-transform">
                  <span>Read More</span>
                  <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog

