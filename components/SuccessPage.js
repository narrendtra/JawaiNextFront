import React, { Fragment } from "react";
import Link from "next/link";
import InnerTopBanner from "../components/InnerTopBanner";
const SuccessPage = () => {
  return (
    <Fragment>
      <InnerTopBanner />
      <div className="thank-you">
        <h1>Thank you !</h1>
        <p>Thanks for sending email to Jawainature. </p>
        <p>you should receive a confirmation email soon </p>
        <br />
        <Link href="/" className="btn btn-danger">
          Go Home
        </Link>
      </div>
    </Fragment>
  );
};

export default SuccessPage;
