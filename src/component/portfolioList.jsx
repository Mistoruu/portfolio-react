import ProjectCard from "./projectCard";

function PortfolioList() {
    return (
        <div>
            <ul className="portfolio-list">
                <ProjectCard
                    project={{
                        title: "Projet 1",
                        description: "E-commerce",
                        image: "/assets/projet-ecommerce-img1.PNG",
                        link: "#",
                    }}
                />
            </ul>
        </div>
    );
}
export default PortfolioList;
