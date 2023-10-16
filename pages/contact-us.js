import React, { Fragment, useState } from "react";
import Link from "next/link";
import { getAllEvents } from "../hooks/api-utils";
import SocialIcons from "../components/SocialIcons";
import InnerTopBanner from "../components/InnerTopBanner";
import ContactForm from "../components/ContactForm";
import MetaTags from "../components/MetaTags";

const ContactUs = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Fragment>
      <MetaTags
        title="Contact Us"
        description="Contact Us"
        keywords="Contact Us"
      />
      <InnerTopBanner cimage="" />
      <section className="contact-section">
        <div className="container">
          <h2 className="title">Contact Us</h2>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 contact-column">
              <div className="contact-info">
                <h3>Contact Info</h3>
                <div className="info-box">
                  <div className="single-info">
                    <h5>Address</h5>
                    <div className="text">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: props.cdata.address,
                        }}
                      />
                    </div>
                  </div>
                  <div className="single-info">
                    <h5>Phone</h5>
                    <div className="text">
                      <Link href={`tel:${props.cdata.phone}`}>
                        {props.cdata.phone}
                      </Link>
                    </div>
                  </div>
                  <div className="single-info">
                    <h5>Email</h5>
                    <div className="text">
                      <Link href={`mailto:${props.cdata.email}`}>
                        {props.cdata.email}
                      </Link>
                    </div>
                  </div>
                </div>
                <SocialIcons />
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
              <div className="contact-form-area">
                <ContactForm submitForm={submitForm} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="title">How to Reach</h2>
            <div className="table-responsive mt-2">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>
                      <Link href="how-to-reach">
                        <strong>By Road</strong>
                      </Link>
                    </td>
                    <td>
                      <Link href="how-to-reach">
                        <strong>By Train</strong>
                      </Link>
                    </td>
                    <td>
                      <Link href="how-to-reach">
                        <strong>By Air</strong>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const genEvents = await getAllEvents("api/general");
  return {
    props: {
      cdata: genEvents,
    },
    revalidate: 1800,
  };
}
export default ContactUs;
