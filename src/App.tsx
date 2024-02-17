import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <>
    <div className="contenedor">
      <Navbar />
      <Header />
      <Info />
      <Schedule />
    </div>
    </>
  );
}

export default App;
