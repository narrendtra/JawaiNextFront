import { Fragment } from "react";
import { getAllEvents } from "../hooks/api-utils";
import MetaTags from "../components/MetaTags";
import Banner from "../home/Banner";
import HomeStay from "../home/HomeStay";
import ActivityOffer from "../home/ActivityOffer";
import HomeAbout from "../home/HomeAbout";
import DestinationGetaway from "../home/DestinationGetaway";
import Blogs from "../home/Blogs";
import StayingBanner from "../home/StayingBanner";
function Home(props) {
  return (
    <Fragment>
      <MetaTags
        title={props.general.title_tag}
        description={props.general.meta_description}
        keywords={props.general.meta_keyword}
      />
      {props.banners && <Banner banners={props.banners} />}
      <HomeAbout />
      {props.homestays && <HomeStay homestays={props.homestays} />}
      {props.activity && <ActivityOffer activity={props.activity} />}
      <DestinationGetaway />
      {props.blogs && <Blogs blogs={props.blogs} />}
      <StayingBanner />
    </Fragment>
  );
}
export async function getStaticProps() {
  const bannerEvents = await getAllEvents("api/allbanners");
  const accEvents = await getAllEvents("api/accommodations");
  const actEvents = await getAllEvents("api/activities");
  const allBlogs = await getAllEvents("api/blogs");
  const allGeneral = await getAllEvents("api/general");
  return {
    props: {
      banners: bannerEvents,
      homestays: accEvents,
      activity: actEvents,
      blogs: allBlogs,
      general: allGeneral,
    },
    revalidate: 1800,
  };
}

export default Home;
