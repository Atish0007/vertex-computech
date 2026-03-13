import React from "react";
import "../assets/css/aboutus.css";

function Aboutus() {
    return (
        <section className="aboutVertex py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
            <div className="container">

                {/* Title */}
                <div className="text-center mb-5">
                    <h2 className="aboutTitle">About <span className="HeadingTextGlow">Vertex Computech</span></h2>
                    <div className="section-divider"></div>
                    <p className="aboutSubtitle">
                        Trusted destination for professional Laptop and MacBook repair services
                    </p>
                </div>

                <div className="row align-items-center g-3 g-md-5">

                    {/* Left Content */}
                    <div className="col-lg-6">

                        <p className="aboutText">
                            <span className="fs-4 fw-bold HeadingTextGlow">V</span>ertex Computech is a professional and trusted destination for advanced
                            Laptop and MacBook repair services. With a strong commitment to quality,
                            reliability, and customer satisfaction, we provide expert solutions for
                            all types of laptop and computer issues.
                        </p>

                        <p className="aboutText">
                            Our mission is to deliver fast, transparent, and affordable technology
                            services so that individuals, students, and businesses can keep their
                            devices running smoothly without stress.
                        </p>

                        <p className="aboutText">
                            Every device that comes to Vertex Computech is carefully diagnosed using
                            modern tools and handled by skilled technicians with deep technical knowledge.
                        </p>

                        {/* Stats */}
                        <div className="row statsRow mt-4">

                            <div className="col-4">
                                <div className="statCard">
                                    <i className="bi bi-laptop"></i>
                                    <h3>7500+</h3>
                                    <p>Devices Repaired</p>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="statCard">
                                    <i className="bi bi-people"></i>
                                    <h3>7200+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="statCard">
                                    <i className="bi bi-tools"></i>
                                    <h3>9+</h3>
                                    <p>Years Experience</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Expertise */}
                    <div className="col-lg-6">

                        <div className="expertiseGrid">

                            <div className="expertCard">
                                <i className="bi bi-cpu"></i>
                                Laptop Repair & Diagnostics
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-laptop"></i>
                                MacBook Repair
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-motherboard"></i>
                                Motherboard Level Repair
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-memory"></i>
                                SSD & RAM Upgrades
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-windows"></i>
                                Windows / macOS Installation
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-database"></i>
                                Data Backup & Recovery
                            </div>

                            <div className="expertCard">
                                <i className="bi bi-speedometer2"></i>
                                System Optimization & Cleaning
                            </div>

                        </div>

                    </div>

                </div>


                {/* Why Choose */}
                <div className="whyChoose mt-5">

                    <h3 className="whyTitle text-center mb-4">
                        Why Choose Vertex Computech
                        <div className="section-divider"></div>
                    </h3>

                    <div className="row g-4 justify-content-center">

                        <div className="col-md-4 col-6">
                            <div className="whyCard">
                                <i className="bi bi-search"></i>
                                Free Device Checking
                            </div>
                        </div>

                        <div className="col-md-4 col-6">
                            <div className="whyCard">
                                <i className="bi bi-person-check"></i>
                                Skilled Technicians
                            </div>
                        </div>

                        <div className="col-md-4 col-6">
                            <div className="whyCard">
                                <i className="bi bi-lightning"></i>
                                Fast Repair Service
                            </div>
                        </div>

                        <div className="col-md-4 col-6">
                            <div className="whyCard">
                                <i className="bi bi-cash-coin"></i>
                                Transparent Pricing
                            </div>
                        </div>

                        <div className="col-md-4 col-6">
                            <div className="whyCard">
                                <i className="bi bi-shield-check"></i>
                                Quality Parts
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Aboutus;