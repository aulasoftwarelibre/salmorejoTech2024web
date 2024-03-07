import styles from "./Info.module.css";
import imagen0 from "../../sprites/imagenesInicio/0-min.jpg";
import imagen1 from "../../sprites/imagenesInicio/1-min.jpg";
import imagen2 from "../../sprites/imagenesInicio/2-min.jpg";
import imagen3 from "../../sprites/imagenesInicio/3-min.jpg";
import imagen4 from "../../sprites/imagenesInicio/4-min.jpg";
import imagen5 from "../../sprites/imagenesInicio/5-min.jpg";
import imagen6 from "../../sprites/imagenesInicio/6-min.jpg";
import imagen7 from "../../sprites/imagenesInicio/7-min.jpg";
import imagen8 from "../../sprites/imagenesInicio/8-min.jpg";
import imagen9 from "../../sprites/imagenesInicio/9-min.jpg";
import imagen10 from "../../sprites/imagenesInicio/10-min.jpg";
import imagen11 from "../../sprites/imagenesInicio/11-min.jpg";
import imagen12 from "../../sprites/imagenesInicio/12-min.jpg";
import ticket from "../../sprites/featherIcons/ticket.svg"
import mic from "../../sprites/featherIcons/mic.svg"
import networking from "../../sprites/featherIcons/networking.svg"
import lugar from "../../sprites/lugar.jpg"


export default function Info(){
    return (
        <div className={styles.fondo1} id="info">
          <br />
          <div className="row pt-5">
            <div className="col-12 pt-5">
              <div className="row py-5">
                <h1 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>¿Aún no sabes que es el SalmorejoTech?</h1>
              </div>
              <div className="row pt-5" style={{ alignItems: 'center' }}>
                <div className="col-12 col-sm-4">
                  <div className="row"> 
                  <h1><img src={ticket} className={`${styles.ticket}`} alt="Ticket" style={{ width: "3em"}} /></h1>  
                  </div>

                  <div className="row"> <h2 className="mt-4">+400 ASISTENTES</h2></div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="row"><h1><img src={mic} className={`${styles.icon}`} alt="Ticket" style={{ width: "3em"}} /></h1>  </div>
                  <div className="row">
                    <h2 className="mt-4">+10 PONENCIAS</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="row">
                    <h1 className={styles.icon}><i className={`fa-solid fa-utensils ${styles.fork}  fa-2xl`}></i>
                    <img src={networking} className={`${styles.fork}`} alt="Networking" style={{ width: "3em"}} />
                    
                    </h1></div>
                  <div className="row"> <h2 className="mt-4">NETWORKING</h2></div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="container-fluid pt-5 col-md-6 justify-content-center" style={{margin: "auto"}}>
                  <h4>Otro año está por aquí el evento más cordobés y tech de la provincia 🍅💻. Un día donde disfrutaremos del conocimiento de nuestr@s estupend@s ponentes que poco a poco iremos anunciando y el no menos importante networking, con los productos más característicos de nuestra queridísima Córdoba.</h4>
                  <h4>Y por si no hubiera quedado claro nuestro amor por Córdoba, la fecha también coincide con una de las festividades más señaladas de la ciudad: Las Cruces de Mayo. Además, os vamos a dejar un secreto por aquí 🤫(se pueden visitar los Patios en esa fecha sin tanta afluencia de gente y manteniendo el mismo encanto).</h4>
                  <h4>Todo esto no hubiera sido posible sin la incondicional ayuda de todos nuestros patrocinadores y a todos los <a href="https://uco.es/aulasoftwarelibre" style={{color: 'white'}}>compañeros</a> del Aula de Software Libre</h4>
                </div>
                <div className="container pt-5 col-md-5">
                  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className={`carousel-inner ${styles.middle}`}>
                      <div className="carousel-item active">
                        <img src={imagen0} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen1} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen4} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen5} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen6} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen7} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen8} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen9} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen10} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen11} className="d-block w-100" alt="imagen" />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen12} className="d-block w-100" alt="imagen" />
                      </div>
                    </div>
                    <button className={` ${styles.botonInicio}`} 
                    data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className={` ${styles.botonFin}`}  type="button"
                    data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="row pt-5 mt-5">
                  <h1>LUGAR</h1>
                </div>
                <div className="py-3 my-3 col-10 container-fluid d-flex align-items-center justify-content-center">
                <img src={lugar} className={`img-fluid`}  width={500} height={500} />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className={styles.fondoblanco}>
            <div className="container-fluid mt-5">
            </div>
          </div>
        </div>
      );
}