import { useState } from 'react';
import styles from "./Navbar.module.css";
import isotipoBlanco from "../../sprites/isotipo-blanco.svg"; // Adjust the path

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navback}`}>
            <div className="container py-md-2 py-sm-1 px-4">
                <a className="navbar-brand" style={{ color: "#fff", fontWeight: "bold" }} href="#">
                    <img src={isotipoBlanco} className="img-fluid" alt="logosalmorejo" />
                </a>
                <button className={"navbar-toggler"} type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${styles.boldIcon}`}></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} pe-2 pb-1`} id="navbarNav">
                <ul className={`navbar-nav margin-auto pl-5`}>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText} `} href="#">Inicio</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText} `} href="#info">Info</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText} `} href="#participantes">Participantes</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText} `} href="#footer">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
