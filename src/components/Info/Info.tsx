
import styles from "./Info.module.css";
import ticket from '../../sprites/featherIcons/ticket.svg';
import mic from '../../sprites/featherIcons/mic.svg';
import networking from '../../sprites/featherIcons/networking.svg';
import Audiense from "../Audiense/Audiense";

export default function Info() {
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
                <h1><img src={ticket} className={`${styles.ticket}`} alt="Ticket" style={{ width: "3em" }} /></h1>
              </div>
              <div className="row"> <h2 className="mt-4">+400 ASISTENTES</h2></div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="row"><h1><img src={mic} className={`${styles.icon}`} alt="Ticket" style={{ width: "3em" }} /></h1>  </div>
              <div className="row">
                <h2 className="mt-4">+10 PONENCIAS</h2>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="row">
                <h1 className={styles.icon}><i className={`fa-solid fa-utensils ${styles.fork}  fa-2xl`}></i>
                  <img src={networking} className={`${styles.fork}`} alt="Networking" style={{ width: "3em" }} />
                </h1></div>
              <div className="row"> <h2 className="mt-4">NETWORKING</h2></div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="container-fluid pt-5 col-md-6 justify-content-center" style={{ margin: "auto" }}>
              <h4>Otro año está por aquí el evento más cordobés y tech de la provincia 🍅💻. Un día donde disfrutaremos del conocimiento de nuestr@s estupend@s ponentes que poco a poco iremos anunciando y el no menos importante networking, con los productos más característicos de nuestra queridísima Córdoba.</h4>
              <h4>Y por si no hubiera quedado claro nuestro amor por Córdoba, la fecha también coincide con una de las festividades más señaladas de la ciudad: Las Cruces de Mayo. Además, os vamos a dejar un secreto por aquí 🤫(se pueden visitar los Patios en esa fecha sin tanta afluencia de gente y manteniendo el mismo encanto).</h4>
              <h4>Todo esto no hubiera sido posible sin la incondicional ayuda de todos nuestros patrocinadores y a todos los <a href="https://uco.es/aulasoftwarelibre" style={{ color: 'white' }}>compañeros</a> del Aula de Software Libre</h4>
            </div>
            <div className="container pt-5 col-md-5">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.middle}`}>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/TtQ15dD/8-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item active">
                    <img src="https://i.ibb.co/fMyM93r/0-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/8xtQvyv/1-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/VTrTCT4/2-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/bFGMFtx/3-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/3fbJZWW/4-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/w6nSDpX/5-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/b5WRQWC/6-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/k8m0Y4b/7-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>

                  <div className="carousel-item">
                    <img src="https://i.ibb.co/84hDTX6/9-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/b37PPBC/10-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/0DTcLP4/11-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/zxVF3CJ/12-min.jpg" className={`d-block w-100 ${styles.imagen}`} alt="imagen del carrousel" />
                  </div>
                </div>
                <button className={` ${styles.botonInicio}`}
                  data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className={` ${styles.botonFin}`} type="button"
                  data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="row pt-5 mt-5">
              <h1>LUGAR</h1>
            </div>
            <div className="row pt-5 p-0">
              <div className="container pt-5 col-md-5 p-0"><img src="https://i.ibb.co/0cCrym2/lugar.jpg" className={`img-fluid ${styles.middle}`} width={550} height={500} loading="lazy" /></div>
              <div className="container-fluid pt-5 col-md-6 justify-content-center" style={{ margin: "auto", marginLeft: '10px' }}>
                <h4> <a href="https://maps.app.goo.gl/DnQ3WXBszrnSNvSU7" style={{ color: 'white' }}>
                  El evento se va a realizar en el Colegio Mayor Nuestra Señora de La Asunción
                  s n, Av. Menéndez Pidal, 14004 Córdoba. </a></h4>
                <h4>En el mapa se pueden ver varias rutas que podéis seguir si queréis utilizar el transporte público. Además, hay carriles bici para poder acceder al evento en ella si así lo deseais. </h4>
                <h4>Por otro lado, en el mapa se pueden observar los distintos aparcamientos que hay cerca del lugar del evento por si tenéis que acceder con vuestro vehículo propio.</h4>
              </div>
            </div>
          </div>
          <br />
        </div>
        <Audiense/>
      </div>
      <div className={styles.fondoblanco}>
        <div className="container-fluid mt-5">
        </div>
      </div>
    </div>
  );
}
