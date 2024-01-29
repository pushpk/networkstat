import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FixedMenuLayout from "./FixedMenuLayout/FixedMenuLayout";
import Fileshare from "./fileshare/fileshare";
import Events from "./events/events";
import Reports from "./reports/reports";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FixedMenuLayout />} />
          <Route path="home" element={<FixedMenuLayout />} />
          <Route path="matters" element={<FixedMenuLayout />} />
          <Route path="fileshares" element={<Fileshare />} />
          <Route path="events" element={<Events />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
