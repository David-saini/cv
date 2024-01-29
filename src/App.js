import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Header from "./components/Header";
import './App.css';
import './assets/css/root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Tools from "./components/Tools";
import Help from "./components/Help";
import Resume from "./components/Resume";
import JobApplySec from "./components/JobApplySec";
import Success from "./components/Success";
import Faq from "./components/Faq";
import Client from "./components/Client";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="overflow-hidden">
      <Header />
      <Theme />
      <Tools />
      <Help />
      <Resume />
      <JobApplySec />
      <Client />
      <Faq />
      <Success />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
