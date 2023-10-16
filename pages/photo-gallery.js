import React, { Fragment } from "react";
import { getAllEvents } from "../hooks/api-utils";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";
const PhotoGallery = (props) => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });
  return (
    <Fragment>
      <MetaTags
        title="Photo Gallery"
        description="Photo Gallery"
        keywords="Photo Gallery"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Photo Gallery</h2>
          <div className="events">
            <div className="row">
              {props.actEvents?.map((photo) => (
                <div className="col-sm-4" key={photo.id}>
                  <div className="single-event">
                    <div className="head overlay">
                      {photo.image && (
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_URl +
                            "/gallery_images/" +
                            photo.image
                          }
                          className="img-fullwidth"
                          width="400"
                          height="300"
                          style={{ width: "100%", height: "auto" }}
                          alt={photo.alt_tag}
                        />
                      )}
                      {photo.image && (
                        <a
                          href={
                            process.env.NEXT_PUBLIC_BACKEND_URl +
                            "/gallery_images/" +
                            photo.image
                          }
                          data-fancybox="gallery"
                          className="btn"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const actEvents = await getAllEvents("api/photos");
  return {
    props: {
      actEvents: actEvents,
    },
    revalidate: 1800,
  };
}
export default PhotoGallery;
