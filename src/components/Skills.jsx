import React from 'react';
import '../styles/animations.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript & jQuery', level: 85 },
    { name: 'PHP', level: 90 },
    { name: '.NET', level: 80 },
    { name: 'SQL, MySQL', level: 85 },
    { name: 'React', level: 75 },
  ];

  const coreSkills = [
    'Project Management',
    'Critical Thinking',
    'Teamwork',
    'Time Management',
    'Problem Solving',
    'API Integration'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="technical-skills slide-in-left">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-aos="skill-animation"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="core-skills slide-in-right">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              {coreSkills.map((skill, index) => (
                <div className="skill-badge" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;