import React from 'react';
import styles from './Sponsor.module.css';
import universidad from '../../sprites/sponsors/universidad.jpg';
import consejosocial from '../../sprites/sponsors/consejosocial.jpg';
import eprinsa from '../../sprites/sponsors/eprinsa.jpg'
import rabanales21 from '../../sprites/sponsors/rabanales21.jpg'
import audiense from '../../sprites/sponsors/audiense.svg'
import epsc from '../../sprites/sponsors/epsc.jpg'
import freepik from '../../sprites/sponsors/freepik.jpg'

import genially from '../../sprites/sponsors/genially.jpg'
import inditex from '../../sprites/sponsors/inditextech.jpg'
{/*
import vant from '../../sprites/sponsors/vant.svg'
import sngular from '../../sprites/sponsors/sngular.png'
import nttdata from '../../sprites/sponsors/descarga__2_-removebg-preview.png'
import estrella from '../../sprites/sponsors/png-transparent-estrella-galicia-escudo-color-ial-hdjr-hd-logo-removebg-preview.png'
import codely from '../../sprites/sponsors/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0-removebg-preview.png'
import omniaccess from '../../sprites/sponsors/Untitled-design-14-removebg-preview.png'
import atmira from '../../sprites/sponsors/atmira.png'
import manfred from '../../sprites/sponsors/logo_manfred-removebg-preview.png'
*/}

const Sponsor: React.FC = () => {

    return (
        <div className='container' id='Patrocinadores'>
            <h1 className={`${styles.schedule} pt-5`}>PATROCINADORES</h1>
            <div className="row pt-4">
            <div className="col-sm-6 col-md-3">
                <a href="https://www.uco.es/">
                    <img className={styles.icon}  src={universidad} width={250} style={{maxHeight: '200px'}} />
                </a>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href="http://www.uco.es/organizacion/consejosocial/index.php/es/">
                    <img className={styles.icon} src={consejosocial} width={160} style={{maxHeight: '200px'}} />
                    </a>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href="https://www.eprinsa.es/">
                    <img className={styles.icon} src={eprinsa} width={160} style={{maxHeight: '200px'}} />
                    </a>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href="https://ptcordoba.es/">
                    <img className={styles.icon} src={rabanales21} width={160} style={{maxHeight: '200px'}} />
                    </a>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-sm">
                    <a href="https://es.audiense.com/">
                    <img className={`${styles.icon} ${styles.audiense}`} src={audiense} width={200} />
                    </a>
                </div>
                <div className="col-sm">
                    <a href="https://www.uco.es/eps/es/">
                    <img className={`mt-3 ${styles.icon}`} src={epsc} width={100} />
                    </a>
                </div>
                <div className="col-sm">
                    <a href="https://www.freepik.es/">
                    <img  className={`mt-3 ${styles.icon}`} src={freepik} width={180} />
                    </a>
                </div>
                <div className="col-sm">
                    <a href="https://genial.ly/es/">
                    <img className={styles.icon} style={{marginTop: '40px'}} src={genially} width={180} />
                    </a>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-sm">
                    <a href="https://www.inditex.com/itxcomweb/es/home">
                    <img className={styles.icon} src={inditex} width={250} />
                    </a>
                </div>
            </div>
                {/*
                <div className="col-sm">
                    <img className={styles.icon} style={{marginTop: '100px'}} src={vant} width={150} />
                </div>
                <div className="col-sm">
                    <img className={styles.icon}  style={{marginTop: '70px'}}  src={sngular} width={180} />
                </div>
                <div className="col-sm">
                    <img className={styles.icon}  style={{marginTop: '40px'}}  src={nttdata} width={250} />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-sm">
                    <img className={styles.icon} src={estrella} width={180} />
                </div>
                <div className="col-sm">
                    <img className={styles.icon}  style={{marginTop: '30px'}} src={codely} width={200} />
                </div>
                <div className="col-sm">
                    <img className={styles.icon}   style={{marginTop: '-40px'}} src={omniaccess} width={200} />
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-sm">
                    <img className={styles.icon} src={atmira} width={250} />
                </div>
                <div className="col-sm">
                    <img className={styles.icon}  style={{marginTop: '0px'}} src={manfred} width={250} />
                </div>
                
            </div>
    */}
            
        </div>
    );
};

export default Sponsor;