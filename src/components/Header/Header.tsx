import logoSalmorejo from "../../sprites/logosalmorejo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.contenedor}>
      <div className="container-fluid">
        <img src={logoSalmorejo} className="img-fluid mt-5 pt-5" alt="logosalmorejo" />
      </div>
      <div className="container-fluid pt-4">
        <h1>
          <span style={{ fontWeight: 900, color: "#ffffff"}}>
            <i className="fa-solid fa-calendar-days fa-bounce" style={{ color: "#ffffff" }}></i>{" "}
            <i className="fa-sharp fa-regular fa-2 fa-bounce" style={{ color: "#ffffff" }}></i>
            <i className="fa-sharp fa-regular fa-5 fa-bounce" style={{ color: "#ffffff" }}></i>{" "}
            DE ABRIL DE 2024
          </span>
        </h1>
        <h1>Vuelve el evento tecnológico que ha revolucionado la gastronomía</h1>
        <h1 style={{ color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>cordobesa</h1>
      </div>
      <div className="row mt-4 container-fluid">
        <div className="container-fluid">
          <button type="button">ENTRADAS</button>
        </div>
      </div>
      
    </header>
  );
}
