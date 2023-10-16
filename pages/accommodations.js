import React, { Fragment } from "react";
import { getAllEvents, getcontantEventById } from "../hooks/api-utils";
import InnerTopBanner from "../components/InnerTopBanner";
import MetaTags from "../components/MetaTags";
import AccommodationList from "../components/AccommodationList";
const Accommodations = (props) => {
  const cdata = props.contantEvent;
  return (
    <Fragment>
      <MetaTags
        title={cdata.title_tag}
        description={cdata.meta_keyword}
        keywords={cdata.meta_description}
      />
      <InnerTopBanner
        cimage={
          cdata.image
            ? process.env.NEXT_PUBLIC_BACKEND_URl +
              "/contant_images/" +
              cdata.image
            : ""
        }
      />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Accomodations</h2>
          {props.homestays.map((acmdata, i) => (
            <AccommodationList
              key={acmdata.id}
              title={acmdata.title}
              short_description={acmdata.short_description}
              image={
                process.env.NEXT_PUBLIC_BACKEND_URl +
                "/accommodation_images/" +
                acmdata.image
              }
              banner={
                process.env.NEXT_PUBLIC_BACKEND_URl +
                "/accommodation_images/" +
                acmdata.banner
              }
              alt_tag={acmdata.alt_tag}
              slug_url={acmdata.slug_url}
              i={i}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const accEvents = await getAllEvents("api/accommodations");
  const contEvents = await getcontantEventById(15);
  return {
    props: {
      homestays: accEvents,
      contantEvent: contEvents,
    },
    revalidate: 1800,
  };
}
export default Accommodations;
