import React from 'react';
import StallMan from "../../sprites/stallmanrichard.png";
import styles from './Schedule.module.css';

const Schedule: React.FC = () => {
  return (
    <div className='container'>
      <div className="row pt-4">
        <h1 className={styles.scheduleTitle}>HORARIO</h1>
      </div>
      <div className="row pt-5" style={{ alignItems: 'stretch' }}>
        <div
          className={`col-1 container-fluid tamaño flex-column justify-content-between`}
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(246,69,26,1) 0%, rgba(206,41,96,1) 100%)'
          }}
        >
          <div className="row pb-5">
            <h3>10:00</h3>
          </div>
          <div className="row pt-4">
            <h3>12:00</h3>
          </div>
        </div>
        <div
          className={`col-5 container-fluid tamaño ${styles.fondo}`}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-10 py-4">
              <div className="row">
                <h3>LAS MUJERES EN LA INFORMÁTICA
                </h3>
              </div>
              <div>
                <h5>Richard Stallman</h5>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 py-lg-4">
              <img src={StallMan} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
        <div
          className="col-5 container-fluid d-flex"
          style={{
            borderRadius: '10px',
            background: 'linear-gradient(90deg, rgba(246,69,26,1) 0%, rgba(206,41,96,1) 100%)'
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 py-4">
              <div className="row">
                <h3>LAS MUJERES EN LA INFORMÁTICA
                </h3>
              </div>
              <div>
                <h5>Richard Stallman</h5>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 py-lg-4">
              <img src={StallMan} className="img-fluid" alt="..." style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
