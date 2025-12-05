import Image from "next/image";

function ProjectCard({ image, title, url }) {
  return (
    <a className="project-card" href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 900px) 90vw, 520px"
        className="project-card__image"
        priority={false}
      />
      <div className="project-card__overlay">
        <span>View GitHub</span>
      </div>
    </a>
  );
}

export default ProjectCard;