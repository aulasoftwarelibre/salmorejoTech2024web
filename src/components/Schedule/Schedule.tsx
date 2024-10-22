import React, { useState } from 'react';
import IreneMorgado from "../../sprites/ponentes/IreneM.Morgado.png";
import ConchaAsensio from "../../sprites/ponentes/concha.png";
import JoseFernandez from "../../sprites/ponentes/jose.png";
import MarisaMarting from "../../sprites/ponentes/marisamartin.png";
import AlfredoBautista from "../../sprites/ponentes/alfredobautista.png";
import Isra from "../../sprites/ponentes/isra.png";
import Ivan from "../../sprites/ponentes/ivan.png";
import Ana from "../../sprites/ponentes/ana.png";
import Ariane from "../../sprites/ponentes/ariane.png";
import Patricia from "../../sprites/ponentes/patricia.png";
import FJavier from "../../sprites/ponentes/fjavier.png";
import Leonardo from "../../sprites/ponentes/leonardo.png";
import Carlos from "../../sprites/ponentes/carlos.png";
import JoseManuel from "../../sprites/ponentes/josemanuel.png";
import Jorge from "../../sprites/ponentes/jorge.png";
import Guiomar from "../../sprites/ponentes/guiomar.png";
import IvanValero from "../../sprites/ponentes/ivanva.png";
import Belen from "../../sprites/ponentes/belen.png";
import Javi from "../../sprites/ponentes/javivelasco.png";

import styles from './Schedule.module.css';

// const TBA: React.FC<{}> = () => {
//   return (
//     <>
//       <div
//         className={`col-5 container-fluid d-flex justify-content-center ${styles.card}`}
       
