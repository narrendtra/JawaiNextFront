import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "../lib/axios";
const SafariBooking = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const initialFormData = {
    room: "",
    no_person: "",
    arrival_date: "",
    safari_type: "",
    name: "",
    email: "",
    mobile: "",
    messages: "",
  };
  const [values, setValues] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      toast("Please complete the reCAPTCHA.");
      setIsSubmitting(false);
    }
    setIsSubmitting(true);
    if (errors) {
      setErrors({});
    }
    // Send form data to an API route

    const BookingData = {
      room: values.room,
      no_person: values.no_person,
      arrival_date: values.arrival_date,
      safari_type: values.safari_type,
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      messages: values.messages,
      recaptchaToken: recaptchaValue,
    };
    try {
      const response = await axios.post("/api/sendSafari", BookingData);
      if (response.data.status === 200) {
        toast(response.data.msg);
        setIsSubmitting(false);
        setErrors({});
        setValues(initialFormData);
      } else if (response.data.status === 400) {
        toast(response.data.error);
        setErrors(response.data.error);
        setIsSubmitting(false);
        setValues(initialFormData);
      }
      // Handle success or redirect to a success page
    } catch (error) {
      toast("Error submitting form:", error);
      setIsSubmitting(false);
      // Handle error
    }
  };
  return (
    <Fragment>
      <div className="online_booking_form_div">
        <div className="right_form">
          <h2>Jawai Leopard Safari Booking</h2>
          <form
            className="form text-left"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-sm-2">
                <div className="form-group">
                  <label>Number of Gypsy </label>
                  <select
                    name="room"
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option defaultValue="1">1</option>
                    <option defaultValue="2">2</option>
                    <option defaultValue="3">3</option>
                    <option defaultValue="4">4</option>
                    <option defaultValue="5">5</option>
                  </select>
                  {errors.room && <p className="text-danger">{errors.room}</p>}
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Number of Persons </label>
                  <input
                    name="no_person"
                    type="text"
                    className="form-control"
                    value={values.no_person}
                    onChange={handleChange}
                    placeholder="No of Person"
                  />
                  {errors.no_person && (
                    <p className="text-danger">{errors.no_person}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Date of Safari</label>
                  <input
                    type="date"
                    name="arrival_date"
                    className="form-control"
                    value={values.arrival_date}
                    onChange={handleChange}
                    placeholder="Arrival Date"
                  />
                  {errors.arrival_date && (
                    <p className="text-danger">{errors.arrival_date}</p>
                  )}
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
                          name="safari_type[]"
                          value="Morning Safari"
                        />
                        <label
                          className="form-check-labesl"
                          htmlFor="exampleCheck1"
                        >
                          Morning Safari
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
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
                    {errors.safari_type && (
                      <p className="text-danger">{errors.safari_type}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Contact</label>
                  <input
                    name="mobile"
                    type="text"
                    className="form-control"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                  {errors.mobile && (
                    <p className="text-danger">{errors.mobile}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="col-sm-12">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="messages"
                    className="form-control"
                    value={values.messages}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                  />
                </div>

                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="button">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-dark mt-2"
                    >
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      ) : (
                        "Submit"
                      )}
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
