import styles from "./Info.module.css";
import imagen0 from "../../sprites/imagenesInicio/0.jpg";
import imagen1 from "../../sprites/imagenesInicio/1.jpg";
import imagen2 from "../../sprites/imagenesInicio/2.jpg";
import imagen3 from "../../sprites/imagenesInicio/3.jpg";
import imagen4 from "../../sprites/imagenesInicio/4.jpg";
import imagen5 from "../../sprites/imagenesInicio/5.jpg";
import imagen6 from "../../sprites/imagenesInicio/6.jpg";
import imagen7 from "../../sprites/imagenesInicio/7.jpg";
import imagen8 from "../../sprites/imagenesInicio/8.jpg";
import imagen9 from "../../sprites/imagenesInicio/9.jpg";
import imagen10 from "../../sprites/imagenesInicio/10.jpg";
import imagen11 from "../../sprites/imagenesInicio/11.jpg";
import imagen12 from "../../sprites/imagenesInicio/12.jpg";



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
                  <div className="row"> <h1><i className={`fa-solid fa-ticket ${styles.ticket} fa-2xl`} style={{ color: '#fdb057' }}></i></h1></div>
                  <div className="row"> <h2 className="mt-4">+400 ASISTENTES</h2></div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="row"><h1 className={styles.icon}><i className={`fa-solid fa-microphone-lines ${styles.microphone} fa-2xl`}></i></h1></div>
                  <div className="row">
                    <h2 className="mt-4">+10 PONENCIAS</h2>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="row">
                    <h1 className={styles.icon}><i className={`fa-solid fa-utensils ${styles.fork}  fa-2xl`}></i></h1></div>
                  <div className="row"> <h2 className="mt-4">NETWORKING</h2></div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="container-fluid pt-5 col-md-5">
                  <h4>Otro año está por aquí el evento más cordobés y tech de la provincia 🍅💻. Un día donde disfrutaremos del conocimiento de nuestr@s estupend@s ponentes que poco a poco iremos anunciando y el no menos importante networking, con los productos más característicos de nuestra queridísima Córdoba.</h4>
                  <h4>Y por si no hubiera quedado claro nuestro amor por Córdoba, la fecha también coincide con una de las festividades más señaladas de la ciudad: Las Cruces de Mayo. Además, os vamos a dejar un secreto por aquí 🤫(se pueden visitar los Patios en esa fecha sin tanta afluencia de gente y manteniendo el mismo encanto).</h4>
                  <h4>Todo esto no hubiera sido posible sin la incondicional ayuda de todos nuestros patrocinadores y a todos los <a href="#participantes" style={{color: 'white'}}>compañeros</a> del Aula de Software Libre</h4>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.693549554163!2d-4.7934608!3d37.8674603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d20bc67258437%3A0x1fd0ac9aac3c638a!2sColegio%20Mayor%20Nuestra%20Se%C3%B1ora%20de%20La%20Asuncion!5e0!3m2!1ses!2ses!4v1709680133633!5m2!1ses!2ses" width="600" height="450" style={{border: '0'}}  loading="lazy"></iframe>
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