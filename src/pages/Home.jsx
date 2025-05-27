import Nav from "../component/navbar";
import Footer from "../component/footer";
import PortfolioList from "../component/portfolioList";
import Skill from "../component/skill";
import "../styles/home.css";
import handleFormSubmit from "../component/handleFormSubmit";

function Home() {
    return (
        <div>
            <Nav />
            <section id="section-presentation" className="section">
                <div className="container">
                    <div className="presentation-content">
                        <div className="presentation-text">
                            <h1 className="presentation-title">
                                Eliott Maille <br />
                                <span>Développeur Full Stack</span>
                            </h1>
                            <p className="presentation-description">
                                Je suis un développeur web junior passionné par
                                la création d'applications et de sites web
                                performants. <br />
                                Actuellement à la recherche d'une alternance
                                dans le développement informatique.
                            </p>
                        </div>
                        <div className="presentation-button">
                            <a href="#section-about" className="btn">
                                Mon parcours
                            </a>
                            <a href="#section-contact" className="btn">
                                Contactez moi
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-about" className="section">
                <div className="container">
                    <div className="section-header">
                        <p>À propos de moi</p>
                        <h2 className="section-title">Mon parcours</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-image">
                            <img
                                src="/assets/portrait.jpg"
                                alt="Portrait"
                                className="about-img"
                            />
                        </div>
                        <div className="about-text">
                            <h2 className="about-title">
                                Un développeur web junior curieux et passionné
                            </h2>
                            <p className="section-text">
                                Je suis un développeur web junior passionné par
                                la création d'applications et de sites web
                                performants. Actuellement à la recherche d'une
                                alternance dans le développement informatique
                                pour ma 3ème année de année d'études.
                            </p>
                            <p className="section-text">
                                Ayant une forte appétence pour le développement
                                informatique, je suis toujours à la recherche de
                                nouvelles technologies et de nouveaux défis à
                                relever. J'aime apprendre et m'améliorer
                                constamment dans mon domaine.
                            </p>
                            <h2 className="about-title">
                                Mes compétences techniques
                            </h2>
                            <div className="about-skills">
                                <Skill
                                    src="/assets/skill-html.png"
                                    title="HTML"
                                />
                                <Skill
                                    src="/assets/skill-css.png"
                                    title="CSS"
                                />
                                <Skill
                                    src="/assets/skill-js.png"
                                    title="JavaScript"
                                />
                                <Skill
                                    src="/assets/skill-ts.png"
                                    title="Typescript"
                                />
                                <Skill
                                    src="/assets/skill-react.png"
                                    title="React"
                                />
                                <Skill
                                    src="/assets/skill-nodejs.png"
                                    title="Node.js"
                                />
                                <Skill
                                    src="/assets/skill-php.png"
                                    title="Php"
                                />
                                <Skill
                                    src="/assets/skill-python.png"
                                    title="Python"
                                />
                                <Skill src="/assets/skill-cs.png" title="C#" />
                                <Skill
                                    src="/assets/skill-sql.png"
                                    title="MySQL"
                                />
                                <Skill
                                    src="/assets/skill-git.png"
                                    title="Git"
                                />
                                <Skill
                                    src="/assets/skill-docker.png"
                                    title="Docker"
                                />
                            </div>
                            <div className="about-button">
                                <a
                                    href="/assets/CV-Eliott-Maille.pdf"
                                    className="btn"
                                    download
                                >
                                    Télécharger mon CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="section">
                <div className="container">
                    <div className="section-header">
                        <p>Mes réalisations</p>
                        <h2 className="section-title">Portfolio</h2>
                    </div>
                    <div className="portfolio-content">
                        <PortfolioList />
                    </div>
                </div>
            </section>
            <section id="section-contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Contact</h2>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3 className="contact-info-idea">
                                Une idée, un projet ou une question ?
                            </h3>
                            <p className="section-text">
                                Je suis toujours à la recherche de nouvelles
                                opportunités et de projets passionnants.
                                N'hésitez pas à me contacter pour discuter de
                                vos idées ou de vos besoins en développement
                                web.
                            </p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <img
                                        src="/assets/email.png"
                                        alt="Email"
                                        className="contact-icon"
                                    />
                                    <div className="contact-text">
                                        <h4 className="contact-title">Email</h4>
                                        <p>maille.eliott@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <img
                                        src="/assets/phone.png"
                                        alt="phone"
                                        className="contact-icon"
                                    />
                                    <div className="contact-text">
                                        <h4 className="contact-title">
                                            Numéro de téléphone
                                        </h4>
                                        <p>07 69 72 63 50</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <img
                                        src="/assets/location.png"
                                        alt="location"
                                        className="contact-icon"
                                    />
                                    <div className="contact-text">
                                        <h4 className="contact-title">
                                            Localisation
                                        </h4>
                                        <p>Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nom"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn">
                                    Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default Home;
