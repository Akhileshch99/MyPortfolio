import React from 'react';

export default function About() {
  return (
    <div className="bg-primary py-20">
      <div className="container-custom">
        <h1 className="section-title">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/profile.png" 
              alt="Akhilesh Chaudhary" 
              className="w-64 h-64 rounded-lg mx-auto mb-6 object-cover shadow-lg border-2 border-accent hover:border-blue-400 transition"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Passionate Computer Science Student</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a dedicated B.Tech Computer Science student with a strong passion for Artificial Intelligence,
              Machine Learning, and full-stack web development. My journey in technology has equipped me with
              both theoretical knowledge and practical skills to tackle real-world challenges.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My goal is to
              leverage my skills to create innovative solutions that make a positive impact on society.
            </p>
            <div className="flex gap-4">
              <a href="/projects" className="btn-primary">View My Work</a>
              <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="bg-secondary p-8 rounded-lg border border-gray-700 hover:border-accent transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold">B.Tech in Computer Science</h4>
                <p className="text-accent text-lg">Galgotias University</p>
              </div>
              <div className="text-right">
                <div className="text-accent font-semibold">CGPA: 8.4/10</div>
                <div className="text-gray-400">2023 - 2027</div>
              </div>
            </div>
            <p className="text-gray-300">
              Currently pursuing my Bachelor's degree with a focus on core computer science concepts,
              data structures, algorithms, and emerging technologies like AI/ML and cloud computing.
            </p>
          </div>
        </section>

        {/* Internships Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Internship Experience</h3>
          <div className="space-y-6">
            {[
              {
                title: 'Infosys Springboard Internship',
                company: 'Infosys',
                period: '2025-2026',
                description: 'Gained hands-on experience in software development methodologies, agile practices, and enterprise-level project management. Worked on real-world projects and learned industry best practices.',
                skills: ['Agile', 'Project Management', 'Software Development']
              },
              {
                title: 'Java Full Stack Development Internship',
                company: 'EduSkills',
                period: '2024-2025',
                description: 'Comprehensive training in Java full-stack development including Spring Boot, React, and database management. Built end-to-end applications and learned modern development practices.',
                skills: ['Java', 'Spring Boot', 'React', 'Full-Stack Development']
              }
            ].map((internship, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">{internship.title}</h4>
                  <span className="text-accent text-sm">{internship.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{internship.company}</p>
                <p className="text-gray-300 mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates & Achievements */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Certificates & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Java Full Stack Development Certification',
                issuer: 'EduSkills',
                date: '2024',
                description: 'Comprehensive certification covering Java, Spring Boot, React, and modern web development practices.'
              },
              {
                title: 'Data Structure and Algoirithms using Java ',
                issuer: 'Infosys Springboard',
                date: '2025',
                description: 'Professional certification validating data structure and algorithm skills.'
              },
              {
                title: 'Design Thinking - A Primer ',
                issuer: 'NPTEL ONLINE CERTIFICATION ',
                date: '2024',
                description: 'Introduction to design thinking principles and methodologies.'
              }
            ].map((cert, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{cert.title}</h4>
                  <span className="text-accent text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills */}
        <section>
          <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: 'Java', level: 'Advanced', icon: '☕' },
              { skill: 'Python', level: 'Intermediate', icon: '🐍' },
              { skill: 'React', level: 'Advanced', icon: '⚛️' },
              { skill: 'Node.js', level: 'Intermediate', icon: '🟢' },
              { skill: 'MongoDB', level: 'Intermediate', icon: '🍃' },
              { skill: 'MySQL', level: 'Advanced', icon: '🗄️' },
              { skill: 'AI/ML', level: 'Learning', icon: '🤖' },
              { skill: 'Git', level: 'Intermediate', icon: '📚' }
            ].map((skill, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg border border-gray-700 text-center hover:border-accent transition">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-bold mb-1">{skill.skill}</h4>
                <span className={`text-sm px-2 py-1 rounded ${
                  skill.level === 'Advanced' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                  skill.level === 'Intermediate' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                  'bg-blue-500 bg-opacity-20 text-blue-400'
                }`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
