import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import LaptopDesktop from "./pages/LaptopDesktop";
import Hardware from "./pages/Hardware";
import Datarecovery from "./pages/Datarecovery";
import ReviewsSection from "./pages/ReviewsSection";
import ClientSection from "./pages/ClientSection";
import DesktopSupport from "./pages/DesktopSupport";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  
  const location = useLocation();

  return (
    <>
    <div className="site-wrapper">
      <Header />
      <main className="page-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Aboutus" element={<AboutUs />} />
                <Route path="desktopsupport" element={<DesktopSupport />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            {location.pathname === "/" && <LaptopDesktop />}
            {location.pathname === "/" && <Hardware />}
            {location.pathname === "/" && <Datarecovery />}
            {location.pathname === "/" && <ReviewsSection />}
            {/* New pages start */}
            {/* {location.pathname === "/" && <DesktopSupport />} */}

      </main>
      <ClientSection />
      <Footer />
    </div>
    </>
  )
}

export default App;
