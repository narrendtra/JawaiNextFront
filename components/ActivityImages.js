import React, { Fragment } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const ActivityImages = (props) => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });
  return (
    <Fragment>
      <h2 className="title">{props.title} Photos</h2>
      <div className="events">
        <div className="row">
          {props.actdatas?.map((actimgs) => (
            <div className="col-sm-4" key={actimgs.id}>
              <div className="single-event">
                {actimgs.image && (
                  <div className="head overlay">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_URl +
                        "/activity_more_images/" +
                        actimgs.image
                      }
                      width="540"
                      height="600"
                      style={{ width: "100%", height: "auto" }}
                      alt={actimgs.image}
                    />
                    <a
                      href={
                        process.env.NEXT_PUBLIC_BACKEND_URl +
                        "/activity_more_images/" +
                        actimgs.image
                      }
                      alt={actimgs.image}
                      data-fancybox="gallery"
                      className="btn"
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityImages;
