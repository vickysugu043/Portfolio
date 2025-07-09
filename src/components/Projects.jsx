import React from 'react';
import '../styles/animations.css';

const Projects = () => {
  const projects = [
    {
      title: 'Daivel Task',
      description: 'Web application for managing employee tasks and tracking efficiency with task assignment and performance insights.',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      image: 'project1.jpg'
    },
    {
      title: 'Namma Ooru Trend (NOT)',
      description: 'Inventory software for browsing, reviewing, and purchasing dresses and t-shirts with seamless shopping experience.',
      technologies: ['.NET', 'SQL Server', 'jQuery'],
      image: 'project2.jpg'
    },
    {
      title: 'KTM Jewellery CRM',
      description: 'CRM system to streamline customer interactions, manage sales, and improve communication for better customer relationships.',
      technologies: ['PHP', 'MySQL', 'React'],
      image: 'project3.jpg'
    },
    {
      title: 'Oceansapphire Billing',
      description: 'Billing software that enables product sales and billing, manages invoices from multiple branches, and handles inventory.',
      technologies: ['.NET', 'SQL Server', 'JavaScript'],
      image: 'project4.jpg'
    },
    {
      title: 'Centralized Chit Database',
      description: 'Centralized chit database by integrating 11 branch databases, enabling customers to close their chits from any branch.',
      technologies: ['PHP', 'MySQL', 'API Integration'],
      image: 'project5.jpg'
    },
    {
      title: 'The Chennai Silks Website',
      description: 'Responsive website showcasing textile collections with product categories, promotional banners, and store locator.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
      image: 'project6.jpg'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img src={`/images/${project.image}`} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;