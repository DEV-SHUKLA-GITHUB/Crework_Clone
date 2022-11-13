import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Ready from "./components/ready/Ready";
import ForWhom from "./components/forWhom/ForWhom";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <div className="switch">
          <label>{theme === "light" ? "light Mode " : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ready" element={<Ready />} />
          <Route path="/forWhom" element={<ForWhom />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
