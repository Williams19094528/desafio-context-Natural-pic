import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { PhotoProvider } from "./context/PhotoContext";
import "./App.css"; // Asegúrate de importar el archivo CSS

const App = () => {
  return (
    <PhotoProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </PhotoProvider>
  );
};

export default App;
