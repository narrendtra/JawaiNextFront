import React, { Fragment, useEffect } from "react";
import InnerTopBanner from "../components/InnerTopBanner";
import SafariBooking from "../components/SafariBooking";
import FaqList from "../components/FaqList";
import MetaTags from "../components/MetaTags";
const LeoparBooking = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <MetaTags
        title="Jawai Leopard Safari Booking"
        description="Jawai Leopard Safari Booking"
        keywords="Jawai Leopard Safari Booking"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Jawai Leopard Safari Booking</h2>
          <p>
            The wilderness of Jawai and the beauty of this area is understood to
            be the most captivating and logical reason behind the population of
            leopards in Jawai. The thicket Boswellia Serrata and the presence of
            water because of Jawai Dam itself is a great reason behind making
            this place charming with the presence of this printed shy cat
            wrapped in a golden base with black spotted jacket.
            <br />
            <br />
            Among the most interesting and engaging{" "}
            <strong>things to do in Jawai, Jawai Jungle Safari</strong> tops the
            list being the most interesting and adventurous pick for every age
            group. We at Jawai Nature Stay not only provide the safari facility
            to our in-house guests only but also this best known part as
            speciality is also open for walk-ins.
            <br />
            <br />
            <strong>Morning &amp; Afternoon Safari- What to expect</strong>
            <br />
            <br />
            For the sake of convenience and complete satisfaction of proper
            sighting experience, we have carefully crafted our Bera Leopard
            Safari schedule. We conduct this tour in the morning as well as in
            the afternoon/evening (timings differ depending upon season) shifts.
            <br />
            <br />
            You can pick any or both of the options from{" "}
            <strong>Jawai Leopard Safari Timings</strong> as follows:
            <br />
            <br />
            <strong>Morning Safari</strong>: The morning safari begins at around
            5 am and it is considered the best one among the two as just before
            rising sun, Leopard set out for hunting leaving cubs behind. Not
            only sighting of leopards is the only motive during this safari
            batch, but also spotting amazing birds of Jawai is another hidden
            benefit. Avifauna become active one hour before sunrise and start
            their search for food.
            <br />
            <br />
            <strong>Evening Safari:</strong> The scenic ambiance and feel of
            this place becomes much more exciting with the tint of evening sun
            on its hills. The evening safari is conducted around 4 pm (timings
            differ slightly in winters &amp; summers). The best part about
            picking an evening Jawai Safari Booking is that capturing the
            panoramic beauty of Jawai from a cliff during sunset is an
            astonishingly beautiful experience.
            <br />
            <br />
            <strong>Jawai Leopard Safari Online Booking</strong>
            <br />
            <br />
            The <strong>online safari booking</strong> facility is available on
            our website with 24*7 assistance where after confirming the date of
            arrival and number of persons, we pre-book the complete safari
            package with a bare minimum token amount.
            <br />
            <br />
            Our dedicated responsive staff from the front desk keep always ready
            to assist with safari related queries and assistance. Following very
            simple steps, you can book safari specifying details required to
            make a reservation on your name.
            <br />
            <br />
            <strong>What to Expect</strong>
            <br />
            One vehicle of the safari can accommodate 4 individuals only Driver
            of safari vehicle are trained professionals An escorting safari
            guide can be arranged upon request Spot specific high-tea can be
            arranged on request
            <br />
            <br />
            <strong>Things to Remember</strong>
            <br />
          </p>
          <ul>
            <li>Do not wear loose fitting clothes</li>
            <li>
              During summers it is advisable to cover your body with covered
              clothing
            </li>
            <li>
              Sunscreen is the best friend of skin during day time safaris
            </li>
            <li>Carry your sun protective eye gears</li>
            <li>
              A hat or cap is good for protection from a scorching heat wave.
            </li>
          </ul>

          <h2 className="title">
            Jawai Leopard Safari Timings For Winter And Summer
          </h2>
          <div className="tariff_list">
            <ul>
              <li>
                Summer Season – Morning: 5:00AM – 8:00AM and Evening: 5:00PM –
                8:00PM
              </li>
              <li>
                Winter Season – Morning: 6:00AM – 9:00AM and Evening: 4:00PM –
                7:00PM
              </li>
              <li>
                Bird, Crocodile &amp; Jawai Dam Visit - Morning 8:00AM - 11:00AM
              </li>
              <li>Village Safari - Morning 10:00AM - 1:00PM</li>
            </ul>
          </div>
          <section className="section ourProjects" id="our-projects">
            <div className="col-md-12">
              <h2 className="title">Leopard Safari Booking Tariff</h2>
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <tbody>
                    <tr align="center">
                      <td>
                        <strong>Safari Type </strong>{" "}
                      </td>
                      <td>
                        <strong>Timing</strong>
                      </td>
                      <td>
                        <strong>Vehicle Type</strong>
                      </td>
                      <td>
                        <strong>Rate</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Leopard Safari (Morning)</td>
                      <td>5:00 AM</td>
                      <td>Private</td>
                      <td>(65 USD) 4500 INR Per Gypsy Per Safari</td>
                    </tr>
                    <tr>
                      <td>Leopard Safari (Evening)</td>
                      <td>4:00 PM</td>
                      <td>Private</td>
                      <td>(65 USD) 4500 INR Per Gypsy Per Safari</td>
                    </tr>
                    <tr>
                      <td>Bird, Crocodile &amp; Jawai Dam Visit (Morning)</td>
                      <td>8:00 AM</td>
                      <td>Private</td>
                      <td>(65 USD) 4500 INR Per Gypsy Per Safari </td>
                    </tr>
                    <tr>
                      <td>Village Safari (Morning)</td>
                      <td>10:00 AM</td>
                      <td>Private</td>
                      <td>(65 USD) 4500 INR Per Gypsy Per Safari </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <SafariBooking />
        </div>
      </section>

      <FaqList />
    </Fragment>
  );
};

export default LeoparBooking;
