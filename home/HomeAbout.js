import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const HomeAbout = () => {
  return (
    <Fragment>
      <section className="about-us section">
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <div className="about-text">
                <h2>Feel the calmness of Mother Nature - Jawai Nature Stay</h2>
                <p>
                  Enwrapped with a naturally beautiful landscape, where leopards
                  roam around freely, right next to
                  <strong>Jawai Wildlife Sanctuary</strong>, serene backdrops of
                  Jawai Bandh, is the prestigious
                  <strong>Jawai Nature Stay</strong>. Set in a dramatic wild
                  surroundings, the stay offers you absolutely relaxing
                  rejuvenation into the lap of Mother Nature. Splendid panoramic
                  environment brings you closer to the real essence of the
                  universal gift to the Jawai.
                </p>
                <div className="button">
                  <Link href="/about-us" className="btn">
                    Explore More
                  </Link>
                </div>
              </div>
            </Col>
            <Col key={1} lg={6} sm={12}>
              <div className="single-image">
                <Image
                  src="/images/jawai-nature-stay.jpg"
                  alt=""
                  width="596"
                  height="365"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default HomeAbout
