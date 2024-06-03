import "./App.css";
import Home from "./assets/Home.jsx";
import Header from "./assets/Header.jsx";
import Footer from "./assets/Footer.jsx";
import Navigation from "./assets/Navigation.jsx";

function App() {

  return (
    <>
      <div>
        <Navigation />
        <Header />
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App;
