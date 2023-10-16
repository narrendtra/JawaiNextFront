import React from "react";
import Link from "next/link";

const InterestedBooking = () => {
  return (
    <section className="world-better section">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h1>Interested In Leopard Safari Booking!</h1>
            <p>
              <i className="fa fa-phone"></i> Call Now:-{" "}
              <a href="tel:+918955000999">+91-8955000999</a>{" "}
              <i className="fa fa-envelope"></i> Email Us:-{" "}
              <a href="mailto:info@jawainaturestay.com">
                info@jawainaturestay.com
              </a>{" "}
            </p>
          </div>
          <div className="col-md-3">
            <div className="button">
              <Link className="btn" href="">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestedBooking;
