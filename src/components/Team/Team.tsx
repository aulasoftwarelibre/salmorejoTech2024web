import React from 'react';
import styles from './Team.module.css';
import img16 from '../../sprites/equipo/gonzalo-min.jpg'
import img17 from '../../sprites/equipo/alvaro-min.jpg'
import img18 from '../../sprites/equipo/alberto-min.jpeg'
import twitter from '../../sprites/featherIcons/twitter.svg'
import linkdln from '../../sprites/featherIcons/linkedin.svg'
import github from '../../sprites/featherIcons/github.svg'

const Team: React.FC = () => {
  return (
    <div className='container pt-5' id='participantes'>
      <h1 className={styles.schedule}>ORGANIZACIÓN DEL SALMOREJO</h1>
      <h1 className={styles.schedule}>GENERAL</h1>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/sRNt3tQ/jesus-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Jesus Escribano Serena</b></h5>
            <p className={`${styles.description}`}>Este año coordino un poco todo esto pero nada de esto sería posible sin esta gente que sale a mi alrededor 🤝🍅 . CAAAASI Ingeniero Informático y en mis ratos libres trabajo con datos en una startup. De Los Blázquez desde xiquitito</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/jesusescribanos" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/jes%C3%BAs-escribano-serena-4223b2211" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/jes106" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/51SQR1W/ASL-Silvia-Silvia-Rold-n-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Silvia Roldán Flores</b></h5>
            <p style={{height: '134px'}}>Estudiante de 4° de Ingeniería Informática en la mención de Software Product Developer en Audiense</p>
            <p className={`${styles.icons}`}>
              <a href="https://twitter.com/silviarf292" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/silvia-rold%C3%A1n-flores-5986b7211/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/Silvya292" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/GdmLbfc/dario-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Darío Martínez Kostyuk</b></h5>
            <p style={{ height: '152px' }}>Deseando aprender y disfrutar mucho de esta experiencia </p>
            <p className={`${styles.icons}`} style={{ height: '23px' }}>

            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/88Lntb0/david-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>David Martínez Molina</b></h5>
            <p style={{ height: '192px' }}>Estudiante de ingeniería informática de la UCO</p>
            <p className={`${styles.icons}`}>

            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>INFRAESTRUCTURA</h1>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/SVYzbsT/pino-min.jpg" alt="Avatar" className={`img-fluid`} style={{ width: '500px', height: '230px' }} />
            <h5><b>Álvaro Pino Mérida</b></h5>
            <p className={`${styles.description}`}>🖥️Back-end que sabe como centrar un div</p>
            <p className={`${styles.icons}`}>
             

               <a href="https://twitter.com/_A1varo_" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/%C3%A1lvaro-pino-m%C3%A9rida/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/02Alvaro" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>            
            
            
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/m0ZFFkC/1-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Arturo Vicente Pérez</b></h5>
            <p className={`${styles.description}`}>Director de desastres digitales y amante de los trastos tecnológicos</p>
            <p className={`${styles.icons}`}>

              <a href="https://twitter.com/ARVIPE_01" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/arturo-vicente-p%C3%A9rez-3b0349195/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/ARVIPE" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>           
            
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/9NCfBw4/elena-min.png" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Elena Molero Padilla</b></h5>
            <p className={`${styles.description}`}>Estudiante de Ingeniería informática apasionada por los ámbitos artísticos 🌻</p>
            <p className={`${styles.icons}`}>

              <a href="https://www.linkedin.com/in/elena-molero-padilla-9213432b7/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/laFlorNegra" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>           
            
            
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/4mnBW84/belen-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Belén Mª Montes Caro</b></h5>
            <p className={`${styles.description}`}>En mi tiempo libre estudio Ingeniería Informática</p>
            <p className={`${styles.icons}`}>

              <a href="https://twitter.com/belenmmontes" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/belén-maría-montes-caro-128929294/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/belenmmc" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>   
            
            </p>
          </div>
        </div>
      </div>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/vYZp826/jose-min.jpg" alt="Avatar" className={`img-fluid`} style={{ width: '500px', height: '230px' }} />
            <h5><b>José Andrés Trujillo Henares</b></h5>
            <p className={`${styles.description}`}>3rd year Computer Engineering student at UCO</p>
            <p className={`${styles.icons}`}>

              <a href="https://www.linkedin.com/in/joseandrestrujillo" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="ttps://github.com/joseandrestrujillo" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>   
            
            
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/Rzr2vX1/miguel-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Miguel Orzáez Pintor</b></h5>
            <p className={`${styles.description}`}>Entusiasta y bastante friki de todo esto que cada día se da cuenta que sabe menos de todo este apasionado mundo</p>
            <p className={`${styles.icons}`}>

            <a href="https://twitter.com/miguelitorzaez" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="ttps://www.linkedin.com/in/miguel-orzaez-pintor-017303184/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
            
            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>GESTIÓN</h1>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/Gpgs9HD/carlos-min.png" alt="Avatar" className={`img-fluid`} style={{ height: '230px' }} />
            <h5><b>Carlos Rivero Talavera</b></h5>
            <p className={`${styles.description}`}>Estudiante de 4º de Ingeniería Informática en la mención de Software</p>
            <p className={`${styles.icons}`}>

              <a href="https://www.linkedin.com/in/carlos-rivero-talavera-062645222/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/AnonymusRiv" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>               
            
            
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/WV2Rzy4/alba-min.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Alba Palomino Jiménez</b></h5>
            <p className={`${styles.description}`}>Estudiante del último curso de Ingeniería Informática en la mención de Software y co-coordinadora de Gestión junto con el de la derecha 👉🏻</p>
            <p className={`${styles.icons}`}>


              <a href="https://twitter.com/Albapj011" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/alba-palomino-jim%C3%A9nez-966ab9222/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/Albapj01" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a> 

             
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/P6XqcyL/rafa-min.png" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Rafael Emilio Pérez </b></h5>
            <p className={`${styles.description}`}> Cordobéh, terminando la carrera y co-coordinador de Gestión del SalmorejoTech 2024 junto con la de la izquierda👈🏼 </p>
            <p className={`${styles.icons}`}>

              <a href="https://twitter.com/rafaapeerez" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/rafael-emilio-pérez-lópez-590725211/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/Rafapeerez" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>   
            </p>
          </div>
        </div>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/6bxV8DJ/chema-min.png" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Jose Maria Muñoz López</b></h5>
            <p className={`${styles.description}`}>Estudiante de ingeniería de computadores y miembro del aula del software libre</p>
            <p className={`${styles.icons}`}>

            <a href="https://twitter.com/josema23jmml" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-mu%C3%B1oz-l%C3%B3pez-28babb222/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/Xxema23" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>   

             
            </p>
          </div>
        </div>
      </div>
      <div className={`row ${styles.cardContainer}`}>
      <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src="https://i.ibb.co/7VwjscC/jimeninho.jpg" alt="Avatar" className={`${styles.avatar} img-fluid`} />
            <h5><b>Antonio Jiménez Jiménez</b></h5>
            <p className={`${styles.description}`}>Estudiante de ingeniería informática especializado en software y coordinador del aula de software libre</p>
            <p className={`${styles.icons}`}>


              <a href="https://twitter.com/antoniojj1712" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/antonio-jim%C3%A9nez-jim%C3%A9nez-084645222/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/jimenez1712" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a> 

             
            </p>
          </div>
        </div>
      </div>
      <h1 className={styles.schedule}>MARKETING</h1>
      <div className={`row ${styles.cardContainer}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className={`${styles.fireFlame}`}></div>
          <div className={`${styles.content}`}>
            <img src={img16} alt="Avatar" className={`img-fluid`} style={{ height: '230px' }} />
            <h5><b>Gonzalo Márquez de Torres</b></h5>
            <p style={{ height: '136px' }}>Estudiante de Ingeniería Informática especializado en Software</p>
            <p className={`${styles.icons}`}>

          
              <a href="https://www.linkedin.com/in/gonzalo-márquez" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/marquez2002" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>  

              
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

            <a href="https://twitter.com/serranoo71" target="_blank" style={{ padding: "2%" }}>
                <img src={twitter} alt="Twitter" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://www.linkedin.com/in/%C3%A1lvaro-serrano-lop%C3%A9z-98058125a/" target="_blank" style={{ padding: "2%" }}>
                <img src={linkdln} alt="Linkdln" style={{ width: "2em", height: "2em" }} />
              </a>
              <a href="https://github.com/Serranito09" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>   


             
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
            <a href="https://github.com/alberto11fdez" target="_blank" style={{ padding: "2%" }}>
                <img src={github} alt="GitHub" style={{ width: "2em", height: "2em" }} />
              </a>  
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Team;
