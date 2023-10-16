import React from "react";
import Image from "next/image";
const AccountDetail = () => {
  return (
    <section className="accommo">
      <div className="container">
        <h2 className="title">Bank Account Details </h2>
        <div className="row">
          <div className="col-md-8">
            <table className="table   table-light">
              <thead>
                <tr>
                  <td>
                    <strong>Bank Name :-</strong>
                  </td>
                  <td>HDFC Bank</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Name :-</strong>
                  </td>
                  <td>Jawai nature stay private limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ac no. :-</strong>
                  </td>
                  <td>50200066726602</td>
                </tr>
                <tr>
                  <td>
                    <strong>IFSC Code :-</strong>
                  </td>
                  <td>HDFC0005306</td>
                </tr>
                <tr>
                  <td>
                    <strong>Branch :-</strong>
                  </td>
                  <td>Kings Road, Nirman Nagar, Jaipur-302019</td>
                </tr>
                <tr>
                  <td>
                    <strong>UPI Id :-</strong>
                  </td>
                  <td>jawainaturestaypriva.62386829@hdfcbank</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <Image src="/images/bank.jpg" width="400" height="700" alt="bank" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetail;
