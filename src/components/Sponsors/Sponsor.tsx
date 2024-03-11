import styles from './Sponsor.module.css'
import rabanales21 from '../../sprites/sponsors/rabanales21.jpg'
import consejosocial from '../../sprites/sponsors/consejosocial.jpg'
import eprinsa from '../../sprites/sponsors/eprinsa.jpg'
import universidad from '../../sprites/sponsors/universidad.jpg'

const Sponsor: React.FC = () => {
    return (
        <div className='container' id='Patrocinadores'>
            <h1 className={`${styles.schedule} pt-5`}>PATROCINADORES</h1>
            <div className="row pt-4">
                <div className="col-sm">
                    <img src={universidad} width={250} />
                </div>
                <div className="col-sm">
                    <img src={consejosocial} width={150} />
                </div>
                <div className="col-sm">
                    <img src={rabanales21} width={180} />
                </div>
                <div className="col-sm">
                    <img src={eprinsa} width={150} />
                </div>

            </div>
        </div>
    )
}

export default Sponsor;