import tomato from "../../sprites/tomato.png";
import "./Audiense.css"; // Importa tu archivo CSS donde definirás estilos y animaciones


function handleClick() {
    window.location.href = "https://es.audiense.com/jobs/careers";
  }

export default function Audiense() {
    return (
        <>
        <div className="pt-5">
        <div className="tomato-container d-sm-none d-block ">
                <img src={tomato} className="tomato" alt="Tomato" />
            </div>
            <h2>¿Te encuentras en búsqueda activa de empleo?</h2>
            <h5>
                Audiense está contratando. Haz clic en el siguiente botón para obtener más
                información.
            </h5>
            <div className="container-fluid">
          <button className="botonAudiense" type="button" onClick={handleClick} >AUDIENSE</button>
        </div>
        </div>
            
            
        </>
    );
}
