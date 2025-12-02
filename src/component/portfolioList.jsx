import ProjectCard from "./projectCard";

function PortfolioList() {
    return (
        <div>
            <ul className="portfolio-list">
                <ProjectCard
                    project={{
                        title: "BTS E6",
                        description: "E-commerce",
                        image: "/assets/projet-ecommerce-img1.PNG",
                        link: "#",
                    }}
                />
                <ProjectCard
                    project={{
                        title: "Dokkan Automation",
                        description: "Automatisation de tâches avec Python",
                        image: "/assets/project-python.jpg",
                        link: "#",
                    }}
                />
            </ul>
        </div>
    );
}
export default PortfolioList;
