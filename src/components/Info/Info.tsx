import styles from "./Info.module.css";
import imagen1 from "../../sprites/i1.jpg";
import imagen2 from "../../sprites/i2.jpg";

export default function Info(){
    return (
        <div className={styles.fondo1}>
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
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo provident perferendis minima quas, libero quidem vero vitae dolores maxime facilis voluptates ipsum odio mollitia quis esse ratione quaerat saepe!Lorem</h4>
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo provident perferendis minima quas, libero quidem vero vitae dolores maxime facilis voluptates ipsum odio mollitia quis esse ratione quaerat saepe!Lorem</h4>
                </div>
                <div className="container pt-5 col-md-5">
                  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className={`carousel-inner ${styles.middle}`}>
                      <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="..." />
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.9025032265813!2d-8.598081223707565!3d41.1802936713268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246595f6bf5f67%3A0x40db5e33f6423d4a!2sXior%20Campus%20Asprela%20-%20Resid%C3%AAncia%20Universit%C3%A1ria%20no%20Porto!5e0!3m2!1ses!2spt!4v1708779177074!5m2!1ses!2spt" width="600" height="450" style={{border: '0',}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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