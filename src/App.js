import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";

import ScrollToTop from "./ScrollToTop";
import WaterDropCursor from "./WaterDropCursor";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "react-bootstrap";
import Home from "./pages/home";
import ContactUs from "./pages/contact-us/ContactUs";
import Faq from "./pages/faq/Faq.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";

// import Loader from "./Loader.jsx";

library.add(fas);
const App = () => {
  return (
    <>
      <BrowserRouter>
        <WaterDropCursor />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="container text-center mt-5">
                <div className="text-danger">Page Not Found</div>
                <Button
                  className="bg-main"
                  onClick={() => (window.location = "/")}
                >
                  Back TO Home
                </Button>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
