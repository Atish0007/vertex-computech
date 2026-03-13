import React, { useRef, useState } from "react";
import "../assets/css/contact.css";

import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {

    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.message.value.trim();

        if (name === "" || email === "" || message === "") {
            toast.error("Please fill all fields");
            return;
        }


        const phoneNumber = "918446772581";

        const whatsappMessage = `Thank you for reaching out to Vertex Computech!

We have successfully received your request with the following details:

Name: ${name}
Email: ${email}
Message: ${message}

Our team will review your request and get back to you within 1-2 business hours.

Location: Pune, Maharashtra
Phone: +91 8446772581

Best regards,
Vertex Computech Team`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");


        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 2500);

        form.current.reset();
    };

    const cards = [
        {
            title: "Location",
            value: "Pune, Maharashtra",
            icon: <FaMapMarkerAlt />
        },
        {
            title: "Phone",
            value: "+91 8446772581",
            icon: <FaPhoneAlt />
        },
        {
            title: "Email",
            value: "vertexcomputech@gmail.com",
            icon: <FaEnvelope />
        }
    ];

    return (

        <section className="contactPage py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

            <div className="container">

                <h1 className="contactTitle">Contact Us</h1>
                <div className="section-divider"></div>
                <p className="contactSub">
                    Need computer repair or IT support? We're here to help.
                </p>


                {/* CONTACT CARDS */}

                <div className="contactCards">

                    {cards.map((item, index) => (

                        <div className="contactCard3D" key={index}>

                            <div className="cardGlow"></div>

                            <div className="cardIcon">{item.icon}</div>

                            <h3 className="fs-5">{item.title}</h3>

                            <p>{item.value}</p>

                        </div>

                    ))}

                </div>


                <div className="contactWrapper">

                    {/* MAP */}

                    <div className="contactMap order-lg-1 order-2">

                        <iframe
                            title="Vertex Computech Location"
                            src="https://maps.google.com/maps?q=Vertex%20Computech%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>


                    {/* CONTACT FORM */}

                    <div className="contactForm order-lg-2 order-1">

                        <h3 className="text-center pb-3">Send Message</h3>

                        <form ref={form} onSubmit={handleSubmit}>

                            <div className="inputBox">

                                <FaUser className="inputIcon" />

                                <input type="text" name="name" placeholder=" " />

                                <label>Your Name</label>

                            </div>


                            <div className="inputBox">

                                <FaEnvelope className="inputIcon" />

                                <input type="email" name="email" placeholder=" " required />

                                <label>Email Address</label>

                            </div>


                            <div className="inputBox">

                                <FaCommentDots className="inputIcon" />

                                <textarea name="message" rows="4" placeholder=" " />

                                <label>Your Message</label>

                            </div>

                            <button type="submit" className="sendBtn">

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </div>


            {/* SUCCESS POPUP */}

            {showSuccess && (

                <div className="successPopup">

                    <div className="successIcon">✓</div>

                    <p>Message Sent Successfully</p>

                </div>

            )}

            <ToastContainer position="top-right" />

        </section>

    );

}

export default Contact;