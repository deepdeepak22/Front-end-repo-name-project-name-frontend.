import "./App.css";
import { Button } from "./Button";
import { Content } from "./Content";
import { Navbar } from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Button />
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Improve performance & process time</h1>
        <p className="sub-heading">
          Better organize your warehouse with the smart double entry inventory
          system.
        </p>
      </div>
      <div className="footer-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Vp5xqQOWLzE?si=sEEfTzXO2P0lES5_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      
      </div>
    </div>
  );
}
export default App;
