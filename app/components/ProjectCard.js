import React from "react";

function ProjectCard({ image, title, url }) {
  return (
    <a className="project-card" href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} />
      <div className="project-card__overlay">
        <span>View GitHub</span>
      </div>
    </a>
  );
}

export default ProjectCard;