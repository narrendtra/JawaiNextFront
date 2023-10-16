import React, { Fragment } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const AccommodationImages = (props) => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });
  return (
    <Fragment>
      <h2 className="title">{props.title} Photos</h2>
      <div className="events">
        <div className="row">
          {props.accdatas?.map((accimgs) => (
            <div className="col-sm-4" key={accimgs.id}>
              <div className="single-event">
                <div className="head overlay">
                  {accimgs.image && (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_URl +
                        "/accommodation_more_images/" +
                        accimgs.image
                      }
                      alt={accimgs.image}
                      width="500"
                      height="455"
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                  <a
                    href={
                      process.env.NEXT_PUBLIC_BACKEND_URl +
                      "/accommodation_more_images/" +
                      accimgs.image
                    }
                    data-fancybox="gallery"
                    className="btn"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AccommodationImages;