//       >
//         <div className="row ">
//           <div className="col-12 d-flex align-items-center">
//             <div className="row ">
//               <h3 className={`align-items-center ${styles.scheduleTitle}`}>TBA</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const FirstCard: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyFirst}`}>
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>{props.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const Card: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyComida}`}>
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>{props.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

const DoubleCard: React.FC<{ title: string, author: string, image: string, image2: string, descripcion1: string, descripcion2: string, descripcionCharla: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
            <img src={props.image2} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p className='m-0'>{props.descripcion1} </p>
                <p className='m-0'>{props.descripcion2}</p>
                <p className='mt-4'>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
                <img src={props.image2} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

const SingleCardJose: React.FC<{ title: string, author: string, image: string, descripcion: string, descripcionCharla: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img src={props.image} className={`img-fluid ${styles.singleImg}`} alt="..." style={{ maxWidth: '40%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingle}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className='mt-3'>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '60%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const SingleCard: React.FC<{ title: string, author: string, image: string, descripcion: string, descripcionCharla: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img src={props.image} className={`img-fluid ${styles.singleImg}`} alt="..." style={{ maxHeight: '100%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingle}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className='mt-5'>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const SingleCardTalleres: React.FC<{ title: string, author: string, image: string, descripcion: string, descripcionCharla: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img src={props.image} className={`img-fluid ${styles.singleImg}`} alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingleTalleres}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className='mt-4'>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BigDoubleCard: React.FC<{ title: string, author: string, image: string, descripcion: string, descripcionCharla: string, image2: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '45%' }} />
            <img src={props.image2} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '45%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingleTalleres}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className='mt-3'>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
                <img src={props.image2} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ScheduleCard: React.FC<{ title: string, author: string, image: string, descripcion: string, descripcionCharla: string }> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle}>{props.title}</h3>
            </div>
            <div>
              <h5 className={styles.scheduleAuthor}>{props.author}</h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '80%' }} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className='row'>
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img src={props.image} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '50%' }} />
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

const Schedule: React.FC = () => {
  return (
    <div className='container'>
      <div className="row pt-4">
        <h1 className={styles.schedule}>CHARLAS</h1>
      </div>
      {/* <div className="row pt-5" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>08:00</h3>
          </div>
          <div className="row">
            <h3>08:30</h3>
          </div>
        </div>
        <FirstCard title="CHECK-IN" />
      </div> */}
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>08:30</h3>
          </div>
          <div className="row">
            <h3>09:00</h3>
          </div>
        </div>
        <FirstCard title="CHECK-IN" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>09:10</h3>
          </div>
          <div className="row pt-4">
            <h3>10:10</h3>
          </div>
        </div>
        <SingleCard title="FIND YOUR FUTURE" author="Irene M. Morgado" image={IreneMorgado} descripcion='Socióloga especializada en psicología social y comportamiento humano.' descripcionCharla='¿Es mejor trabajar en una empresa de producto o de servicios? ¿Qué tengo que tener en cuenta para dirigir mi carrera profesional hacia donde realmente quiero? ¿Por qué me contactan tantos recruiters pero sólo para puestos que no me interesan?' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>10:20</h3>
          </div>
          <div className="row">
            <h3>11:00</h3>
          </div>
        </div>
        <Card title="DESAYUNO" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>11:00</h3>
          </div>
          <div className="row pt-4">
            <h3>11:40</h3>
          </div>
        </div>

        <ScheduleCard title="DOCTOR, MI COMPONENTE DE REACT TIENE SQL" author="Javi Velasco" image={Javi} descripcion='Tech Lead de Vercel' descripcionCharla='Vengo a hablar de React, server components, streaming, suspense y server actions, contando un poco de dónde venimos.' />

        <ScheduleCard title="NO TODO EL CAMPO ES 'GREEN'. CÓMO LIDIAR CON LEGACY CODE" author="Concha Asensio" image={ConchaAsensio} descripcion='Desarrolladora de software | Women Techmaker Ambassador | Mentora en Step4ward' descripcionCharla='Mi objetivo es compartir algunos recursos que he ido aprendiendo trabajando en proyectos de este tipo, enfocados por un lado, a seguir añadiendo nuevas funcionalidades a nuestro código sin incrementar la complejidad, y por otro, al refactoring, que nos permite conseguir tener un código más sostenible en el tiempo.' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>11:45</h3>
          </div>
          <div className="row pt-4">
            <h3>12:25</h3>
          </div>
        </div>
        <ScheduleCard title="MICROSERVICIOS. CONTENEDORES. KUBERNETES TODO A LA VEZ!" author="Marisa Martín Serrano" image={MarisaMarting} descripcion='Profesional de la tecnología con más de 15 años de experiencia internacional' descripcionCharla='En esta charla dejamos un poquito de lado cuestiones filosóficas de arquitecturas y plataforma. para centrarnos en lo que de verdad importa en cuanto a microservicios. contenedores. Kubernetes & friends: Qué son? Qué me aportan? Qué tengo que hacer para aprovecharlos al máximo?' />
        <ScheduleCard title="FLUTTER + IA CON GEMINI" author="Alfredo Bautista" image={AlfredoBautista} descripcion='GDE de Flutter y Dart, Co-organizer @GDGMarbella & @flutterconfes' descripcionCharla='¿Has oído hablar de Flutter? El framework multiplataforma desarrollado por Google, con el que podrás desplegar tus aplicaciones en todas las plataformas desde un mismo código.¿Pero de la IA si, verdad? También conoceremos a Gemini, el LLM más avanzado de Google, y cómo podremos conectarlo a nuestras aplicaciones de Flutter de una forma muy muy sencilla. Después de esta charla ya no tendrás excusa para desarrollar tu próxima app.' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>12:30</h3>
          </div>
          <div className="row">
            <h3>13:15</h3>
          </div>
        </div>
        <Card title="TAPA" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>13:20</h3>
          </div>
          <div className="row pt-4">
            <h3>14:00</h3>
          </div>
        </div>
        <ScheduleCard title="SERVICE MESH: ¿Y ESO AHORA QUÉ ES?" author="Isra" image={Isra} descripcion='Trabajando en Red Hat haciendo cosas de observabilidad' descripcionCharla='¿Has escuchado hablar de Service Mesh? ¿Istio? ¿Maistra? Pero vamos a ver ¿qué es todo eso ahora? Vente a esta charla y te cuento qué son las mallas de servicios, para qué sirven y qué pueden hacer por ti.' />
        <ScheduleCard title="SPRING BOOT <3 TESTCONTAINERS" author="Iván López" image={Ivan} descripcion='Iván es desarrollador JVM con 20 años de experiencia. Actualmente trabaja en VMware.' descripcionCharla='En esta charla aprenderás qué es Testcontainers y cómo se integra con Spring Boot y los beneficios de utilizarlo en tus tests de integración.' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>14:00</h3>
          </div>
          <div className="row pt-4">
            <h3>14:40</h3>
          </div>
        </div>
        <ScheduleCard title="INTEGRACIÓN CON ÉXITO DE LA INTELIGENCIA ARTIFICIAL" author="Belén Feu" image={Belen} descripcion='Ingeniera de telecomunicaciones y consultora certificada con mas de 23 años de experiencia en tecnologías de la información y comunicaciones' descripcionCharla='Durante la presentación se expondrá la importancia de esta tecnología, exponiendo sus oportunidades y riesgos. Asimismo, se introducirán los factores claves para una integración exitosa de la Inteligencia Artificial, haciendo referencia a la utilización de código libre en el desarrollo de esta tecnología.' />
        <DoubleCard title="EPISODIO 1. EN EL QUE APRENDES BDD" author="Ana Cáceres y Ariane Zanardi" image={Ana} image2={Ariane} descripcion1='Ingenieras de Software centradas en el desarrollo de software y buenas prácticas.' descripcion2="" descripcionCharla='En esta charla sobre Behavior-Driven Development (BDD), exploraremos en qué consiste BDD. El objetivo principal es tratar los conceptos fundamentales y mostrar cómo se puede aplicar en proyectos reales, Inspirándonos en "FRIENDS", descubriremos cómo BDD puede estar presente para apoyarnos en la creación de software de calidad.' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>14:45</h3>
          </div>
          <div className="row">
            <h3>15:45</h3>
          </div>
        </div>
        <Card title="COMIDA" />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>16:00</h3>
          </div>
          <div className="row pt-4">
            <h3>16:40</h3>
          </div>
        </div>
        <ScheduleCard title="¿POR QUÉ LAS PÁGINAS WEB SON TAN DIFERENTES?" author="Patricia Vázquez" image={Patricia} descripcion='Soy Patricia Vazquez, software Engineer y apasionada de la cultura japonesa.' descripcionCharla='En esta charla exploraremos la estética y diseño detrás de las páginas web japonesas. Descubriremos cómo la rica cultura japonesa influye en cada aspecto del diseño web, desde la elección de colores y fuentes hasta la disposición de los elementos interactivos.' />
        <ScheduleCard title="¡COOKIEGEDDON! BYE A LAS COOKIES DE TERCEROS" author="Francisco Javier Barrena" image={FJavier} descripcion='Principal Engineer at Labster' descripcionCharla='Chrome ya ha empezado a bloquear las 3rd Party Cookies. A partir del Q1 de 2024, el 1% de todos los Chromes del mundo empezarán a bloquear cookies de terceros, y progresivamente se extenderá a toda la fucking internet.' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>16:45</h3>
          </div>
          <div className="row pt-4">
            <h3>17:25</h3>
          </div>
        </div>
        <ScheduleCard title="HAZ TUS CHATBOTS CON RASA OPENSOURCE (¡AHORA SIN LLMs!)" author="Ivan Valero" image={IvanValero} descripcion='Graduado en Ing, Informática por la UGR, Trabajo en Backend e investigo temas random' descripcionCharla='¿Te gustaría tener un Chatbot pero no te mola pagar por Azure ni Dialogflow? ¿No te gusta tirar de ChatGPT? ¿Estás leyendo esto con voz de Teletienda? Si es así, en esta charla hablaremos de Rasa, una solución de código abierto que puedes editar desde tu PC y desplegarlo ahí mismo. Crea tus preguntas y respuestas, dale acceso a Internet para buscar. Con YAML y Python puedes hacerlo fácilmente' />
        <ScheduleCard title="EL PM, ¿AMIGO O ENEMIGO?" author="Guiomar" image={Guiomar} descripcion='Trabajo en la frontera del PM y el PO pero sin simples etiquetas para acotar todo el trabajo que hago en equipo para desarrollar productos digitales.' descripcionCharla='Hablaremos de la figura del PM en el equipo del desarrollo y cómo entre todo se hace el producto' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>17:30</h3>
          </div>
          <div className="row pt-4">
            <h3>18:45</h3>
          </div>
        </div>
        <SingleCardJose title="SHIP. VALIDATE. ITERATE AND REPEAT" author="José Fernández" image={JoseFernandez} descripcion='Software Developer @Qualifyze Del @ASL pa toda la vida ❤️‍🔥' descripcionCharla='En esta charla cuento una experiencia personal en la que se ha montado un producto desde 0 a toda velocidad, todo ello siguiendo una filosofía de buenas prácticas'/>

      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row">
            <h3>19:00</h3>
          </div>
          <div className="row">
            <h3>20:00</h3>
          </div>
        </div>
        <Card title="NETWORKING" />
      </div>
      <div className="row pt-5">
        <h1 className={styles.schedule}>HORARIO - TALLERES</h1>
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'
          }}
        >
          <div className="row pb-5">
            <h3>11:00</h3>
          </div>
          <div className="row pt-4">
            <h3>12:25</h3>
          </div>
        </div>
        <BigDoubleCard title="ENTREVISTAS TÉCNICAS. PUR QUÉ?" author="Leonardo Poza y Carlos Alonso" image={Leonardo} image2={Carlos} descripcion='Burgalés, Feliz al cuadrado, Padre por duplicado, Afortunado, Dev, Tech Recruiter' descripcionCharla='Las entrevistas técnicas, a menudo similares a oposiciones, no permiten mostrar las verdaderas cualidades de los candidatos, Las empresas buscan habilidades difíciles de medir en el actual modelo, Resolver problemas triviales en una pizarra no revela habilidades prácticas, El proceso actual no beneficia a empresas ni candidatos, requiere un debate y mejora en el ámbito tecnológico,' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>13:20</h3>
          </div>
          <div className="row pt-4">
            <h3>14:40</h3>
          </div>
        </div>
        <SingleCardTalleres title="DESMITIFICANDO LAS BASES DE DATOS: EXPLAIN_INDICES_REFACTOR" author="Jose Manuel Rodriguez Morales" image={JoseManuel} descripcion='Soy ingeniero de software en Doctoralia y he trabajado en otras empresas como Veepee' descripcionCharla='Seguro que alguna vez hemos tenido que crear una tabla en base de datos. añadir una columna o revisar una query que iba lenta. En este taller podremos aprender cómo interpretar los explains y cómo crear índices con sentido que nos permitan unas queries más rápidas. También analizaremos cómo hacer refactors en nuestra base de datos: cómo renombrar columnas. hacer split de atributos...' />
      </div>
      <div className="row pt-2" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 d-flex min-vw-35 ${styles.scheduleDiv} flex-column container-fluid tamaño flex-column justify-content-between `}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(186,23,26,1) 0%, rgba(153,9,52,1) 100%)'

          }}
        >
          <div className="row pb-5">
            <h3>16:00</h3>
          </div>
          <div className="row pt-4">
            <h3>17:25</h3>
          </div>
        </div>
        <SingleCardTalleres title="INTRODUCCIÓN A SERVERLESS" author="Jorge Aguilar Martín" image={Jorge} descripcion='Amante del movimiento crafter y los test. Friki de AWS y Serverless' descripcionCharla='Veremos paso a paso como tener una api implementada en serverless sobre AWS. Desde los pasos con la consola de AWS hasta una manera de desplegar unicamente con un comando.' />
      </div>
    </div>


  );
};

export default Schedule;
