import React, { Fragment, useEffect } from "react";
import { getcontantEventById } from "../hooks/api-utils";
import Image from "next/image";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";

const AboutUs = (props) => {
  const cdata = props.contantEvent;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <MetaTags
        title={cdata.title_tag}
        description={cdata.meta_keyword}
        keywords={cdata.meta_description}
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">About Us</h2>
          <p>
            In the midst of "Land of Leopards", along with the other wildlife
            species and in the middle of those billion-years old rock formations
            or caves that lies in the beautiful camps of Jawai Nature Stay.
            Blending perfectly wildlife, nature, landscape, comfort, and
            traditions, Jawai Nature stay is no less than a mind-blowing
            experience of leopard safari. Come and get an escape from city chaos
            to the inspiringly beautiful land of Jawai.
          </p>

          <div className="about_box2">
            <div className="row">
              <div className="col-sm-5">
                <Image
                  src="/images/about01.jpg"
                  style={{ width: "100%", height: "auto" }}
                  width="537"
                  height="313"
                  alt="about jawi"
                  className="img-thumbnail"
                />
              </div>
              <div className="col-sm-7">
                <p>
                  Resting close to the Jawai Dam, and closest place to the town
                  of Sumerpur, Jawai Nature Stay is decorated with charm of
                  nature. It is well-connected by road & railways to access from
                  anywhere else in the state.
                  <br />
                  <br />
                  Settled in dramatic wild surroundings, the stay presents
                  absolutely relaxing rejuvenation into the lap of Mother
                  Nature. Splendid panoramic environment brings you closer to
                  the real essence of the universal gift to the Jawai. The mind
                  blowing balance of ecology and nature in Jawai entices the
                  wanderers and lets them enjoy their refreshing breaks at the
                  resort.
                </p>
              </div>
            </div>
            <div className="clear"></div>
          </div>

          <div className="about_box2">
            <div className="row">
              <div className="col-sm-7">
                <p>
                  An unbelievable ecology, where the village community lives in
                  harmony with the surroundings of wildlife; while preserving it
                  and understanding their behavior from a closer glance. During
                  your stay at Jawai Nature Stay, you may get a chance to spot
                  hyenas, sloth bears, blue bulls, and many exotic bird species
                  like flamingoes, eagles, owls, and more. Since the former era,
                  the harmony is well-maintained between the wildlife and
                  humans. <br />
                  <br />
                  At Jawai Nature Stay, we have an only aim of providing our
                  guests a cherishing experience in the bliss of nature.
                  Sprawled into the raw beauty of nature, Jawwi resort enhances
                  the holiday experience by making you connect with its
                  fascinating charms. We have esigned special activities which
                  you can get indulge-in to uplift the endurance in the nature
                  stay. Enjoy some unforeseen encounters with Leopards anywhere,
                  while enjoying morning breakfasts near Jawai Bandh or capture
                  the beautiful sunset views from the dam.
                </p>
              </div>
              <div className="col-sm-5">
                <Image
                  src="/images/about01.jpg"
                  style={{ width: "100%", height: "auto" }}
                  width="537"
                  height="313"
                  alt="about jawi"
                  className="img-thumbnail"
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>

          <p>
            It is necessary to mention that the "charm of Jawai Nature Stay" is
            one of its kind a celebrity spot. Recently it was visited by former
            tourism minister Bina Kaak, superstar Salman Khan who appreciated
            the peaceful and simple stay at the resort, quoting it best for a
            great personal time.
            <br />
            <br />
            We provide commendable sojourn at Jawai Nature Stay in
            well-maintained camps that gives a thrilling fun of staying in the
            wilderness of Jawai. With all the basic amenities, our tents let you
            enjoy every essential facility and the comfort you really deserve.
            Along with these, our cave stays are exclusively available at the
            resort. The naturally formed caves at Jawai offer really an amazing
            experience of the stay in the wild ambiance.
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const contant = await getcontantEventById(19);
  return {
    props: {
      contantEvent: contant,
    },
    revalidate: 30,
  };
}

export default AboutUs;
