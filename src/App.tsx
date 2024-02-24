import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
    <div className="contenedor">
      <Navbar />
      <Header />
      <Info />
      <Schedule />
      <Team />
      <Footer/>
    </div>
    </>
  );
}

export default App;
