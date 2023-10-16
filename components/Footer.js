import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="foonav">
        <Container>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/about-jawai">Jawai Nature Stay</Link>
            </li>
            <li>
              <Link href="/accommodations">Accomodations</Link>
            </li>
            <li>
              <Link href="/tour-packages">Special Offers</Link>
            </li>
            <li>
              <Link href="/dining">Dining</Link>
            </li>
            <li>
              <Link href="/tariff">Tariff</Link>
            </li>
            <li>
              <Link href="/activities">Activities</Link>
            </li>

            <li>
              <Link href="/photo-gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/testimonials">Guest Reviews</Link>
            </li>
            <li>
              <Link href="/faq">Faq's</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <div className="single-widget newsletter">
                <h2>Our Address</h2>
                <ul className="list">
                  <li>
                    Jawai Nature Stay Pvt. Ltd.
                    <br />
                    Jawai Sumerpur Road, Angor, Pali, Rajasthan 306126
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} sm={12}>
              <div className="single-widget newsletter">
                <h2>Reservation</h2>
                <ul className="list">
                  <li>
                    Central Reservations: +91-8955000999 Resort Contact:
                    <Link href="mailto:info@jawainaturestay.com">
                      info@jawainaturestay.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} sm={12}>
              <div className="single-widget newsletter">
                <h2>Social with us </h2>
                <ul className="social mt-2">
                  <li>
                    <Link href="" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i className="fa fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <i className="fa fa-tripadvisor"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa fa-rss"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="bottom-head">
                <Row>
                  <Col md={6}>
                    <div className="copyright">
                      <p>
                        © Copyright 2022
                        <Link href="/">Jawai Nature Stay Pvt. Ltd.</Link>. All
                        Rights Reserved.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="copyright text-right">
                      <p>
                        Designed &amp; Developed by
                        <Link
                          href="https://www.indianespace.co.in/"
                          target="_blank"
                        >
                          Indianespace
                        </Link>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
