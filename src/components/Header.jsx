import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import vertexlogo from "../assets/images/vertex-white.png";
import "../assets/css/header.css";


function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const [hideSticky, setHideSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  const location = useLocation();

  const pageLabel =
    location.pathname === "/"
      ? "HOME"
      : location.pathname.replace("/", "").toUpperCase();

  const isActive = (path) =>
    location.pathname === path ? "active nav-link" : "nav-link";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // first time crossing 300px
      if (currentScroll > 300 && !hasTriggered) {
        setIsSticky(true);
        setHideSticky(false);
        setHasTriggered(true);
      }

      // after sticky active
      if (currentScroll > 300 && hasTriggered) {
        if (currentScroll > lastScrollY) {
          setHideSticky(false); // scroll down
        } else {
          setHideSticky(true); // scroll up
        }
      }

      // reset when going back up
      if (currentScroll <= 300) {
        setIsSticky(false);
        setHideSticky(false);
        setHasTriggered(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasTriggered]);

  // Close toggle button
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };


  return (

    <>
      {/* TOP BAR */}
      <div className="container-fluid header-bg py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <ul className="list-unstyled d-flex flex-wrap mb-0 fade-left">
                <li className="me-4">
                  <a href="tel:+918446772581" className="text-white text-decoration-none fw-normal"><i className="fas fa-mobile-alt me-2"></i>+91 8446772581</a>
                </li>
                <li>
                  <a href="mailto:info@vertexcomputech.com" className="text-white text-decoration-none fw-normal">
                    <i className="fas fa-envelope me-2"></i>vertexcomputech@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 d-none d-md-block text-center fade-right p-0">
              <p className="m-0 textSmall fw-normal"> <i className="fas fa-map me-2"></i>Paud Rd near Krishna Hospital, Kothrud Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg navbar-bg ${isSticky ? "sticky-nav" : ""} ${hideSticky ? "sticky-hide" : ""}`} style={{ marginBottom: "-1px" }}>

        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img
              src={vertexlogo}
              alt="Vertex Computech"
              height="40"
            />
            <span className="fs-6 fade-in ms-4">
              <span className="fw-light">|</span>
              <span className="fw-semibold ms-1 animated-label ">{pageLabel}</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-4" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link to="/" className={isActive("/")} onClick={closeNavbar}>Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/Aboutus" className={isActive("/Aboutus")} onClick={closeNavbar}>About us</Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className={isActive("/services")} onClick={closeNavbar}>Services</Link>
              </li>

              <li className="nav-item">
                <Link to="/desktopsupport" className={isActive("/desktopsupport")} onClick={closeNavbar}>Support</Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/blogs" className={isActive("/blogs")} onClick={closeNavbar}>Blogs</Link>
              </li> */}

              <li className="nav-item">
                <Link to="/contact" className={isActive("/contact")} onClick={closeNavbar}>Contact us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Header;
