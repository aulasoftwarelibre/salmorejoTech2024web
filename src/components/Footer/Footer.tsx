import logo from "../../sprites/logo-aula-blanco.png";
import styles from "./Footer.module.css";
import twitter from '../../sprites/featherIcons/twitter.svg'
import facebook from '../../sprites/featherIcons/facebook.svg'
import github from '../../sprites/featherIcons/github.svg'
import youtube from '../../sprites/featherIcons/youtube.svg'
import instagram from '../../sprites/featherIcons/instagram.svg'
import telegram from '../../sprites/featherIcons/telegram.svg'
import linkedln from '../../sprites/featherIcons/linkedin.svg'
import mail from '../../sprites/featherIcons/mail.svg'
import map from '../../sprites/featherIcons/map.svg'

export default function Header() {
  return (

    <div className={styles.fondo1} id="footer">
      <div className={styles.fondoblancoabajo}>

      </div>
      <div className="row container-fluid">
        <div className="col-md-6 col-sm-12 pb-md-5 pb-sm-3">
          <div className="row pt-2">
            <h2>Organiza:</h2>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <img src={logo} className="img-fluid col-4 " />
            </div>

          </div>
          <div className="row">
            <div className="col-12">

              <a href="https://www.facebook.com/AulaSoftwareLibre/" target="_blank" style={{ padding: "2%" }}>
                <img src={facebook} alt="Facebook" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.instagram.com/aulasoftwarelibre/?hl=es" target="_blank" style={{ padding: "2%" }}>
                <img src={instagram} alt="Instagram" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://t.me/AulaSoftwareLibreUCO" target="_blank" style={{ padding: "2%" }}>
                <img src={telegram} alt="Telegram" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/company/aulasoftwarelibre/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkedln} alt="Linkedln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.youtube.com/channel/UCfWiR5j-cbKcGTi9faK8P6w" target="_blank" style={{ padding: "2%" }}>
                <img src={youtube} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>
              
             
              
  
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="row">
            <div className="col-11">
              <h3>¡Encuéntranos!</h3>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-1">
              <img src={mail} alt="Mail" style={{ width: "2em", height: "2em" }} />
            </div>
            <div className="col">
              <h3>
                <a style={{ textDecoration: "none", color: "#ffffff" }}>aulasoftwarelibre@uco.es</a>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>  <img src={map} alt="Map" style={{ width: "1em" }} /> Aulario Averroes</h3>
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
        <h4>© 2024 Aula Software Libre</h4>
      </div>
    </div>
  );
}