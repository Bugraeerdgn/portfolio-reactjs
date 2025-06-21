import React, { useState, useEffect } from 'react';
import '../App.css'; // Stiller için

function Projects({ fetchUrl, title = "Project" }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (fetchUrl) {
          const response = await fetch(fetchUrl);
          if (!response.ok) throw new Error('Veri alınamadı');
          const data = await response.json();
          setProjects(data);
        } else {
          setProjects([
            { id: 1, name: "İlk Projem", description: "Basit bir React uygulaması" },
            { id: 2, name: "Todo App", description: "Yapılacaklar listesi uygulaması" }
          ]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [fetchUrl]); 

  if (loading) return <div className="loading-spinner">Yükleniyor...</div>;
  if (error) return <div className="error-message">Hata: {error}</div>;

  return (
    <section id="projects" className="projects-section">
      <h2>{title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <h3>{project.name}</h3>
              {project.technologies && (
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Projeyi Görüntüle
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;