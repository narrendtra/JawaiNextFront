import React, { Fragment } from "react";
import InnerTopBanner from "../components/InnerTopBanner";
import FaqList from "../components/FaqList";
import MetaTags from "../components/MetaTags";

const Faq = () => {
  return (
    <Fragment>
      <MetaTags title="Faq's" description="Faq's" keywords="Faq's" />
      <InnerTopBanner cimage="" />
      <FaqList />
    </Fragment>
  );
};
export default Faq;
