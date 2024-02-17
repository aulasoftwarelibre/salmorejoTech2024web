import styles from "./Navbar.module.css";
import isotipoBlanco from "../../sprites/isotipo-blanco.svg"; // Adjust the path

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navback}`}>
            <div className="container py-md-2 py-sm-1 px-4">
                <a className="navbar-brand" style={{ color: "#fff", fontWeight: "bold" }} href="#">
                    <img src={isotipoBlanco} className="img-fluid" alt="logosalmorejo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${styles.boldIcon}`} style={{ color: "#fff", fontWeight: "bold" }}></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse pe-4 ${styles.boldText}`} id="navbarNav">
                <ul className={`navbar-nav pl-5 ${styles.boldText}`}>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText}`} href="#">Inicio</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText}`} href="#">Contacto</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText}`} href="#">Servicios</a>
                    </li>
                    <li className="nav-item px-4">
                        <a className={`nav-link ${styles.boldText}`} href="#">Entradas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
