import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import sponsors from '../data/sponsors.json';
import { SponsorsGrid } from "./components/Sponsors/grid";
import { SponsorProps } from "./components/Sponsors";


function App() {
  return (
    <>
    <div className="contenedor">
      <Navbar />
      <Header />
      <Info />
      <Team/>
      <SponsorsGrid sponsors={sponsors as SponsorProps[]}/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
