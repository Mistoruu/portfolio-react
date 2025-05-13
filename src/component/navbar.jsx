import React, { useEffect } from "react";
import "../styles/Nav.css";

const Nav = () => {
    const updateAbout = () => {
        const aboutText = document.querySelector("#header-about-responsive");
        if (aboutText) {
            if (window.innerWidth <= 1040) {
                aboutText.textContent = "À propos";
            } else {
                aboutText.textContent = "À propos de moi";
            }
        }
    };

    useEffect(() => {
        updateAbout();
        window.addEventListener("resize", updateAbout);
        return () => {
            window.removeEventListener("resize", updateAbout);
        };
    }, []);

    return (
        <header id="header-home" className="header">
            <div className="container">
                <nav>
                    <h1 className="header-title">
                        Port<span className="portfolio-logo">folio</span>
                    </h1>
                    <ul className="header-nav">
                        <li>
                            <a href="#header-home" className="nav-link">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#header-projects" className="nav-link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#header-about" className="nav-link">
                                À propos de moi
                            </a>
                        </li>
                        <li>
                            <a href="#header-contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
