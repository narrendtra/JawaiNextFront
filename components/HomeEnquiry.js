import React, { Fragment } from "react";
import useForm from "../hooks/UseHome";
import ReCAPTCHA from "react-google-recaptcha";
const HomeEnquiry = (submitFrom) => {
  const {
    handleChange,
    handleFormSubmit,
    handleRecaptchaChange,
    errors,
    values,
    isSubmitting,
    ToastContainer,
  } = useForm(submitFrom);
  return (
    <Fragment>
      <div className="quick-section">
        <h2>Quick Enquiry</h2>
        <div className="quick-form-area">
          <form className="form" id="quick" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                name="phone"
                type="text"
                value={values.phone}
                onChange={handleChange}
                placeholder="Mobile"
              />
              {errors.phone && <p className="text-danger">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <input
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
                placeholder="Arrival Date"
              />
              {errors.date && <p className="text-danger">{errors.date}</p>}
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea
                    name="messages"
                    value={values.messages}
                    onChange={handleChange}
                    placeholder="Message"
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
                  <div className="button mt-2">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn"
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
      <ToastContainer />
    </Fragment>
  );
};

export default HomeEnquiry;
