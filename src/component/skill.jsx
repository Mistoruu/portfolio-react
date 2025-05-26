import "../styles/skill.css";

function Skill({ src, title }) {
    return (
        <>
            <div className="skill">
                <img src={src} alt={title} className="skill-icon" />
            </div>
        </>
    );
}

export default Skill;
