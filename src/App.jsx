import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rider from "./pages/Rider";
import Driver from "./pages/Driver";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/rider">Rider</Link>
        <Link to="/driver">Driver</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;