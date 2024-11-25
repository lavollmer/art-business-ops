import "./App.css";
import Prints from "./assets/Prints";
import Stickers from "./assets/Stickers";
import OriginalArt from "./assets/OriginalArt";
import NewArrivals from "./assets/NewArrivals";

function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="font-bold">Art Studio</h1>
        </div>
        <Prints />
        <Stickers />
        <OriginalArt />
        <NewArrivals />
      </div>
    </>
  );
}

export default App;
