import "./App.css";
import Prints from "./assets/Prints";
import Stickers from "./assets/Stickers";
import OriginalArt from "./assets/OriginalArt";
import NewArrivals from "./assets/NewArrivals";

function App() {
  return (
    <>
      <div>
        <h1>Original Art</h1>
        <Prints />
        <Stickers />
        <OriginalArt />
        <NewArrivals />
      </div>
    </>
  );
}

export default App;