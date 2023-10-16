import React, { Fragment } from "react";
import Link from "next/link";
import { getAllEvents, getcontantEventById } from "../hooks/api-utils";
import Image from "next/image";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";
const activities = (props) => {
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
          <h2 className="title">Activities</h2>
          <div className="row">
            {props.actEvents.map((actdata) => (
              <div className="col-sm-4" key={actdata.id}>
                <div className="services_act">
                  <div className="overflow_hidden">
                    {actdata.image && (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_URl +
                          "/activity_images/" +
                          actdata.image
                        }
                        alt={actdata.alt_tag}
                        width="540"
                        height="600"
                        style={{ width: "100%", height: "auto" }}
                        className="img-responsive"
                      />
                    )}
                  </div>
                  <div className="content">
                    <h3>{actdata.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: actdata.description
                          ? actdata.description.substring(0, 150)
                          : "",
                      }}
                    />
                    <div className="text-right">
                      <Link
                        className="view_more"
                        href={`/activity/${actdata.slug_url}`}
                      >
                        View More <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const actEvents = await getAllEvents("api/activities");
  const contEvents = await getcontantEventById(10);
  return {
    props: {
      actEvents: actEvents,
      contantEvent: contEvents,
    },
    revalidate: 1800,
  };
}
export default activities;
