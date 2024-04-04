  import React, { useState } from 'react';
  //import StallMan from "../../sprites/stallmanrichard.png";
  import IreneMorgado from "../../sprites/ponentes/IreneM.Morgado.png";
  import ConchaAsensio from "../../sprites/ponentes/concha.png";
  import JoseFernandez from "../../sprites/ponentes/jose.png";
  import MarisaMarting from "../../sprites/ponentes/marisamartin.png";
  import AlfredoBautista from "../../sprites/ponentes/alfredobautista.png";
  import Isra from "../../sprites/ponentes/isra.png";
  import Ivan from "../../sprites/ponentes/ivan.png";
  import Ana from "../../sprites/ponentes/ana.png";
  import Ariane from "../../sprites/ponentes/ariane.png";
  import styles from './Schedule.module.css';

  const Card: React.FC<{ title: string}> = (props) => {
    return (
      <>
        <div className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmpty}`}>
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <h3 className={`${styles.scheduleTitle} ${styles.center}`}>{props.title}</h3>
            </div>
          </div>
        </div>
      </>
    );
  };

  const DoubleCard: React.FC<{ title: string, author: string, image: string, image2: string }> = (props) => {
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
            <div className="col-lg-5 col-md-12 py-lg-4">
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet semper massa. Vivamus ullamcorper eget massa at maximus. Nam ullamcorper mauris ac diam accumsan, ac venenatis risus ullamcorper. Sed iaculis ut eros non iaculis. Cras tincidunt dolor sit amet neque blandit mollis. Phasellus dictum, tortor eu lobortis rutrum, felis arcu fermentum leo, sed tempor elit arcu nec velit. Sed lobortis, turpis a tincidunt ultrices, ipsum turpis varius purus, sit amet placerat magna nisi id ligula. Phasellus libero justo, bibendum fringilla bibendum ut, fermentum et diam. Duis volutpat risus eget quam viverra, at eleifend enim luctus.</p>
                  <p>Donec ultrices ornare velit. Etiam eu orci consequat, consectetur risus id, pulvinar ligula. Nulla nibh lectus, condimentum vel odio quis, varius hendrerit magna. Aliquam eget sodales nibh. In tempor massa in est molestie, vitae pulvinar felis dapibus. Nam odio metus, euismod vitae euismod nec, commodo vitae felis. Nulla convallis odio vitae semper elementum. In porttitor orci in ligula rhoncus, a malesuada eros iaculis. Sed eu quam in ligula pharetra malesuada non sit amet ipsum. Quisque congue dui vitae sodales facilisis. Donec accumsan quam vel vestibulum sagittis. Aliquam enim sapien, laoreet sed arcu sit amet, facilisis feugiat tortor. Nunc mattis lorem id elit viverra aliquam.</p>
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

  const SingleCard: React.FC<{ title: string, author: string, image: string }> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
      <>
        <div
          className={`col-10 container-fluid d-flex ${styles.cardEmpty}`}
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
            <div className="col-lg-5 col-md-12 py-lg-4">
              <img src={props.image} className={`img-fluid ${styles.singleImg}`} alt="..." style={{ maxHeight: '100%'}} />
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet semper massa. Vivamus ullamcorper eget massa at maximus. Nam ullamcorper mauris ac diam accumsan, ac venenatis risus ullamcorper. Sed iaculis ut eros non iaculis. Cras tincidunt dolor sit amet neque blandit mollis. Phasellus dictum, tortor eu lobortis rutrum, felis arcu fermentum leo, sed tempor elit arcu nec velit. Sed lobortis, turpis a tincidunt ultrices, ipsum turpis varius purus, sit amet placerat magna nisi id ligula. Phasellus libero justo, bibendum fringilla bibendum ut, fermentum et diam. Duis volutpat risus eget quam viverra, at eleifend enim luctus.</p>
                  <p>Donec ultrices ornare velit. Etiam eu orci consequat, consectetur risus id, pulvinar ligula. Nulla nibh lectus, condimentum vel odio quis, varius hendrerit magna. Aliquam eget sodales nibh. In tempor massa in est molestie, vitae pulvinar felis dapibus. Nam odio metus, euismod vitae euismod nec, commodo vitae felis. Nulla convallis odio vitae semper elementum. In porttitor orci in ligula rhoncus, a malesuada eros iaculis. Sed eu quam in ligula pharetra malesuada non sit amet ipsum. Quisque congue dui vitae sodales facilisis. Donec accumsan quam vel vestibulum sagittis. Aliquam enim sapien, laoreet sed arcu sit amet, facilisis feugiat tortor. Nunc mattis lorem id elit viverra aliquam.</p>
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

  const ScheduleCard: React.FC<{ title: string, author: string, image: string }> = (props) => {
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
            <div className="col-lg-5 col-md-12 py-lg-4">
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet semper massa. Vivamus ullamcorper eget massa at maximus. Nam ullamcorper mauris ac diam accumsan, ac venenatis risus ullamcorper. Sed iaculis ut eros non iaculis. Cras tincidunt dolor sit amet neque blandit mollis. Phasellus dictum, tortor eu lobortis rutrum, felis arcu fermentum leo, sed tempor elit arcu nec velit. Sed lobortis, turpis a tincidunt ultrices, ipsum turpis varius purus, sit amet placerat magna nisi id ligula. Phasellus libero justo, bibendum fringilla bibendum ut, fermentum et diam. Duis volutpat risus eget quam viverra, at eleifend enim luctus.</p>
                  <p>Donec ultrices ornare velit. Etiam eu orci consequat, consectetur risus id, pulvinar ligula. Nulla nibh lectus, condimentum vel odio quis, varius hendrerit magna. Aliquam eget sodales nibh. In tempor massa in est molestie, vitae pulvinar felis dapibus. Nam odio metus, euismod vitae euismod nec, commodo vitae felis. Nulla convallis odio vitae semper elementum. In porttitor orci in ligula rhoncus, a malesuada eros iaculis. Sed eu quam in ligula pharetra malesuada non sit amet ipsum. Quisque congue dui vitae sodales facilisis. Donec accumsan quam vel vestibulum sagittis. Aliquam enim sapien, laoreet sed arcu sit amet, facilisis feugiat tortor. Nunc mattis lorem id elit viverra aliquam.</p>
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
          <h1 className={styles.schedule}>HORARIO</h1>
        </div>
        <div className="row pt-5" style={{ alignItems: 'stretch' }}>
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
          <Card title="CHECK-IN"/>
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
              <h3>08:45</h3>
            </div>
            <div className="row">
              <h3>09:10</h3>
            </div>
          </div>
          <Card title="ACTO DE BIENVENIDA"/>
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
          <SingleCard title="FIND YOUR FUTURE" author="Irene M. Morgado" image={IreneMorgado}/>
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
          <Card title="DESAYUNO"/>
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
          <ScheduleCard title="SHIP. VALIDATE. ITERATE AND REPEAT" author="José Fernández" image={JoseFernandez}/>
          <ScheduleCard title="NO TODO EL CAMPO ES 'GREEN'. CÓMO LIDIAR CON LEGACY CODE" author="Concha Asensio" image={ConchaAsensio}/>
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
          <ScheduleCard title="MICROSERVICIOS. CONTENEDORES. KUBERNETES TODO A LA VEZ!" author="Marisa Martín Serrano" image={MarisaMarting}/>
          <ScheduleCard title="FLUTTER + IA CON GEMINI" author="Alfredo Bautista" image={AlfredoBautista}/>
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
          <Card title="TAPA"/>
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
          <ScheduleCard title="SERVICE MESH: ¿Y ESO AHORA QUÉ ES?" author="Isra" image={Isra}/>
          <ScheduleCard title="SPRING BOOT <3 TESTCONTAINERS" author="Iván López" image={Ivan}/>
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
          <ScheduleCard title="SERVICE MESH: ¿Y ESO AHORA QUÉ ES?" author="Belén Feu" image=""/>
          <DoubleCard title="EPISODIO 1. EN EL QUE APRENDES BBDD" author="Ana Cáceres y Arrianne" image={Ana} image2={Ariane}/>
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
          <Card title="COMIDA"/>
        </div>

      </div>
    );
  };

  export default Schedule;
