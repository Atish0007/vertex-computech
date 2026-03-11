import React from "react";
import "../assets/css/client.css";

import logo1 from "../assets/images/client/one.svg";
import logo2 from "../assets/images/client/two.svg";
import logo3 from "../assets/images/client/three.svg";
import logo4 from "../assets/images/client/four.svg";
import logo5 from "../assets/images/client/five.svg";
import logo6 from "../assets/images/client/six.svg";
import logo7 from "../assets/images/client/seven.svg";
import logo8 from "../assets/images/client/eight.svg";

function ClientSection() {

  const logos = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8
  ];

  return (
    <section className="client-section py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">
      <div className="container">

        <div className="client-heading">
          <h5>Authorized & Supported Brands</h5>
          <h2>Expert Service For Leading Laptop Brands</h2>
        {/* <div className="section-divider"></div> */}
        </div>

        {/* Row 1 */}
        <div className="logo-marquee">
          <div className="logo-track">

            {logos.concat(logos).map((logo, index) => (
              <div className="logo-card" key={index}>
                <img src={logo} alt="client logo"/>
              </div>
            ))}

          </div>
        </div>

        {/* Row 2 */}
        <div className="logo-marquee reverse">
          <div className="logo-track">

            {logos.concat(logos).map((logo, index) => (
              <div className="logo-card" key={index}>
                <img src={logo} alt="client logo"/>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default ClientSection;