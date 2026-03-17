import "../assets/css/laptopDesktop.css";
import macbookImg from "../assets/images/laptopDesktop/macbook.jpg"
import hardwareImg from "../assets/images/laptopDesktop/hardware.jpg"

function LaptopDesktop() {


    return (
        <>

            {/* MACBOOK SPECIALIZATION */}
            <section className="ld-mac-section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
                <div className="container">
                    <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2 order-2">
                                <h2 className="ld-title mb-3 mt-4 mt-md-0 text-center text-md-start">
                                    Expert MacBook Repair Services – Fast, Reliable & Affordable
                                </h2>

                                <p className="ld-text text-center text-md-start">
                                    At Vertex Computech, we provide professional MacBook repair services with fast, reliable, and affordable solutions. 
                                    Our experienced technicians specialize in MacBook screen replacement, battery replacement, keyboard repair, motherboard repair, and macOS troubleshooting. 
                                </p>

                                <p className="ld-text text-center text-md-start">
                                    Whether your MacBook is running slow, not turning on, or has hardware damage, we diagnose the problem quickly and provide the best repair solution using high-quality parts. 
                                    With our commitment to quality service and customer satisfaction, Vertex Computech ensures your MacBook works like new again.
                                </p>
                            </div>

                            <div className="col-lg-6 order-lg-1 order-1 mt-4 mt-lg-0">
                                <img
                                    src={macbookImg}
                                    alt="MacBook Repair"
                                    className="img-fluid rounded shadow ld-img"
                                />
                            </div>
                    </div>
                </div>
            </section>

            {/* MAIN INTRO SECTION */}
            <section className="ld-main-section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Content */}
                        <div className="col-lg-6 order-lg-1 order-2">
                            <h2 className="ld-title mb-4 mt-4 mt-md-0 text-center text-md-start">
                                Expert Hardware Diagnostics & Laptop Repair Services
                            </h2>

                            <p className="ld-text text-center text-md-start">
                                At <strong>Vertex Computech</strong>, we specialize in expert hardware diagnostics
                                and laptop repair services, performing high-speed SSD/RAM upgrades,
                                and providing reliable desktop support.
                            </p>

                            <p className="ld-text text-center text-md-start">
                                Our certified technicians ensure premium quality service with
                                the fastest turnaround times in Pune. Customer satisfaction is
                                the core of our mission, making us the top-rated solution for
                                all your computer needs.
                            </p>

                            <div className="ld-highlight-box mt-2">
                                <div className="row">
                                    <div className="col-12 col-md-6 mt-2 mt-md-0"><span className="greentick">✔</span> Certified Technicians</div>
                                    <div className="col-12 col-md-6 mt-2 mt-md-0"><span className="greentick">✔</span> Fastest Turnaround</div>
                                    <div className="col-12 col-md-6 mt-2"><span className="greentick">✔</span> Premium Quality Service</div>
                                    <div className="col-12 col-md-6 mt-2"><span className="greentick">✔</span> Trusted in Pune</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-6 order-lg-2 order-1 mt-4 mt-lg-0">
                            <img
                                src={hardwareImg}
                                alt="Laptop Repair"
                                className="img-fluid rounded shadow ld-img"
                            />
                        </div>

                    </div>
                </div>
            </section>



            {/* PROFESSIONAL SERVICES SECTION */}
            <section className="ld-service-section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="ld-title">Our Professional Services</h2>
                        <div className="section-divider"></div>
                        <p className="ld-text">
                            Comprehensive repair and upgrade solutions designed for performance,
                            reliability, and long-term stability.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* Service 1 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="ld-service-card text-center h-100">
                                <div className="ld-icon-box">
                                    <i className="bi bi-laptop"></i>
                                </div>
                                <h6 className="text-black mt-3">
                                    Expert Laptop Repair & Screen Replacement
                                </h6>
                                <p className="text-muted small mt-2">
                                    Professional diagnosis and high-quality screen & hardware repairs
                                    for all major laptop brands.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="ld-service-card text-center h-100">
                                <div className="ld-icon-box">
                                    <i className="bi bi-cpu"></i>
                                </div>
                                <h6 className="text-black mt-3">
                                    Advanced Desktop Motherboard & PSU Repairs
                                </h6>
                                <p className="text-muted small mt-2">
                                    Chip-level motherboard repairs and reliable power supply solutions
                                    for desktops and workstations.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="ld-service-card text-center h-100">
                                <div className="ld-icon-box">
                                    <i className="bi bi-tools"></i>
                                </div>
                                <h6 className="text-black mt-3">
                                    Preventive Maintenance & Thermal Cleaning
                                </h6>
                                <p className="text-muted small mt-2">
                                    Deep internal cleaning and thermal paste application to prevent
                                    overheating and extend system life.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="col-md-6 col-lg-3">
                            <div className="ld-service-card text-center h-100">
                                <div className="ld-icon-box">
                                    <i className="bi bi-house-door"></i>
                                </div>
                                <h6 className="text-black mt-3">
                                    Convenient Doorstep Technical Support
                                </h6>
                                <p className="text-muted small mt-2">
                                    Reliable home & office onsite support across Pune with fast
                                    response and professional service.
                                </p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )

}

export default LaptopDesktop;