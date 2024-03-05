import React from 'react';
import styles from './Team.module.css';
import img2 from '../../sprites/equipo/ASL_Silvia - Silvia Roldán.jpeg';
import img3 from '../../sprites/equipo/jesus.jpeg';
import img4 from '../../sprites/equipo/david.jpeg';
import img5 from '../../sprites/equipo/dario.jpeg';
import img6 from '../../sprites/equipo/pino.jpeg'
import img7 from '../../sprites/equipo/1.jpeg'
import img8 from '../../sprites/equipo/elena.jpeg'
import img9 from '../../sprites/equipo/belen.jpeg'
import img10 from '../../sprites/equipo/jose.jpeg'
import img11 from '../../sprites/equipo/miguel.jpg'
import img12 from '../../sprites/equipo/carlos.jpg'
import img13 from '../../sprites/equipo/alba.jpeg'
import img14 from '../../sprites/equipo/rafa.jpg'
import img15 from '../../sprites/equipo/chema.jpg'
import img16 from '../../sprites/equipo/gonzalo.jpg'
import img17 from '../../sprites/equipo/alvaro.jpg'
import img18 from '../../sprites/equipo/alberto.jpeg'


const Team: React.FC = () => {
  return (
    <div className='container pt-5'>
      <h1 className={styles.schedule}>GENERAL</h1>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img3} alt="Avatar" className={` img-fluid`} style={{ height: '230px' }} />
            <h5><b>Jesus Escribano Serena</b></h5>
            <p className={`${styles.description}`}>Este año coordino un poco todo esto pero nada de esto sería posible sin esta gente que sale a mi alrededor 🤝🍅 . CAAAASI Ingeniero Informático y en mis ratos libres trabajo con datos en una startup. De Los Blázquez desde xiquitito</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/jesusescribanos" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://www.linkedin.com/in/jes%C3%BAs-escribano-serena-4223b2211" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/jes106" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img2} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Silvia Roldán Flores</b></h5>
            <p className={`${styles.description}`}>Estudiante de 4° de Ingeniería Informática en la mención de Software Product Developer en Audiense</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/silviarf292" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/Silvya292https://www.linkedin.com/in/silvia-rold%C3%A1n-flores-5986b7211/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/Silvya292" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img5} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Darío Martínez Kostyuk</b></h5>
            <p className={`${styles.description}`}>Deseando aprender y disfrutar mucho de esta experiencia </p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img4} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>David Martínez Molina</b></h5>
            <p className={`${styles.description}`}>Estudiante de ingeniería informática de la UCO</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>INFRAESTRUCTURA</h1>
      <div className={`row ${styles.cardContainer}`}>
      <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img6} alt="Avatar" className={`img-fluid`} style={{width: '500px', height: '230px'}} />
            <h5><b>Álvaro Pino Mérida</b></h5>
            <p className={`${styles.description}`}>🖥️Back-end que sabe como centrar un div</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img7} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Arturo Vicente Pérez</b></h5>
            <p className={`${styles.description}`}>Coordinador de infraestructura amante del cacharreo y de los cacharros</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img8} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Elena Molero Padilla</b></h5>
            <p className={`${styles.description}`}>Estudiante de Ingeniería informática apasionada por los ámbitos artísticos 🌻</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img9} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Belén Mª Montes Caro</b></h5>
            <p className={`${styles.description}`}>En mi tiempo libre estudio Ingeniería Informática</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
      </div>
      <div className={`row ${styles.cardContainer}`}>
      <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img10} alt="Avatar" className={`img-fluid`} style={{width: '500px', height: '230px'}} />
            <h5><b>José Andrés Trujillo Henares</b></h5>
            <p className={`${styles.description}`}>3rd year Computer Engineering student at UCO</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img11} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Miguel Orzáez Pintor</b></h5>
            <p className={`${styles.description}`}>Entusiasta y bastante friki de todo esto que cada día se da cuenta que sabe menos de todo este apasionado mundo</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>GESTIÓN</h1>
      <div className={`row ${styles.cardContainer}`}>
      <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img12} alt="Avatar" className={`img-fluid`} style={{height: '230px'}} />
            <h5><b>Carlos Rivero Talavera</b></h5>
            <p className={`${styles.description}`}>Estudiante de 4º de Ingeniería Informática en la mención de Software</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img13} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Alba Palomino Jiménez</b></h5>
            <p className={`${styles.description}`}>Estudiante del último curso de Ingeniería Informática en la mención de Software y co-coordinadora de Gestión junto con el de la derecha 👉🏻</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img14} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Rafael Emilio Pérez </b></h5>
            <p className={`${styles.description}`}> Cordobéh, terminando la carrera y co-coordinador de Gestión del SalmorejoTech 2024 junto con la de la izquierda👈🏼 </p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img15} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Jose Maria Muñoz López</b></h5>
            <p className={`${styles.description}`}>Estudiante de ingeniería de computadores y miembro del aula del software libre</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>MARKETING</h1>
      <div className={`row ${styles.cardContainer}`}>
      <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img16} alt="Avatar" className={`img-fluid`} style={{height: '230px'}} />
            <h5><b>Gonzalo Márquez de Torres</b></h5>
            <p className={`${styles.description}`}>Estudiante de Ingeniería Informática especializado en Software</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img17} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Álvaro Serrano López</b></h5>
            <p className={`${styles.description}`}>Estudiante de 3 de ingeniería informática apasionado del desarrollo de software con muchas ganas de aprender</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img18} alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Alberto Fernández Ramos </b></h5>
            <p className={`${styles.description}`}>Estudiante de 4° en ingeniería del software de la Universidad de Málaga</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
              <a href="https://github.com/aulasoftwarelibre" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{ color: "#ffffff", padding: "2%" }}></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Team;
