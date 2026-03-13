import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/footer.css";
import footerLogo from "../assets/images/vertex-white.png";

function Footer() {

    const location = useLocation();

    const pageLabel =
        location.pathname === "/"
            ? "HOME"
            : location.pathname.replace("/", "").toUpperCase();

    const isActive = (path) =>
        location.pathname === path ? "active nav-link" : "nav-link";


    return (
        <footer className="footer py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
            <div className="container">
                <div className="row gy-4">

                    {/* About */}
                    <div className="col-lg-4 col-md-6">
                        <img
                            src={footerLogo}
                            alt="Vertex Computech"
                            className="footer-logo-img"
                        />
                        <p>
                            We provide professional laptop repair services including
                            motherboard repair, screen replacement, battery issues and
                            complete hardware solutions.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <h5>Services</h5>
                        <ul>
                            <li> Laptop Repair</li>
                            <li> Screen Replacement</li>
                            <li> Keyboard Repair</li>
                            <li> Battery Replacement</li>
                            <li> Software Installation</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <h5>Quick Links</h5>
                        <ul>
                            <li className="nav-item">
                                <Link to="/" className={isActive("/")}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Aboutus" className={isActive("/Aboutus")}>About us</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/services" className={isActive("/services")}>Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/desktopsupport" className={isActive("/desktopsupport")}>Support</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link to="/blogs" className={isActive("/blogs")}>Blogs</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link to="/contact" className={isActive("/contact")}>Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-4 col-md-6">
                        <h5>Contact Us</h5>

                        <p>
                            <i className="fa-solid fa-location-dot"></i> Pune, Maharashtra
                        </p>

                        <p>
                            {/* <i className="fa-solid fa-phone"></i> +91 8446772581 */}
                            <a href="tel:+918446772581" className="text-white text-decoration-none fw-normal"><i className="fas fa-mobile-alt me-2"></i>+91 8446772581</a>
                        </p>

                        <p>
                            {/* <i className="fa-solid fa-envelope"></i> vertexcomputech@gmail.com */}
                            <a href="mailto:info@vertexcomputech.com" className="text-white text-decoration-none fw-normal"><i className="fas fa-envelope me-2"></i>vertexcomputech@gmail.com</a>
                        </p>

                        <div className="footer-social">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Vertex Computech. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;