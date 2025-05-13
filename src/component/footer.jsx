import "../styles/footer.css";

function footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div>
                        <div class="footer-logo">
                            Port
                            <span className="portfolio-logo">folio</span>
                        </div>
                        <p class="footer-text">
                            A passionate web designer and developer creating
                            beautiful and functional websites for businesses and
                            individuals.
                        </p>
                        <div class="footer-social">
                            <a href="#" class="footer-social-icon">
                                <img
                                    src="/assets/ico-github.png"
                                    alt="GitHub"
                                />
                            </a>
                            <a href="#" class="footer-social-icon">
                                <img
                                    src="/assets/ico-linkedin.png"
                                    alt="LinkedIn"
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="footer-title">Liens</h3>
                        <ul class="footer-links">
                            <li>
                                <a href="#home">Accueil</a>
                            </li>
                            <li>
                                <a href="#about">Portfolio</a>
                            </li>
                            <li>
                                <a href="#services">À propos</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="footer-title">BTS</h3>
                        <ul class="footer-links">
                            <li>
                                <a href="#services">Tableau de synthèse</a>
                            </li>
                            <li>
                                <a href="#">Veille technologique</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="footer-title">Contact</h3>
                        <ul class="footer-links">
                            <li>Paris, France</li>
                            <li>maille.eliott@gmail.com</li>
                            <li>07 69 72 63 50</li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>© 2025 Maillé Eliott. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
export default footer;
