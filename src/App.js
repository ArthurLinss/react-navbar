import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.min.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
