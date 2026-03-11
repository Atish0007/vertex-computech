
import "../assets/css/home.css"
import bgVideo from "../assets/images/bg.mp4";
import heroImg from "../assets/images/vertexhome.jpeg";

function Home() {

    return (
        <>


            {/* <section className="homebg d-flex align-items-center">
                <div className="container pb-5">
                    <div className="row justify-content-start">
                        <div className="col-md-6 text-start text-white">

                            <h1 className="fade-right mb-3">
                                <span className="vrtnm">Vertex Computech</span>
                            </h1>

                            <p className="fs-3 mb-0">
                                Laptop Repair Kothrud, Home Service Laptop Repair Pune, Best Laptop Shop Kothrud.
                            </p>

                        </div>
                    </div>
                </div>
            </section> */}



            {/* <section className="heroBG d-flex align-items-center">
                <div className="container-fluid p-0 overflow-x-hidden">
                    <div className="row align-items-center">

                        <div className="col-lg-6 ps-5 text-white text-center">
                            <h1 className="fw-bold mb-3">
                                <span className="vrtnm">Vertex Computech</span>
                            </h1>

                            <p className="fs-4 mb-4">
                                Laptop Repair Kothrud, Home Service Laptop Repair Pune,
                                Best Laptop Shop Kothrud.
                            </p>

                            <p>Top Laptop Repair Service in Pune - Now with Home Service in Kothrud!
                                Is your laptop screen cracked, battery draining quickly or keyboard not working? Don't worry! Our expert technicians will come to your home and repair your laptop.
                            </p>
                            <div className="d-flex mb-3">
                                <span className="fs-13">​✅ Response within 30 minutes</span>
                                <span className="fs-13">​✅ Affordable Rates</span>
                                <span className="fs-13">​✅ Original Spare Parts</span>
                                <span className="fs-13">​✅ Service available on all brands</span>
                            </div>

                            <a href="tel:8446772581" className="btn btn-primary px-4 py-2">
                                Call Now
                            </a>
                        </div>

                        
                        <div className="col-lg-6 image-section d-flex justify-content-end">
                            <img
                                src={heroImg}
                                alt="Laptop Repair Service"
                                className="img-fluid hero-image"
                            />
                        </div>

                    </div>
                </div>
            </section> */}


            <section className="container-fluid p-0">
                <div className="video-container">

                    <video autoPlay loop muted playsInline id="background-video">
                        <source src={bgVideo} type="video/mp4" />
                    </video>

                    <div className="video-overlay"></div>

                    <div className="video-content">
                        <h1 className="text-white text-center">
                            <span className="vrtnm">Vertex Computech</span>
                            
                        </h1>
                            <p className="fs-5 fs-md-4 text-white text-center">Laptop Repair Kothrud, Home Service Laptop Repair Pune, Best Laptop Shop Kothrud.</p>
                            {/* ✅ Glass Buttons */}
                            <div className="glass-btn-group">
                                <a href="tel:8446772581" className="glass-btn">
                                <i className="bi bi-telephone fs-6"></i> Call Now
                                </a>

                                <a
                                href="https://wa.me/918446772581"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-btn"
                                >
                                <i className="bi bi-whatsapp fs-6"></i> WhatsApp
                                </a>
                            </div>
                    </div>

                </div>
            </section>

        </>
    )

}

export default Home;