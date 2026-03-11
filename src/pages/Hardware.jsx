import "../assets/css/hardware.css";
import HardwareCarousel from "./HardwareCarousal";




function Hardware() {

    return (
        <>

            {/* PREMIUM HARDWARE UPGRADE SECTION */}
            <section className="hardware-section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
                <div className="container">

                    {/* SECTION HEADER */}
                    <div className="text-center mb-3 mb-md-5">
                        <h2 className="section-title text-white">Hardware Upgrade Services</h2>
                        <div className="section-divider"></div>
                        <p className="section-subtitle">
                            Professional upgrade solutions designed to maximize performance,
                            extend lifespan, and future-proof your system.
                        </p>
                    </div>

                    {/* CONTENT ROW */}
                    <div className="row">

                        <div className="col-lg-6 mb-4 text-center text-md-start">
                            <p className="hardware-text subtext">
                                At <strong className="text-white">Vertex Computech</strong>, we specialize in providing
                                top-notch hardware upgrade solutions to ensure your computer systems
                                stay up-to-date and run efficiently. Whether you are a professional,
                                gamer, or casual user, we enhance your computing experience with precision upgrades.
                            </p>

                            <h5 className="mt-4 fw-bold text-white">Why Upgrade Your Hardware?</h5>
                            <ul className="hardware-list subtext">
                                <li><i className="bi bi-check-circle-fill"></i> Enhanced Performance & Multitasking</li>
                                <li><i className="bi bi-check-circle-fill"></i> Extended Device Lifespan</li>
                                <li><i className="bi bi-check-circle-fill"></i> Cost-Effective Solution</li>
                                <li><i className="bi bi-check-circle-fill"></i> Compatibility with Modern Software</li>
                            </ul>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <h5 className="fw-bold text-white text-center text-md-start">Our Upgrade Expertise</h5>
                            <ul className="hardware-list subtext">
                                <li><i className="bi bi-memory"></i> Memory (RAM) Upgrade</li>
                                <li><i className="bi bi-device-ssd"></i> SSD / HDD Storage Upgrade</li>
                                <li><i className="bi bi-cpu-fill"></i> Processor (CPU) Upgrade</li>
                                <li><i className="bi bi-gpu-card"></i> Graphics Card (GPU) Upgrade</li>
                                <li><i className="bi bi-fan"></i> Cooling System Upgrade</li>
                                <li><i className="bi bi-lightning-charge-fill"></i> PSU Upgrade</li>
                                <li><i className="bi bi-motherboard"></i> Motherboard Replacement</li>
                                <li><i className="bi bi-keyboard-fill"></i> Peripheral Upgrades</li>
                            </ul>
                        </div>

                    </div>

                    

                </div>
            </section>

            <HardwareCarousel />

        </>
    )

}

export default Hardware;