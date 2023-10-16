import React, { Fragment } from "react";
import Image from "next/image";
import { getAllEvents } from "../hooks/api-utils";
import Link from "next/link";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";
const TourPackages = (props) => {
  return (
    <Fragment>
       <MetaTags
        title="Tour Packages"
        description="Tour Packages"
        keywords="Tour Packages"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Tour Packages</h2>
          {props.data.map((tours, i) => (
            <div className="acco-box" key={tours.id}>
              <h3>{tours.title}</h3>
              <div className={`row ${i % 2 == 0 ? "" : "flex-row-reverse"}`}>
                <div className="col-md-6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: tours.description
                        ? tours.description.substring(0, 500)
                        : "",
                    }}
                  />
                  <div className="button">
                    <Link className="btn" href={`/tour/${tours.slug_url}`}>
                      Know More
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  {tours.image && (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_URl +
                        "/category_images/" +
                        tours.image
                      }
                      alt={tours.alt_tag}
                      width="800"
                      height="510"
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const tourEvents = await getAllEvents("api/categories");
  return {
    props: {
      data: tourEvents,
    },
    revalidate: 1800,
  };
}
export default TourPackages;
