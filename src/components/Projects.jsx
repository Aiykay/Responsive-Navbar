const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart and payment integration",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "Productivity tool for teams to track and manage projects",
      tags: ["HTML", "CSS", "Javascript"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with location-based forecasts",
      tags: ["React", "API", "CSS"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;