import "../styles/card.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
            />
            <div className="project-card-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
