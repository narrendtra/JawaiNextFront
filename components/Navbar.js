import Image from "next/image";
import Link from "next/link";
import ActDropdown from "../general/ActDropdown";
import AccDropdown from "../general/AccDropdown";
import { Container, Row, Col } from "react-bootstrap";
const Navbar = (props) => {
  return (
    <header className="header">
      <div className="header-inner">
        <Container fluid>
          <Row>
            <Col lg={2} sm={12}>
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/jns-logo.png"
                    alt="logo"
                    width="192"
                    height="75"
                    priority
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </div>
              <div className="mobile-menu"></div>
            </Col>
            <Col lg={10} sm={12}>
              <ul className="content">
                <li>
                  <i className="fa fa-phone"></i> +91 89550 00999
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-envelope-o"></i>info@jawainaturestay.com
                  </a>
                </li>
              </ul>
              <div className="clear"></div>
              <div className="header-menu">
                <nav className="navbar navbar-default">
                  <div className="navbar-collapse">
                    <ul id="nav" className="nav menu navbar-nav">
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">
                          Jawai Nature Stay
                          <i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/about-jawai">About Jawai</Link>
                          </li>
                          <li>
                            <Link href="/how-to-reach">How To Reach</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/accommodations">
                          Accommodation<i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <AccDropdown accEvents={props.accdata} />
                        </ul>
                      </li>
                      <li>
                        <Link href="/activity/dining">Dining</Link>
                      </li>
                      <li>
                        <Link href="/tariff">Tariff</Link>
                      </li>
                      <li>
                        <Link href="/activities">
                          Activities <i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <ActDropdown actEvents={props.actdata} />
                        </ul>
                      </li>
                      <li>
                        <Link href="/photo-gallery">
                          Gallery <i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/photo-gallery">Photo Gallery</Link>
                          </li>
                          <li>
                            <Link href="/video-gallery">Video Gallery</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact</Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          More <i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown">
                          <li>
                            <Link href="/testimonials">Guest Reviews</Link>
                          </li>
                          <li>
                            <Link href="/faq">Faq</Link>
                          </li>
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="active">
                        <Link href="/leopard-safari-online-booking">
                          Leopard Safari Booking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
