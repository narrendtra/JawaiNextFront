import React, { Fragment } from "react";
import InnerTopBanner from "../../components/InnerTopBanner";
import { getAllEvents, getEventById } from "../../hooks/api-utils";
import MetaTags from "../../components/MetaTags";
import AccommodationImages from "../../components/AccommodationImages";
import FaqList from "../../components/FaqList";
const AccommodationDetail = (props) => {
  const cdata = props.selectedEvent;
  return (
    <Fragment>
      <MetaTags
        title={cdata.title_tag}
        description={cdata.meta_keyword}
        keywords={cdata.meta_description}
      />
      <InnerTopBanner
        cimage={
          cdata.banner
            ? process.env.NEXT_PUBLIC_BACKEND_URl +
              "/accommodation_images/" +
              cdata.banner
            : ""
        }
      />
      <section className="inner section">
        <div className="container" key={cdata.id}>
          <h2 className="title">{cdata.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: cdata.description,
            }}
          />
          <AccommodationImages
            title={cdata.title}
            accdatas={cdata.accommodationimages}
          />
        </div>
      </section>
      <FaqList />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const homeIds = context.params.homestayid;
  const accoms = await getEventById(homeIds);
  return {
    props: {
      selectedEvent: accoms,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents("api/accommodations");
  const paths = events.map((event) => ({
    params: { homestayid: event.slug_url },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default AccommodationDetail;
