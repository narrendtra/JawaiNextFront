import React, { Fragment } from "react";
import Link from "next/link";

const RightLinks = () => {
  return (
    <Fragment>
      <div className="fare-summary-wrapper">
        <div className="support-outer bg01">
          <ul>
            <Link href="/accommodation/standard-tents" target="_blank">
              <li>
                <span>
                  <i className="fa fa-certificate icon"></i>
                </span>
                <h3>
                  Click here for<span> Tent Booking</span>
                </h3>
              </li>
            </Link>
          </ul>
        </div>

        <div className="support-outer bg02">
          <ul>
            <li>
              <Link href="/accommodation/rooms" target="_blank">
                <span>
                  <i className="fa fa-certificate icon"></i>
                </span>
                <h3>
                  Click here for <span> Room Booking</span>
                </h3>
              </Link>
            </li>
          </ul>
        </div>

        <div className="support-outer bg03">
          <ul>
            <li>
              <Link href="/leopard-safari-online-booking" target="_blank">
                <span>
                  <i className="fa fa-certificate icon"></i>
                </span>
                <h3>
                  Click here for <span> Leopard Safari Booking</span>
                </h3>
              </Link>
            </li>
          </ul>
        </div>

        <div className="support-outer bg04">
          <ul>
            <Link href="/activities" target="_blank">
              <li>
                <span>
                  <i className="fa fa-certificate icon"></i>
                </span>
                <h3>
                  Click here for <span>Activities</span>
                </h3>
              </li>
            </Link>
          </ul>
        </div>

        <div className="support-outer">
          <ul>
            <Link href="tel:+91-8955000999" target="_blank">
              <li>
                <span>
                  <i className="fa fa-phone icon"></i>
                </span>
                <h3>
                  Call us on<span>+91 89550 00999</span>
                </h3>
              </li>
            </Link>
            <Link href="mailto:info@jawainaturestay.com" target="_blank">
              <li>
                <span>
                  <i className="fa fa-envelope icon"></i>
                </span>
                <h3>
                  Email us <span>info@jawainaturestay.com</span>
                </h3>
              </li>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=918955000999"
              target="_blank"
            >
              <li>
                <span className="whatsapp-icon">
                  <i className="fa fa-whatsapp icon"></i>{" "}
                </span>
                <h3>
                  Any Doubt <span>Chat with us </span>
                </h3>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default RightLinks;
