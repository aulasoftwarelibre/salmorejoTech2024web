// Team.tsx

import React from 'react';
import styles from './Team.module.css';
import img from '../../sprites/equipo/1.jpeg';
import img2 from '../../sprites/equipo/belen.jpeg';

const Team: React.FC = () => {
  return (
    <div className='container pt-5'>
      <h1 className={styles.schedule}>EQUIPO</h1>
      <div className="row">
    <div className={`${styles.card}`}>
      <div className={`${styles.fireFlame}`}></div>
      <div className={`${styles.content}`}>
        <img src={img} alt="Avatar" className="img-fluid"/>
        <h5>Arturo Vicente Pérez</h5>
        <p>Amante de los cacharros y del cacharreo</p>
      </div>
    </div>
    <div className={`${styles.card}`}>
      <div className={`${styles.fireFlame}`}></div>
      <div className={`${styles.content}`}>
        <img src={img} alt="Avatar" className="img-fluid"/>
        <h5>Arturo Vicente Pérez</h5>
        <p>Amante de los cacharros y del cacharreo</p>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Team;
