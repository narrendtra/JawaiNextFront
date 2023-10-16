import React, { Fragment } from "react";
import AccountDetail from "../components/AccountDetail";
import FaqList from "../components/FaqList";
import InnerTopBanner from "../components/InnerTopBanner";
import InterestedBooking from "../components/InterestedBooking";
import MetaTags from "../components/MetaTags";
import QueryForm from "../components/QueryForm";

const tariff = () => {
  return (
    <Fragment>
      <MetaTags
        title="Resort Tariff | Best Resort in Jawai Bandh, Rajasthan | Jawai Nature Stay"
        description="While booking a stay at the Best Resort in Jawai Bandh, Rajasthan check out the Resort Tariff complying all the necessary details of Jawai Nature Stay."
        keywords="Resort Tariff | Best Resort in Jawai Bandh, Rajasthan | Jawai Nature Stay"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">Tariff Chart</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td align="center">
                    <strong>Room Type</strong>
                  </td>
                  <td align="center">
                    <strong>Date</strong>
                  </td>
                  <td align="center">
                    <strong>Tariff Weekdays</strong>
                  </td>
                  <td align="center">
                    <strong>Tariff Weekend</strong>
                  </td>
                  <td align="center">
                    <strong>Plans</strong>
                  </td>
                </tr>

                <tr>
                  <td>Swiss Tent 14 x 28 2Adult+1Chidren</td>
                  <td>1st March, 2022 to 31st March, 2023</td>
                  <td>8500 INR Per Night</td>
                  <td>9500 INR Per Night</td>
                  <td>APAI</td>
                </tr>
                <tr>
                  <td>Deluxe Swiss Tent 16 x 32 2Adult+1Chidren</td>
                  <td>1st March, 2022 to 31st March, 2023</td>
                  <td>9500 INR Per Night</td>
                  <td>10500 INR Per Night</td>
                  <td>APAI</td>
                </tr>
                <tr>
                  <td>Family Room 400 sq.ft. 4Adult+2Chidren</td>
                  <td>1st March, 2022 to 31st March, 2023</td>
                  <td>15000 INR Per Night</td>
                  <td>16500 INR Per Night</td>
                  <td>APAI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col-md-8">
              <p>
                <strong>Terms &amp; Condition :</strong>
              </p>
              <div className="tariff_list">
                <ul>
                  <li>
                    Check-in time begins at 12:00 pm and Check-out time is at
                    11:00 am. Early or late check-ins or check-outs can be
                    requested but not guaranteed.
                  </li>
                  <li>
                    Rates provided in the tariff chart are not applicable on
                    special occasions like Holi, Diwali, New Year, Christmas and
                    others.
                  </li>
                  <li>
                    Jawai Nature Stay is a pet friendly space. Although, the
                    front desk can assist you with nearby kennel reservation.
                  </li>
                  <li>
                    A deposit of 1 night would be applicable along with tax and
                    any applicable package elements will be charged at the time
                    of booking.
                  </li>
                  <li>
                    Cancellation on bookings can be requested by or before 4:00
                    pm, 10 days prior to arrival for a full refund. Reservation
                    canceled within 10 days will forfeit 1N room charge plus
                    tax. Advance payment rates are not subjected to this
                    cancellation policy.
                  </li>
                  <li>All the taxes will be levied as per government norms.</li>
                  <li>
                    Large / Double Beds will be available subject to
                    availability.
                  </li>
                  <li>
                    Rooms Allotment will be done as per availability at the time
                    of check-in. Adjoining rooms can only be requested but not
                    guaranteed.
                  </li>
                  <li>
                    <strong>
                      Smoking is strictly prohibited in all rooms and tents
                    </strong>
                  </li>
                  <li>
                    Children above the age of 8 years will be calculated as an
                    extra person and will be charged additionally.{" "}
                  </li>
                  <li>
                    For accessing the Swimming Pool, swimming costumes and head
                    caps are a must for male, female and kids.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <p>
                <strong>Tariff included following services:</strong>
              </p>
              <div className="tariff_list">
                <ul>
                  <li>Evening guest room turndown service</li>
                  <li>Resort parking </li>
                  <li>Morning coffee &amp; tea</li>
                  <li>Local and toll free calls </li>
                  <li>Farm visit </li>
                  <li>Other farm activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InterestedBooking />
      <AccountDetail />
      <QueryForm />
      <FaqList />
    </Fragment>
  );
};

export default tariff;
