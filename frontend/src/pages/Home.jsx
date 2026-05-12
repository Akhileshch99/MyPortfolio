import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white hover-lift">
              AK
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Akhilesh Chaudhary
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              B.Tech computer science student passionate about developing innovative, high-quality software solutions with a strong focus on problem-solving. Skilled in applying engineering principles and modern technologies to create impactful applications, with a drive to continuously learn and contribute to meaningful projects.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/projects" className="btn-primary">View My Work</a>
              <a href="/contact" className="btn-secondary">Get in Touch</a>
              <a href="https://linkedin.com/in/akhilesh-chaudhary-243257297" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '8.4/10', label: 'CGPA', icon: '🎓' },
              { value: '2+', label: 'Projects', icon: '💼' },
              { value: '2', label: 'Internships', icon: '🏢' },
              { value: '6+', label: 'Skills', icon: '⚡' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-secondary bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 hover-lift hover-glow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <h2 className="section-title animate-fade-in-up">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Programming Languages', skills: ['Java', 'Python'], icon: '💻' },
              { category: 'Frontend', skills: ['React', 'HTML/CSS','JavaScript','Tailwind CSS'], icon: '🎨' },
              { category: 'Backend', skills: ['Node.js', 'Express','Spring Boot'], icon: '⚙️' },
              { category: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'], icon: '🗄️' },
              { category: 'AI/ML', skills: ['Machine Learning', 'Data Science'], icon: '🤖' },
              { category: 'Tools', skills: ['Git', 'Docker', 'VS Code','GitHub'], icon: '🛠️' }
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-secondary p-8 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 hover-lift hover-glow animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-accent">{skillGroup.category}</h3>
                <ul className="text-gray-300 space-y-2">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects and collaborate with like-minded individuals.
            Whether it's AI/ML solutions or full-stack web development, let's create something impactful.
          </p>
          <a href="/contact" className="btn-primary inline-block">Start a Conversation</a>
        </div>
      </section>
    </div>
  );
}
