import "./App.css";
import Prints from "./assets/Prints";
import Stickers from "./assets/Stickers";
import OriginalArt from "./assets/OriginalArt";
import NewArrivals from "./assets/NewArrivals";
import Navigation from "./assets/Navigation";

function App() {
  return (
    <>
      <div className="flex-col">
        <div>
          <h1 className="font-bold">Art Studio</h1>
        </div>
        <div className="flex-row">
          <Navigation />
          <Prints />
          <Stickers />
          <OriginalArt />
          <NewArrivals />
        </div>
      </div>
    </>
  );
}

export default App;
