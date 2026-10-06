import React, { useState, useEffect } from 'react';
import { projectAPI } from '../api/axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  // Static projects data for demonstration
  const staticProjects = [
    {
      _id: '1',
      title: 'CareConnect',
      description: 'A comprehensive healthcare platform connecting patients with healthcare providers through an intuitive MERN stack application.',
      longDescription: 'CareConnect is a full-stack healthcare management system built with the MERN stack (MongoDB, Express.js, React, Node.js). It features patient appointment booking, medical records management, telemedicine integration, and real-time notifications. The platform includes role-based access for patients, doctors, and administrators.',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
      github: 'https://github.com/Akhileshch99/CareConnect',
      liveUrl: '',
      featured: true,
      order: 1,
      createdAt: '2026-01-15T00:00:00.000Z'
    },
    {
      _id: '2',
      title: 'Global IP Intelligence Platform',
      description: 'Enterprise-grade IP intelligence platform built with Spring Boot and Java, providing comprehensive IP geolocation and threat analysis.',
      longDescription: 'A robust IP intelligence platform developed using Spring Boot and Java. The system aggregates data from multiple sources to provide real-time IP geolocation, threat intelligence, and network analytics. Features include RESTful APIs, database optimization, and scalable microservices architecture.',
      image: '',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Microservices', 'Docker'],
      github: 'https://github.com/Akhileshch99/Global-IP-Intelligence-Platform',
      liveUrl: '',
      featured: true,
      order: 2,
      createdAt: '2025-03-20T00:00:00.000Z'
    },
    {
      _id: '3',
      title: 'IPL-Top-Performance-Analysis',
      description: 'IPL Top Performance Analysis is a data analytics project aimed at identifying and visualizing the top-performing players and teams in the Indian Premier League (IPL).',
      longDescription: 'By analyzing historical data from past IPL seasons, this project uncovers insights into batting and bowling performances, team trends, and match-winning factors using Python-based data visualization tools.',
      image: '',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'Plotly', 'VS Code'],
      github: 'https://github.com/Akhileshch99/IPL-Top-Performance-Analysis',
      liveUrl: '',
      featured: true,
      order: 3,
      createdAt: '2024-02-10T00:00:00.000Z'
    }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Try to fetch from API first, fallback to static data
      const response = await projectAPI.getAll().catch(() => ({ data: { data: staticProjects } }));
      setProjects(response.data.data);
      setError(null);
    } catch (err) {
      // Use static data as fallback
      setProjects(staticProjects);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-2xl text-gray-300">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <p className="text-2xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-primary py-20 min-h-[80vh]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">My Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my technical skills through real-world applications and innovative solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: 'all', label: 'All Projects', count: projects.length },
              { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
              { key: 'react', label: 'React', count: projects.filter(p => p.technologies.includes('React')).length },
              { key: 'java', label: 'Java', count: projects.filter(p => p.technologies.includes('Java')).length },
              { key: 'python', label: 'Python', count: projects.filter(p => p.technologies.includes('Python')).length }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === key
                    ? 'bg-accent text-white'
                    : 'bg-secondary text-gray-300 hover:bg-accent hover:text-white'
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">No projects found for this filter.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="bg-secondary rounded-lg overflow-hidden border border-gray-700 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-48 bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl text-white opacity-50">
                      {project.title.includes('Care') ? '🏥' :
                       project.title.includes('IP') ? '🌐' :
                       project.title.includes('AI') ? '🤖' : '💻'}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {project.technologies.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-gray-400 text-sm">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm flex-1 text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm flex-1 text-center"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Stats */}
        <div className="mt-16 bg-secondary rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Project Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">{projects.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400">Featured Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-400">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-400">Live Deployments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
