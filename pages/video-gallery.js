import React, { Fragment } from "react";
import InnerTopBanner from "../components/InnerTopBanner";
import { getAllEvents } from "../hooks/api-utils";
import MetaTags from "../components/MetaTags";

const VideoGallery = (props) => {
  const iframeSrc = "https://www.youtube.com/embed/";
  return (
    <Fragment>
      <MetaTags
        title="Video Gallery"
        description="Video Gallery"
        keywords="Video Gallery"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Video Gallery</h2>
          <div className="row">
            {props.actEvents?.map((video) => (
              <div className="col-lg-4 mt-3" key={video.id}>
                <iframe
                  width="100%"
                  height="315"
                  src={iframeSrc + video.video_url}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const actEvents = await getAllEvents("api/videos");
  return {
    props: {
      actEvents: actEvents,
    },
    revalidate: 1800,
  };
}
export default VideoGallery;
