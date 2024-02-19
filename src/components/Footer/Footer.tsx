import logo from "../../sprites/logo-aula-blanco.png";
import styles from "./Footer.module.css";

export default function Header() {
  return (
    
    <div className={styles.fondo1}>
        <div className={styles.fondoblancoabajo}>

    </div>
    <div className="row container-fluid">
      <div className="col-md-6 col-sm-12 pb-md-5 pb-sm-3">
        <div className="row pt-2">
          <h2>Organiza:</h2>
        </div>
        <div className="row py-3">
          <div className="col-12">
            <img src={logo} className="img-fluid col-4 "/>
          </div>
          
        </div>
        <div className="row">
          <div className="col-12">
            <i className="fa-brands fa-instagram fa-2xl" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-facebook fa-2xl" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-telegram fa-2xl" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff" }}></i>
            <i className="fa-brands fa-youtube fa-2xl" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="col-11">
            <h3>¡Encuéntranos!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-1"><i className="fa-regular fa-envelope fa-2xl" style={{ color: "#ffffff" }}></i></div>
          <div className="col">
            <h3>aulasoftwarelibre@uco.es</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3> <i className="fa-solid fa-location-dot fa-l" style={{ color: "#ffffff" }}></i>Aulario Averroes</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3> (Campus de Rabanales)</h3>
          </div>
        </div>
    </div>
    
    
    </div>
    <div className="row container-fluid pb-3 entumecido">
      <h4>© 2023 Aula Software Libre</h4>
    </div>
    </div>
    );
}