import React, { Fragment } from "react";
import InnerTopBanner from "../components/InnerTopBanner";
import MetaTags from "../components/MetaTags";
<MetaTags
  title="Testimonials"
  description="Testimonials"
  keywords="Testimonials"
/>;
const testimonials = () => {
  return (
    <Fragment>
      <InnerTopBanner cimage="" />
      <div className="data">Hello</div>
    </Fragment>
  );
};

export default testimonials;
