import React, { Fragment } from "react";
import { getAllEvents, getactEventById } from "../../hooks/api-utils";
import ActivityImages from "../../components/ActivityImages";
import InnerTopBanner from "../../components/InnerTopBanner";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import MetaTags from "../../components/MetaTags";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import QueryForm from "../../components/QueryForm";

const ActivitiesDetail = (props) => {
  Fancybox.bind('[data-fancybox="gallery"]', {});

  const cdata = props.selectedEvent;
  return (
    <Fragment>
      <MetaTags
        title={cdata.title_tag}
        description={cdata.meta_keyword}
        keywords={cdata.meta_description}
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container" key={cdata.id}>
          <h2 className="title">{cdata.title}</h2>
          {cdata.image && (
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_URl +
                "/activity_images/" +
                cdata.image
              }
              alt={cdata.alt_tag}
              className="mr-3"
              width="540"
              height="600"
              align="left"
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: cdata.description,
            }}
          />
          <div className="clear"></div>
          {cdata.id && (
            <ActivityImages
              title={cdata.title}
              actdatas={cdata.activityimages}
            />
          )}
        </div>
      </section>
      <QueryForm title={cdata.title} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const events = await getAllEvents("api/activities");
  const paths = events.map((event) => ({
    params: { actId: event.slug_url },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const actIds = context.params.actId;
  const acts = await getactEventById(actIds);
  return {
    props: {
      selectedEvent: acts,
    },
    revalidate: 30,
  };
}

export default ActivitiesDetail;
