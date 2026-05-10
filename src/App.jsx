import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Country from "./Pages/Country/Country";
import Subscription from "./Pages/Subscriptionpage";

import Navbar from "./Components/Navbar";

function Layout() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      <main className="pt-14">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "14px",
            background: "#fff",
            color: "#1a3c34",
            fontWeight: "600",
            padding: "14px 18px",
          },
          success: {
            iconTheme: {
              primary: "#22a05a",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#e8472a",
              secondary: "#fff",
            },
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/country/:countryName" element={<Country />} />{" "}
          <Route path="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </Router>
  );
}
