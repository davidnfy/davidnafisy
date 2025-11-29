import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  buttons: { label: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tags, buttons }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="skills">
      {tags.map((tag, idx) => (
        <a key={idx}>{tag}</a>
      ))}
    </div>
    <div className="btns">
      {buttons.map((btn, idx) => (
        <a key={idx} href={btn.url} className="btn" target="_blank" rel="noopener noreferrer">
          {btn.label}
        </a>
      ))}
    </div>
  </div>
);

export default ProjectCard;
