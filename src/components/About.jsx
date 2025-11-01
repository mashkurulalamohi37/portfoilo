import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to my portfolio! I'm a passionate Flutter developer with a love for creating
              beautiful and functional mobile applications. My journey in tech started with curiosity
              and has evolved into a full-fledged career dedicated to crafting exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge at tech conferences. I believe in the power of continuous
              learning and the impact that well-designed software can have on people's lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My goal is to build applications that not only solve real problems but also bring joy
              to users. I'm always excited to take on new challenges and collaborate with amazing teams
              to create something meaningful.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-gray-600">
                    Bachelor's in Computer Science<br />
                    <span className="text-sm text-gray-500">Your University, 2020-2024</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <FaCode size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">What I Do</h4>
                  <p className="text-gray-600">
                    I specialize in developing cross-platform mobile applications using Flutter,
                    creating seamless user experiences across iOS and Android platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white p-3 rounded-lg">
                  <FaHeart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Interests</h4>
                  <p className="text-gray-600">
                    Mobile Development • UI/UX Design • Open Source • Tech Blogging • 
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

