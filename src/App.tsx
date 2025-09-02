import "./App.css";
import TemporaryDrawer from "./components/Drawer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="font page-container">
        <Navbar />
        <TemporaryDrawer />
        <Map />
      </div>
    </>
  );
}

export default App;
