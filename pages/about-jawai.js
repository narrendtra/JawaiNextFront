import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import { getcontantEventById } from "../hooks/api-utils";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";

const Aboutjawai = (props) => {
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
          <h2 className="title">About Jawai (Rajasthan)</h2>
          <p>
            Quaint small village of Jawai is named after Jawai river which is
            now a prominent attraction for nature lovers. Mainly referred to as
            <strong>Jawai Dam</strong>, this village is located in Sumerpur
            Tehsil of the Pali district in Rajasthan. It is a uniquely
            mystifying place that stands as a testimony of harmony between
            humans, animals, and splendid nature. Engulfed by the mighty hills
            and granite rocks adds a unique charm to its beauty that surrounds
            the area stunningly in its own way. Being a home of many exotic
            fauna species like
            <strong>leopards, birds, and crocodiles</strong>,
            <strong>Jawai Wildlife Sanctuary</strong> is a great place to
            experience its rich wilderness beauty.
          </p>

          <div className="about_box2">
            <div className="row">
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Jawai Bandh </h3>
                <p>
                  <strong>Jawai River</strong> is a tributary of Luni, the dam
                  is an exquisite place to capture the panoramic views of Jawai.
                  Constructed during 1946, Jawai dam took 11 years to get
                  completely constructed. Being the biggest dam in Western
                  Rajasthan, it covers acres of land which offers a perfect
                  sight of sunrise or sunset. <br />
                  <br />
                  Enjoy crocodile sighting and bird watching from the dam while
                  experiencing the wilderness of Jawai. It is one of the eminent
                  places of attraction in Jawai from where you can see the
                  entire village along with the scenic backdrops of hills. The
                  panoramic views it offers will let you immerse in the
                  magnitude of Jawai.
                </p>
              </div>
              <div className="col-sm-5 col-12 pull-right">
                <h3 className="subhadding1">Jawai Bandh</h3>
                <Image
                  src="/images/about-jawai1.jpg"
                  alt="About Jawai Bandh"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  className="img-responsive2"
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-5 col-12">
                <h3 className="subhadding1">Indian Leopards </h3>
                <Image
                  src="/images/crocodile1.jpg"
                  alt="Indian leopard"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  className="img-responsive2"
                />
              </div>
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Indian Leopards </h3>
                <p>
                  Undoubtedly, leopards are the major attraction of Jawai which
                  attracts tourists and wildlife enthusiasts in a great way. The
                  most interesting part of enjoying
                  <strong>Leopard Sighting</strong> is that these leopards are
                  familiar with the locals, so you can easily find them
                  wandering around the reserve area. <br />
                  <br />
                  <strong>Jawai Leopards</strong> are friendly in nature as they
                  live close to the human settlement. They only attract the wild
                  animals at night and do not hunt the livestock cattles of the
                  locals. Thus, Leopard Sighting in Jawai is full of fun and
                  exciting because you can easily locate them in their natural
                  habitat.
                </p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Crocodile Sighting</h3>
                <p>
                  The elongated stretch of <strong>Jawai River</strong> and
                  thousands of birds migrate around the dam side. It is the best
                  place to spot crocodiles in its natural habitat. The reptiles
                  are often seen basking and hunting on the river banks. They
                  can be witnessed from the dam and become one of the major
                  central attractions. <br />
                  <br />
                  You can closely witness their hunting activities or actions
                  while watching them basking over the dam side. The moment when
                  they go back to water to resume hunting, their hide can be
                  noticeable when they rest at the shore.
                </p>
              </div>
              <div className="col-sm-5 col-12 pull-right">
                <h3 className="subhadding1">Crocodile Sighting</h3>
                <Image
                  src="/images/birds1.jpg"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  alt="Crocodile Sighting"
                  className="img-responsive2"
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-5 col-12">
                <h3 className="subhadding1">Bird Watching</h3>
                <Image
                  src="/images/village-safari-jawai.jpg"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  alt="Bird Watching"
                  className="img-responsive2"
                />
              </div>
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Bird Watching</h3>
                <p>
                  Jawai is a heavenly place for bird-watching which can be
                  well-experienced during the months of October and March.
                  During these months, many beautiful migratory birds shelter in
                  the
                  <strong>Jawai Dam</strong>. Spot exotic bird species like bar
                  headed geese, sarus cranes, common eastern crane, knob-billed
                  duck, dermossile, spotbill duck, and flamingos.
                  <br />
                  <br />
                  Blessed with such a great variety of birds, Jawai is
                  absolutely a beautiful paradise for bird-watchers. There are
                  several birds and you get a perfect environment offering you a
                  great experience. This would be a great place to enjoy your
                  mind-blowing escape in the natural ambiance of Jawai.
                </p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Tribal Visit</h3>
                <p>
                  <strong>Tribal natives in Jawai</strong> are the tribes who
                  rear cattle and engage in farming for their living. It is not
                  that technology hasn't reached them or they are incapable of
                  moving to some big town. Watch out the cooking style of the
                  tribes who cook food in earthen hearts and have an amazing
                  sense of Rajasthani hospitality.
                  <br />
                  <br />
                  We conduct a special walk through the villages to give you an
                  insight into their rural lifestyle. It would be an excursion
                  of a lifetime for you and an ethereal experience that you
                  won't be able to forget. Stroll through the mud houses and
                  allow everyone to witness their lives as you go through their
                  chores.
                </p>
              </div>
              <div className="col-sm-5 col-12 pull-right">
                <h3 className="subhadding1">Tribal Visit</h3>
                <Image
                  src="/images/jawai-hills1.jpg"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  alt="Tribal Visit"
                  className="img-responsive2"
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-5 col-12">
                <h3 className="subhadding1">Jawai Hills</h3>
                <Image
                  src="/images/ranakpur.jpg"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  alt="Jawai Hills"
                  className="img-responsive2"
                />
              </div>
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Jawai Hills</h3>
                <p>
                  Gigantic granite hills surrounding the village of Jawai were
                  formed naturally decades before by Lava and these are the home
                  of many wild animals. These hills offer a great trekking
                  experience for adventure lovers.Though there are many
                  beautiful things to do like visiting the temple, wandering
                  around the rocks lets you feel the wilderness within the
                  vibes.
                  <br />
                  <br />
                  <strong>Jawai Hills</strong> are not abandoned till yet and
                  are a home to several animals and human beings. Today these
                  are a perfect spot for enjoying wildlife, bird, or nature
                  photography from the top of these hills. The rocky hills make
                  anyone feel of solitude and also bring you closer to nature
                  with a profound charm.
                </p>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="about_box2">
            <div className="row">
              <div className="col-sm-7 col-12">
                <h3 className="subhadding">Ranakpur Kumbhalgarh Excursion</h3>
                <p>
                  A drive for about 54.2 km from <strong>Jawai</strong>, lies
                  Ranakpur famous for its stunning Jain Temples. Ranakpur
                  showcases the sheer beauty of Jain architecture that amuses
                  the visitors by its fascinating art of structure. The major
                  attraction of <strong>Ranakpur</strong> takes you to Shri
                  Falna Swarna Jain Tirth (Golden Jain Temple), Ranakpur Dam,
                  and Narayan Temple.
                  <br />
                  <br />
                  Driving a few more kilometers 86.8 km, takes you to the most
                  beautiful destination of <strong>Kumbhalgarh</strong>. One of
                  the must-see places in Rajasthan, Khumbhalgarh is famous for
                  its majestic fortress, wildlife sanctuary, Parshuram Mahadev
                  Temple, Hammeripal Lake, and many different places.
                </p>
              </div>
              <div className="col-sm-5 col-12 pull-right">
                <h3 className="subhadding1">Ranakpur Kumbhalgarh Excursion</h3>
                <Image
                  src="/images/leopard1.jpg"
                  width="537"
                  height="443"
                  style={{ width: "100%", height: "auto" }}
                  alt="Ranakpur"
                  className="img-responsive2"
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export async function getStaticProps() {
  const contant = await getcontantEventById(2);
  return {
    props: {
      contantEvent: contant,
    },
    revalidate: 30,
  };
}

export default Aboutjawai;
