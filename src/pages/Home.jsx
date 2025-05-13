import Nav from "../component/navbar";
import Footer from "../component/footer";
import "../styles/home.css";
function Home() {
    return (
        <div>
            <Nav />
            <section id="section-about" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">À propos de moi</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="section-text">
                                Je suis un développeur web passionné par la
                                création d'applications et de sites web
                                performants. J'ai une solide expérience dans le
                                développement front-end et back-end, et je suis
                                toujours à la recherche de nouveaux défis.
                            </p>
                            <p className="section-text">
                                Mon objectif est de créer des solutions
                                innovantes qui répondent aux besoins des
                                utilisateurs tout en respectant les meilleures
                                pratiques de développement.
                            </p>
                        </div>
                        <div className="about-image">
                            <img
                                src="/assets/portrait.jpg"
                                alt="Portrait"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Contact</h2>
                    </div>
                    <div className="contact-content">
                        <div className="contact-info">
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
                                        <h3 className="contact-title">Email</h3>
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
                                        <h3 className="contact-title">
                                            Numéro de téléphone
                                        </h3>
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
                                        <h3 className="contact-title">
                                            Localisation
                                        </h3>
                                        <p>Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form>
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
