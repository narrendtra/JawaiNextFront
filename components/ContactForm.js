import React, { Fragment } from "react";
import useForm from "../hooks/UseForm";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = (submitFrom) => {
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
      <form className="contact_form" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-sm-6">
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
          </div>
          <div className="col-sm-6">
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
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
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
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <input
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
                placeholder="City"
              />
              {errors.city && <p className="text-danger">{errors.city}</p>}
            </div>
          </div>
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
              sitekey="6Ld0srAiAAAAAEwdtRZvFD-SrmWQ4IeqNqsnkTgQ"
              onChange={handleRecaptchaChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <div className="button mt-2">
                <button disabled={isSubmitting} type="submit">
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
      <ToastContainer />
    </Fragment>
  );
};

export default ContactForm;
