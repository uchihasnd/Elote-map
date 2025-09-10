import "./App.css";
import PersistentDrawerLeft from "./components/Drawer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <div className="font page-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PersistentDrawerLeft />
                <Map />
              </>
            }
          />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
