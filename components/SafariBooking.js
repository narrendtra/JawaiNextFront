import React, { Fragment } from "react";
const SafariBooking = () => {
  return (
    <Fragment>
      <div className="online_booking_form_div">
        <div className="right_form">
          <h2>Jawai Leopard Safari Booking</h2>
          <form
            id="safari"
            className="form text-left"
            method="post"
            autoComplete=""
          >
            <div className="row">
              <div className="col-sm-2">
                <div className="form-group">
                  <label>Number of Gypsy </label>
                  <select name="room" className="form-control" id="room_id">
                    <option defaultValue="1">1</option>
                    <option defaultValue="2">2</option>
                    <option defaultValue="3">3</option>
                    <option defaultValue="4">4</option>
                    <option defaultValue="5">5</option>
                  </select>
                  <div className="text-red" id="room_id_error"></div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Number of Persons </label>
                  <input
                    name="date"
                    id="no_persons"
                    type="text"
                    className="form-control"
                  />
                  <div className="text-red" id="persons_error"></div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Date of Safari</label>
                  <input
                    name="date"
                    id="checkout"
                    type="date"
                    className="form-control"
                  />
                  <div className="text-red" id="checkout_error"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Select Your Safari</label>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          id="safari_type1"
                          name="safari_type[]"
                          value="Morning Safari"
                        />
                        <label
                          className="form-check-labesl"
                          htmlFor="exampleCheck1"
                        >
                          {" "}
                          Morning Safari{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          id="safari_type2"
                          name="safari_type[]"
                          value="Evening Safari"
                        />
                        <label
                          className="form-check-labes2"
                          htmlFor="exampleCheck2"
                        >
                          {" "}
                          Evening Safari{" "}
                        </label>
                      </div>
                    </div>
                    <div className="text-red" id="safari_type_error"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                  />
                  <div className="text-red" id="name_error"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Contact</label>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    className="form-control"
                  />
                  <div className="text-red" id="phone_error"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                  />
                  <div className="text-red" id="email_error"></div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="messages"
                    rows="4"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="button">
                    <button
                      type="button"
                      id="safbookid"
                      className="btn btn-dark"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SafariBooking;
