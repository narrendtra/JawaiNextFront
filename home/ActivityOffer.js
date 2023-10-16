import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
const ActivityOffer = (props) => {
  return (
    <section className="recommended-tour section">
      <Container>
        <Row>
          <Col sm={3}>
            <h2>Activity We Offer </h2>
            <p>
              The <strong>Jawai Nature Stay</strong> offers unique, authentic,
              and thrilling experiences to meet the wilderness and tribal side
              of Jawai. Immerse in the culturally rich lifestyles of Rabari
              communities or spot human-friendly leopards around the dam,{' '}
              <strong>relaxing stay in Jawai</strong> has a lot to treat a
              wanderlust in you.
            </p>
            <div className="button">
              <Link className="btn" href="/activities">
                View All Activities
              </Link>
            </div>
          </Col>
          <Col sm={9}>
            <Row>
              {props.activity.slice(0, 6).map((actdata) => (
                <Col sm={4} key={actdata.id}>
                  <div className="rtour">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_URl +
                        '/activity_images/' +
                        actdata.image
                      }
                      width="540"
                      height="600"
                      style={{ width: '100%', height: 'auto' }}
                      alt={actdata.alt_tag}
                      className="img-fullwidth"
                    />
                    <div className="rbox">
                      <h3>{actdata.title}</h3>
                      <Link
                        className="arroe-right-img"
                        href={`/activity/${actdata.slug_url}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActivityOffer
