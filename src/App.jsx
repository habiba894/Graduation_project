import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Country from "./Pages/Country/Country";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/country" element={<Country/>} />
      </Routes>
    </Router>
  );
}