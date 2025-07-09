import React from 'react';
import '../styles/animations.css';

const Experience = () => {
  const experiences = [
    {
      company: 'DAivel Universal Software Solution',
      role: 'Senior Software Developer',
      period: '2020 - Present',
      responsibilities: [
        'Developed web applications for task management and employee efficiency tracking',
        'Created inventory management systems for e-commerce platforms',
        'Built CRM systems for jewelry and textile businesses',
        'Developed billing and inventory management software',
        'Integrated multiple branch databases into a centralized system',
        'Implemented QR code based product tracking system'
      ]
    },
    {
      company: 'Amphenol Omni Connect',
      role: 'Designing Engineer',
      period: '2019 - 2020',
      responsibilities: [
        'Prepared circuit diagrams and technical specifications',
        'Developed sample wiring harness parts',
        'Customized solutions based on customer requirements'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in-up`} 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;