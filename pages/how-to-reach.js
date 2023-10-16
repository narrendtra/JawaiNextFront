import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import MetaTags from "../components/MetaTags";
import InnerTopBanner from "../components/InnerTopBanner";
const Howtoreach = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Fragment>
      <MetaTags
        title="How to Reach Jawai Bandh, Rajasthan - Jawai Nature Stay"
        description="Check How to Reach Jawai Bandh, Rajasthan and the route connecting Jawai Nature Stay. Know the details of how to reach by road/trains/ flight from any location."
        keywords="How to Reach Jawai Bandh, Rajasthan - Jawai Nature Stay"
      />
      <InnerTopBanner cimage="" />
      <section className="inner section">
        <div className="container">
          <h2 className="title">How to Reach</h2>
          <p>
            Jawai is very well-connected with all the major tourist destinations
            through railways, roadways, or the nearest airport as well. Let's
            check all these three modes of reaching Jawai.
          </p>

          <div className="howreach">
            <div className="row">
              <div className="col-md-2 col-2">
                <Image
                  src="/images/how01.png"
                  width="512"
                  height="512"
                  style={{ width: "100%", height: "auto" }}
                  alt="how01"
                />
              </div>
              <div className="col-md-10 col-10">
                <h3>By Road</h3>
                <p>
                  The well-developed connectivity of Jawai to the major cities
                  of Rajasthan through roads makes it quite convenient to reach
                  the destination without any hassle. Enlist some of the major
                  cities and their distances to reach Jawai Nature Stay.
                </p>
                <div className="table-responsive mt-2">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Sumerpur</strong>
                        </td>
                        <td>
                          <strong>Mount Abu</strong>
                        </td>
                        <td>
                          <strong>Udaipur</strong>
                        </td>
                        <td>
                          <strong>Ahmedabad</strong>
                        </td>
                        <td>
                          <strong>Kumbhalgarh</strong>
                        </td>
                        <td>
                          <strong>Jodhpur</strong>
                        </td>
                        <td>
                          <strong>Jaipur</strong>
                        </td>
                        <td>
                          <strong>Delhi</strong>
                        </td>
                        <td>
                          <strong>Mumbai</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>24 km</td>
                        <td>94 km</td>
                        <td>136 km</td>
                        <td>280 km</td>
                        <td>86 km</td>
                        <td>165 km</td>
                        <td>396 km</td>
                        <td>661 km</td>
                        <td>801 km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="howreach">
            <div className="row">
              <div className="col-md-2 col-2">
                <Image
                  src="/images/how01.png"
                  width="512"
                  height="512"
                  style={{ width: "100%", height: "auto" }}
                  alt="how01"
                />
              </div>
              <div className="col-md-10 col-10">
                <h3>By Train</h3>
                <p>
                  Nearest to Jawai, there are three stations and these all
                  frequently come enroute in most train routes. The nearest
                  railway station is in Mori Bera, which is only 4 kms away, the
                  next is Jawai Bandh, and the last one is Falna. Trains to
                  Jawai are available from several destinations like Mumbai,
                  Delhi, Udaipur, Jaipur, and Ahmedabad, so reaching here is not
                  a difficulty.
                </p>
                <div className="table-responsive mt-2">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Mori Bera (MOI) Railway Station</strong>
                        </td>
                        <td>
                          <strong>Jawai Bandh (JWB) Railway Station</strong>
                        </td>
                        <td>
                          <strong>Falna (FA) Railway Station</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>4 km</td>
                        <td>15 km</td>
                        <td>35 km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="howreach">
            <div className="row">
              <div className="col-md-2 col-2">
                <Image
                  src="/images/how01.png"
                  width="512"
                  height="512"
                  style={{ width: "100%", height: "auto" }}
                  alt="how01"
                />
              </div>
              <div className="col-md-10 col-10">
                <h3>By Air</h3>
                <p>
                  Those who prefer travelling by airways, can book their flights
                  to reach Jawai. There are 5 major airports close to Jawai and
                  these are located in Delhi, Jaipur, Jodhpur, Udaipur, and
                  Ahmedabad. On arrival at the airport, you can directly hire a
                  cab or taxi to reach Jawai or take other modes of transfers.
                </p>
                <div className="table-responsive mt-2">
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Jodhpur Airport</strong>
                        </td>
                        <td>
                          <strong>Udaipur Airport</strong>
                        </td>
                        <td>
                          <strong>Ahmedabad Airport</strong>
                        </td>
                        <td>
                          <strong>Jaipur Airport</strong>
                        </td>
                        <td>
                          <strong>Delhi Airport</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>170 km</td>
                        <td>149 km</td>
                        <td>270 km</td>
                        <td>400 km</td>
                        <td>650 km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Howtoreach;
