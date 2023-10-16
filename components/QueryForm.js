import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

import axios from "../lib/axios";
const QueryForm = (props) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const initialFormData = {
    checkin: "",
    checkout: "",
    no_traveller: "",
    children: "",
    name: "",
    email: "",
    mobile: "",
    messages: "",
    hiddenField: props.title,
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
      hiddenField: values.hiddenField,
      checkin: values.checkin,
      checkout: values.checkout,
      no_traveller: values.no_traveller,
      children: values.children,
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      messages: values.messages,
      recaptchaToken: recaptchaValue,
    };
    try {
      const response = await axios.post("/api/sendBooking", BookingData);
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
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-md-auto">
          <div className="online_booking_form_div">
            <h2> Booking Inquiry</h2>
            <div className="right_form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Checkin Date</label>
                      <input
                        type="date"
                        name="checkin"
                        className="form-control"
                        value={values.checkin}
                        onChange={handleChange}
                        placeholder="checkin Date"
                      />
                      {errors.checkin && (
                        <p className="text-danger">{errors.checkin}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Checkout Date </label>
                      <input
                        type="date"
                        name="checkout"
                        className="form-control"
                        value={values.checkout}
                        onChange={handleChange}
                        placeholder="Checkout Date"
                      />
                      {errors.checkout && (
                        <p className="text-danger">{errors.checkout}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>No. of Traveller</label>
                      <input
                        type="text"
                        name="no_traveller"
                        className="form-control"
                        value={values.no_traveller}
                        onChange={handleChange}
                        placeholder="No of Traveller"
                      />
                      {errors.no_traveller && (
                        <p className="text-danger">{errors.no_traveller}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>No. of Children</label>
                      <input
                        type="text"
                        name="children"
                        className="form-control"
                        value={values.children}
                        onChange={handleChange}
                        placeholder="No of children"
                      />
                      {errors.children && (
                        <p className="text-danger">{errors.children}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
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
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email Id</label>
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
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Contact No</label>
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
                    <ReCAPTCHA
                      sitekey="6Ld0srAiAAAAAEwdtRZvFD-SrmWQ4IeqNqsnkTgQ"
                      onChange={handleRecaptchaChange}
                    />
                  </div>

                  <div className="col-sm-6">
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
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="button">
                        <input
                          type="hidden"
                          name="hiddenField"
                          value={values.hiddenField}
                        />

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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QueryForm;
