import React, { Fragment } from "react";
import { getAllEvents, gettourEventById } from "../../hooks/api-utils";
import Image from "next/image";
import InnerTopBanner from "../../components/InnerTopBanner";
import TourBooking from "../../components/TourBooking";

const TourDetail = (props) => {
  const cdata = props.selectedEvent;
  return (
    <Fragment>
      <InnerTopBanner />
      <section className="inner section">
        <div className="container" key={cdata.id}>
          <h2 className="title">{cdata.title}</h2>
          <div className="whatBox">
            {cdata.image && (
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_URl +
                  "/category_images/" +
                  cdata.image
                }
                alt={cdata.alt_tag}
                className="img-thumbnail ml-3"
                align="right"
                width="500"
                height="510"
              />
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: cdata.description,
              }}
            />
          </div>
          <TourBooking title={cdata.title} />
        </div>
      </section>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const actIds = context.params.tourId;
  const acts = await gettourEventById(actIds);
  return {
    props: {
      selectedEvent: acts,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents("api/categories");
  const paths = events.map((event) => ({
    params: { tourId: event.slug_url },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default TourDetail;
