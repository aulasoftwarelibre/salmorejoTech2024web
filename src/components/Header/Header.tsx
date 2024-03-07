import { motion } from 'framer-motion';
import logoSalmorejo from "../../sprites/logosalmorejo.svg";
import styles from "./Header.module.css";
import calendar from "../../sprites/featherIcons/calendar.svg";

export default function Header() {


  function handleClick() {
    window.location.href = "https://www.eventbrite.es/e/entradas-salmorejotech-2024-787953087897";
  }

  return (
    <header className={styles.contenedor}>
      <div className="container-fluid">
        <img src={logoSalmorejo} className="img-fluid mt-5 pt-5" alt="logosalmorejo" />
      </div>
      <div className="container-fluid pt-4">
        <h1>
          <span style={{ fontWeight: 900, color: "#ffffff"}}>
            <motion.img 
              src={calendar} 
              alt="Networking" 
              style={{ width: "1em", marginBottom: "9px" }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
             <motion.span 
              style={{ display: "inline-block" }}
              animate={{
                y: [0, -10, 0], 
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              26
            </motion.span> DE ABRIL DE 2024
          </span>
        </h1>
        <h1>Vuelve el evento tecnológico que ha revolucionado la gastronomía</h1>
        <h1 style={{ color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>cordobesa</h1>
      </div>
      <div className="row mt-4 container-fluid">
        <div className="container-fluid">
          <button className={`${styles.botonInicio}`} type="button" onClick={handleClick}>ENTRADAS</button>
        </div>
      </div>
    </header>
  );
}
