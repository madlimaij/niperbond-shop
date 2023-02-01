import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPath from "./routes/NavigationPath";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {NavigationPath.map((el) => (
              <Route path={el.path} element={<el.component />} key={el.path} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
