import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Sponsor from "./components/Sponsors/Sponsor";

function App() {
  return (
    <>
    <div className="contenedor">
      <Navbar />
      <Header />
      <Info />
      <Team/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
