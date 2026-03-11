import React, { useState } from "react";
import "../assets/css/desktopSupport.css";

import img1 from "../assets/images/desktopsupport/1.jpg";
import img2 from "../assets/images/desktopsupport/2.jpg";
import img3 from "../assets/images/desktopsupport/3.jpg";
import img4 from "../assets/images/desktopsupport/4.jpg";
import img5 from "../assets/images/desktopsupport/5.jpg";
import img6 from "../assets/images/desktopsupport/6.jpg";
import img7 from "../assets/images/desktopsupport/7.jpg";
import img8 from "../assets/images/desktopsupport/8.jpg";
import img9 from "../assets/images/desktopsupport/9.jpg";
import img10 from "../assets/images/desktopsupport/10.jpg";
import img11 from "../assets/images/desktopsupport/11.jpeg";

function DesktopSupport() {

    const errors = [

        {
            title: "Windows Errors",
            img: img1,
            desc: "Missing or corrupted DLL files prevent applications from starting properly."
        },

        {
            title: "Blue Screen of Death",
            img: img2,
            desc: "A critical Windows crash that shuts down the system to prevent damage."
        },

        {
            title: "Disk Full",
            img: img3,
            desc: "Occurs when the system drive runs out of storage space."
        },

        {
            title: "Driver Errors",
            img: img4,
            desc: "Device drivers missing or outdated causing hardware malfunction."
        },

        {
            title: "Access Denied",
            img: img5,
            desc: "User permission restrictions preventing access to files or folders."
        },

        {
            title: "Windows Explorer Error",
            img: img6,
            desc: "File manager crashes caused by corrupted system files."
        },

        {
            title: "Unreadable File",
            img: img7,
            desc: "Corrupted files or failing storage devices causing read errors."
        },

        {
            title: "Application Not Responding",
            img: img8,
            desc: "Software freezing due to memory or system resource issues."
        },

        {
            title: "Windows Update Failed",
            img: img9,
            desc: "Occurs when Windows fails to install important updates."
        },

        {
            title: "Activation Error",
            img: img10,
            desc: "Windows activation problems due to license or hardware changes."
        },

        {
            title: "BIOS Errors",
            img: img11,
            desc: "Startup errors preventing the system from booting properly."
        }

    ]


    const [index, setIndex] = useState(null)
    const [zoom, setZoom] = useState(false)

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % errors.length)
    }

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + errors.length) % errors.length)
    }


    return (
        <>
            <section className="desktop-support py-4 py-md-3 ps-2 ps-md-0 pe-2 pe-md-0">
                <div className="container">

                    {/* Heading */}
                    <div className="ds-header">
                        <h1>Enterprise-Grade <span className="HeadingTextGlow">Desktop Support</span> & IT Solutions</h1>
                        <div class="section-divider"></div>
                        <p>
                            Your workstation is the foundation of your productivity. At
                            Vertex Computech, we go beyond basic fixes to empower your entire
                            digital infrastructure. Guided by a qualified computer engineer,
                            we deliver high-reliability, technically advanced IT support
                            across Kothrud and Pune.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="row ds-services">

                        <div className="col-lg-6 col-md-6">
                            <div className="ds-card">
                                <div className="d-flex align-items-center gap-4 gap-md-2">
                                    <i className="fa-solid fa-desktop"></i>
                                    <h4 className="fw-bold">System Architecture & OS Configuration</h4>
                                </div>
                                <p>
                                    Precision installation and optimization of Windows and macOS
                                    environments for peak stability and performance.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="ds-card">
                                <div className="d-flex align-items-center gap-4 gap-md-2">
                                    <i className="fa-solid fa-bug"></i>
                                    <h4 className="fw-bold">Advanced Error Diagnostics</h4>
                                </div>
                                <p>
                                    Surgical resolution of complex software bugs and critical
                                    system errors to eliminate recurring crashes.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="ds-card">
                                <div className="d-flex align-items-center gap-4 gap-md-2">
                                    <i className="fa-solid fa-wifi"></i>
                                    <h4 className="fw-bold">High-Speed Remote Assistance</h4>
                                </div>
                                <p>
                                    Instant technical intervention using secure remote tools to
                                    resolve issues regardless of your location.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="ds-card">
                                <div className="d-flex align-items-center gap-4 gap-md-2">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <h4 className="fw-bold">Malware Defense & Data Hardening</h4>
                                </div>
                                <p>
                                    Professional antivirus deployment and comprehensive security
                                    auditing to protect your sensitive digital assets.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-3">
                            <div className="ds-card">
                                <div className="d-flex align-items-center gap-4 gap-md-2">
                                    <i className="fa-solid fa-print"></i>
                                    <h4 className="fw-bold">Peripheral Networking</h4>
                                </div>
                                <p>
                                    Seamless integration and maintenance of printers, scanners
                                    and office network hardware for uninterrupted workflow.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Advantage Section */}
                    <div className="ds-advantage">

                        <h2>The <span className="HeadingTextGlow">Vertex</span> Advantage : Technical Excellence</h2>
                        <div class="section-divider mb-4"></div>

                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="adv-card">
                                    <h5 className="fw-bold">Engineering-First Approach</h5>
                                    <p>
                                        Every issue is analyzed with deep technical expertise,
                                        ensuring permanent solutions rather than temporary fixes.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="adv-card">
                                    <h5 className="fw-bold">Minimized Downtime</h5>
                                    <p>
                                        Our fast-track repair methodology ensures your work
                                        continues without long interruptions.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="adv-card">
                                    <h5 className="fw-bold">Customized IT Strategies</h5>
                                    <p>
                                        Flexible and cost-effective support plans tailored for
                                        professionals and small businesses.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Windows Errors */}
            <section className="windows-errors py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

                <div className="container">

                    <div className="error-header">

                        <h2>Common <span className="HeadingTextGlow">Windows Errors</span> We Fix</h2>
                            <div class="section-divider"></div>
                        <p>
                            Our engineers diagnose and resolve the most frequent Windows system
                            errors that interrupt your productivity.
                        </p>

                    </div>

                    <div className="error-grid">

                        {errors.map((item, i) => (
                            <div key={i} className="error-card" onClick={() => setIndex(i)}>

                                <img src={item.img} alt={item.title} />

                                <span>{item.title}</span>

                                <p>{item.desc}</p>

                            </div>
                        ))}

                    </div>

                </div>

                {/* LIGHTBOX */}

                {index !== null && (

                    <div className="lightbox">

                        <button className="close" onClick={() => setIndex(null)}>✕</button>

                        <button className="prev" onClick={prevImage}>‹</button>

                        <img
                            src={errors[index].img}
                            className={zoom ? "zoom" : ""}
                            onClick={() => setZoom(!zoom)}
                            alt=""
                        />

                        <button className="next" onClick={nextImage}>›</button>

                    </div>

                )}

            </section>


        </>
    );
}

export default DesktopSupport;