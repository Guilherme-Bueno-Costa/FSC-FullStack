// Styles

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/pages/home/Home";

// Components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
