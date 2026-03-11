import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import "../assets/css/reviews.css";

import one from "../assets/images/review/1.jpg";
import two from "../assets/images/review/2.jpg";
import three from "../assets/images/review/3.jpg";
import four from "../assets/images/review/4.jpg";
import five from "../assets/images/review/5.jpg";
import six from "../assets/images/review/6.jpg";
import seven from "../assets/images/review/7.jpg";
import eight from "../assets/images/review/8.jpg";
import nine from "../assets/images/review/9.jpg";
import ten from "../assets/images/review/10.jpg";

function ReviewsSection() {

    const [show, setShow] = useState(false);
    const [activeReview, setActiveReview] = useState(null);
    const scrollRef = useRef(null);

    const handleShow = (review) => {
        setActiveReview(review);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const reviews = [
        {
            name: "Sanket Porje",
            image: one,
            review: "I was looking for a place to replace my laptop keyboard and checked three shops in Kothrud before finding Vertex Computech. The owner was humble, polite, and got the job done within a day. The price was also much more reasonable than the other shops nearby. Highly recommended!"
        },
        {
            name: "Nitish Sanas",
            image: two,
            review: "💻 Recently got my laptop repaired and I must say, the service was quick, professional, and reliable. The technician identified the issue accurately and resolved it in a timely manner. I’m happy with the overall experience and would definitely recommend their service to others."
        },
        {
            name: "Piyush Miniyar",
            image: three,
            review: "One of the best service center in pune they have given my laptop in urgent in a very reasonable price so I will recommend vertex computech for better service for our laptops and computer"
        },
        {
            name: "Ashish Hirkane",
            image: four,
            review: "The laptop service price was reasonable, offering value for money. The technicians were knowledgeable and courteous, explaining the issues clearly. Overall, a highly satisfactory experience that I would recommend to anyone in need of laptop servicing."
        },
        {
            name: "Abrar Inamdar",
            image: five,
            review: "I recently had my laptop repaired at this shop, and I'm impressed with their keyboard repair service! 🛠️ The technicians were quick, efficient, and fixed my laptop's keyboard issue in no time. The repair cost was reasonable, and my laptop now feels as good as new. Highly recommend for anyone needing reliable laptop repairs."
        },
        {
            name: "Prachi P",
            image: six,
            review: "Great and prompt service!!! I had problem with my display but it got repaired and now i can use my laptop as it was. Thankyou so much 😊"
        },
        {
            name: "Laxman Gaikwad",
            image: seven,
            review: "My laptop had stopped working all of a sudden They fixed the laptop (Dell) within 24 hours. Good service, reasonably priced, will recommend for sure."
        },
        {
            name: "Shikhar Dhanak",
            image: eight,
            review: "Had an great experience, done ssd upgrade and ram upgrade there is an great experience in terms of speed of the laptop. If there is any issue can consider this place."
        },
        {
            name: "Atul Chippalkatti",
            image: nine,
            review: "It was a local holiday on that day, I had to buy a new USB Keyboard for my PC urgently at 9 pm. All the computer peripheral shops in my area were closed. I called up the shop and enquired. The product was available and it saved my day. Overall nice experience."
        },
        {
            name: "Harshal Jadhav",
            image: ten,
            review: "Best shop to repair your desktop(computer) or laptop. You can get your work done within your time and with the cheapest rates... Thanks to vertex computech..."
        }
    ];


    const handleTouchStart = () => {
        if (scrollRef.current) {
            scrollRef.current.style.animationPlayState = "paused";
        }
    };

    const handleTouchEnd = () => {
        if (scrollRef.current) {
            scrollRef.current.style.animationPlayState = "running";
        }
    };

    return (
        <div className="reviewSection py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

            <div className="reviewHeader">
                <h2>Reviews</h2>
                <div className="verifiedBadge">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google"
                    />
                    <span>Verified Reviews</span>
                </div>
            </div>

            <div className="scrollWrapper">
                <div className="scrollTrack">
                    {[...reviews, ...reviews].map((item, index) => (
                        <div
                            className="reviewCard"
                            key={index}
                            onClick={() => handleShow(item)}
                        >
                            <div className="cardTop">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h6>{item.name}</h6>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>

                            <p>{item.review.substring(0, 210)}...</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body className="reviewModal">
                    {activeReview && (
                        <>
                            <div className="cardTop mb-3">
                                <img src={activeReview.image} alt={activeReview.name} />
                                <div>
                                    <h6>{activeReview.name}</h6>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                            <p>{activeReview.review}</p>
                        </>
                    )}
                </Modal.Body>
            </Modal>

        </div>
    );
}

export default ReviewsSection;