import React, { Fragment } from "react";
import Link from "next/link";
const SocialIcons = () => {
  return (
    <Fragment>
      <ul className="social clearfix">
        <li>
          <a href="https://www.facebook.com/jawainaturestay/" target="blank">
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jawainaturestay/" target="blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCdMynnlz1XUIfYS5hcfqH3Q"
            target="blank"
          >
            <i className="fa fa-youtube"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.tripadvisor.in/Hotel_Review-g4915158-d23157438-Reviews-Jawai_Nature_Stay-Sumerpur_Pali_District_Rajasthan.html"
            target="blank"
          >
            <i className="fa fa-tripadvisor"></i>
          </a>
        </li>

        <li>
          <Link href="/blog" target="blank">
            <i className="fa fa-rss"></i>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default SocialIcons;
