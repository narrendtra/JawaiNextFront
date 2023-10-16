import React, { Fragment, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const FaqList = () => {
  const [key, setKey] = useState("tab01");
  return (
    <Fragment>
      <section className="inner section">
        <div className="container">
          <h2 className="title">FAQ</h2>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="tab01" title="About Safari">
              <div className="row">
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How to book a Leopard Safari?
                    </h4>
                    <div className="new_faq_text">
                      Booking Leopard Safari is just a few steps ahead, you can
                      simply book your safari at our website, here's a link
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. When should I plan a visit to spot leopards in Jawai?
                    </h4>
                    <div className="new_faq_text">
                      Being a hilly region and plains in Jawai, spotting
                      leopards are quite easy to spot in the landmark of Jawai.
                      Although, if you wish to maximize the probability, then
                      plan your vacations during the months of winter season
                      (October to March). Jungle safari is conducted twice a day
                      throughout the year, i.e. in the morning and evening. So,
                      you can spot the tigers anytime, anywhere.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What is the probability of viewing a leopard in Jawai?
                    </h4>
                    <div className="new_faq_text">
                      The probability of spotting leopards in Jawai is more than
                      99.9% all around the year.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What are the timings of Leopard Safari in Jawai?
                    </h4>
                    <div className="new_faq_text">
                      Morning Safari starts at 05:00 am and in the evening
                      conducts from 04:00 pm. Each safari lasts for
                      approximately 3 to 4 hrs.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What to carry for a leopard safari?
                    </h4>
                    <div className="new_faq_text">
                      Carry some jungle safari essentials like binoculars,
                      camera, shoes, cap/hat, and safari clothes. Also, don't
                      forget to carry medicines, if prescribed by a doctor for
                      your health conditions. Rest, your vacations in Jawai
                      would be full-of joys, so be ready for a thriller to
                      experience.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How much time would a safari ride take?
                    </h4>
                    <div className="new_faq_text">
                      In Jawai, the leopard safaris lasts for approximately 3 to
                      4 hrs.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How many people can accommodate in gypsy?
                    </h4>
                    <div className="new_faq_text">
                      Gypsy is the only way of enjoying a leopard safari in
                      Jawai and it can easily accommodate 7 people at a time.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Is 1 day sufficient for enjoying all the activities?
                    </h4>
                    <div className="new_faq_text">
                      We highly recommend our guests to have a complete tour of
                      Jawai and get engaged in other outdoor activities along
                      with leopard safari. Besides spotting leopards in its
                      natural habitat, there are many other things to enjoy here
                      like crocodile sighting, rabari walk, community visit,
                      bird watching, bonfire with friends, dinner in a pleasant
                      surrounding, and more of a kind. So, it would become hasty
                      if you visit just for a day, thus it would be great to
                      enjoy a minimum of 2 days trip to Jawai and maximum of 3
                      days.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Can I book safaris even after reaching the resort?
                    </h4>
                    <div className="new_faq_text">
                      Yes, it can be possible. You can book extra safari if you
                      are willing to do more safari sighting in the jungle
                      reserve. We've a fleet of jeeps that can take multiple
                      groups on a ride at the same time, but if all these are
                      already booked, then it would be difficult to manage. So,
                      it is good to book safari as early as possible.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Do Jawai leopards cause any harm to human beings?
                    </h4>
                    <div className="new_faq_text">
                      No, leopards in Jawai are human-friendly in nature. They
                      live with humans in Jawai for decades and there hasn't
                      been a single attack on humans reported till yet. The
                      local tribes take their cattles for gazing to the
                      riverside, but leopards don't attack even the cattles when
                      they are accompanied by humans. So, it is ideally safe for
                      humans to enjoy safari without any fear of leopard attack.
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab02" title="About Resort">
              <div className="row">
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How to reach Jawai Nature Stay?
                    </h4>
                    <div className="new_faq_text">
                      The resort is quite closer to Jawai wildlife reserve and
                      Railway Station. It resides on the periphery of wildlife
                      reserve, so it's easy to reach here.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Do you offer pick-up and drop facilities?
                    </h4>
                    <div className="new_faq_text">
                      Yes, we are providing pickup and drop services from the
                      nearest airports, railway stations, or bus stations. The
                      charges for pickup or drop would be separately charged as
                      per the locations.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How many people can stay in a single tent?
                    </h4>
                    <div className="new_faq_text">
                      2 adults are allowed to stay in a single tent with 2
                      children below 6 year.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Do emergency medical facilities are available at the
                      resort?
                    </h4>
                    <div className="new_faq_text">
                      We are having first-aid facilities available at the resort
                      which includes all essential bandages, antiseptics, and
                      basic medications. If the condition gets worse, there's a
                      government hospital where the patient will be transferred
                      quickly.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How many extra beds can you have in one room?
                    </h4>
                    <div className="new_faq_text">
                      Lastly, you can get a maximum of 2 additional beds in the
                      room.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Is Parking space available at the resort?
                    </h4>
                    <div className="new_faq_text">
                      Yes, we've a separate space for parking where you can park
                      your vehicle.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Can I bring my pet to the resort?
                    </h4>
                    <div className="new_faq_text">
                      No, it is recommended to avoid bringing the pet because
                      they can attract the attention of the leopard and other
                      animals and could incite them to attack the jeep on a
                      safari trail.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Is a wi-fi facility available in the premises?
                    </h4>
                    <div className="new_faq_text">
                      Due to the lack of network availability in this area, we
                      are unable to offer this service currently. We are so sure
                      that sooner we'll be able to provide this facility to our
                      guests.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Are you protecting wildlife in India during COVID-19?
                    </h4>
                    <div className="new_faq_text">
                      Jawai Nature Stay is making a serious effort in a bid to
                      guard wildlife during COVID-19 outbreak. Upon arriving and
                      before boarding the safari, our guests go through the
                      thermal scanning and wear masks compulsorily throughout
                      the ride. Keeping social distancing is highly important
                      even during the jeep safari along with during the tents.
                      The jeeps are sanitized after or before every ride, the
                      rooms and the entire property. We offer fresh home-grown
                      organic food, so the guests can remain assured of a safe
                      and healthy diet.
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab03" title="About Jawai">
              <div className="row">
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What is the best time to visit Jawai?
                    </h4>
                    <div className="new_faq_text">
                      Jawai is the best place where you can spot leopards
                      throughout the year. Though, if you want to maximize the
                      chances just in case, then you can plan the tour during
                      the months of September and March.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Is jawai Bandh safe to enjoy wildlife?
                    </h4>
                    <div className="new_faq_text">
                      Jawai Bandh is actually safer than various other places,
                      especially during the COVID-19. It is an isolated region
                      and the least people travel here. However, the resort
                      provides you sanitized tents that are placed far from each
                      other. So, you don't have to worry about safety, as we do
                      not compromise with it.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Are there some other places to visit near Jawai Bandh?
                    </h4>
                    <div className="new_faq_text">
                      Yes, there are as many as possible like Dev Giri Temple,
                      Abhinav Mahavir Dham, Kambeshwar Mahadev Temple, Tribal
                      Excursion, Jawai Hills, Ranakpur Jain Temples, and
                      Kumbhalgarh Fort. These sacred places are located in hilly
                      terrains and visiting them would be an amazing experience.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Is it safe to stay in a tent in Jawai Forests?
                    </h4>
                    <div className="new_faq_text">
                      Yes, it is safe to stay in a tented accommodation in Jawai
                      Forests.
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab04" title="Payment & Booking">
              <div className="row">
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How to book a stay in Jawai Nature Stay?
                    </h4>
                    <div className="new_faq_text">
                      Booking a stay with us is quite easy; you can make
                      bookings through our website –
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What's the check-in and check-out timing?
                    </h4>
                    <div className="new_faq_text">
                      Check-in 1:00 PM and check-out 10:00 AM
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Can I book a stay via mail or call?
                    </h4>
                    <div className="new_faq_text">
                      Yes, we make the booking procedure easy and effortless for
                      our guests. If you are comfortable booking your room over
                      a call or email, we can take it and confirm as like the
                      way you want.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What is the Payment Refund Policy of Resort?
                    </h4>
                    <div className="new_faq_text">
                      If you cancel the safari or stay, you'll get the refund
                      depending on the situations under which we have to cancel
                      the bookings. Instead of following standard terms, we
                      believe in taking a humane approach, understanding the
                      needs of customers, and thus we determine the amount of
                      refund on varied cases.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. How can I make payment online?
                    </h4>
                    <div className="new_faq_text">
                      We take payments by using debit/credit card, net banking,
                      Paytm, and Paypal.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What are your policies for early check-in or late
                      check-out?
                    </h4>
                    <div className="new_faq_text">
                      Well, this depends on the availability, you have to
                      contact the reception to clear it.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. What are the documents required to show at the time of
                      check-in?
                    </h4>
                    <div className="new_faq_text">
                      The guests have to carry their ID Proofs, and
                      international tourists have to show their visa and
                      passport.
                    </div>
                  </div>

                  <div className="faqBox">
                    <h4 className="new_faq">
                      Q. Do you provide offers on bulk or corporate bookings?
                    </h4>
                    <div className="new_faq_text">
                      Yes, we certainly have offers for bulk and corporate
                      bookings and to avail them, you have to talk to our
                      representative.
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </Fragment>
  );
};

export default FaqList;
