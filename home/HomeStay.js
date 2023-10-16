import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import AccommodationList from "../components/AccommodationList";
const HomeStay = (props) => {
  return (
    <Fragment>
      <section className="accommo">
        <Container>
          <h1>Accommodation</h1>
          {props.homestays.slice(0, 2).map((acmdate, i) => (
            <AccommodationList
              key={acmdate.id}
              title={acmdate.title}
              short_description={acmdate.short_description}
              image={
                process.env.NEXT_PUBLIC_BACKEND_URl +
                "/accommodation_images/" +
                acmdate.image
              }
              alt_tag={acmdate.alt_tag}
              slug_url={acmdate.slug_url}
              i={i}
            />
          ))}
        </Container>
      </section>
    </Fragment>
  );
};

export default HomeStay;
