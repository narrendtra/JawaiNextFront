import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
const AccommodationList = (props) => {
  return (
    <Fragment>
      <div className="acc-main">
        <div className="zoom-txt" key={props.id}>
          <div className={`row ${props.i % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <div className="col-sm-7 col-12">
              <h3 className="subhadding">{props.title} </h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: props.short_description
                    ? props.short_description.substring(0, 500)
                    : "",
                }}
              />

              <div className="button">
                <Link className="btn" href={`/accommodation/${props.slug_url}`}>
                  Read More
                </Link>
                <Link className="btn" href={`/accommodation/${props.slug_url}`}>
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-sm-5 col-12 pull-right">
              <Image
                src={props.image}
                alt={props.alt_tag}
                width="500"
                height="455"
                style={{ width: "100%", height: "auto" }}
                className="img-responsive2 img-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccommodationList;
