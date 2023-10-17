import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "../lib/axios";
const TourBooking = (props) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    country: "",
    arrival_date: "",
    car_required: "",
    adults: "",
    children: "",
    messages: "",
    agree: "",
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
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      country: values.country,
      arrival_date: values.arrival_date,
      car_required: values.car_required,
      adults: values.adults,
      children: values.children,
      messages: values.messages,
      agree: values.agree,
      recaptchaToken: recaptchaValue,
    };
    try {
      const response = await axios.post("/api/sendTour", BookingData);
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
      <div className="your-res">
        <div className="container">
          <div className="online_booking_form_div">
            <h2>Tour Booking</h2>
            <form method="post" onSubmit={handleSubmit}>
              <div className="tour_form">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Full Name</label>
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
                  <div className="col-sm-3">
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
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Contact No.</label>
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
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Counrty</label>
                      <select
                        name="country"
                        onChange={handleChange}
                        className="form-control"
                        id="country"
                      >
                        <option select="" defaultValue="">
                          Select Country
                        </option>
                        <option defaultValue="Afghanistan">Afghanistan</option>
                        <option defaultValue="Albania">Albania</option>
                        <option defaultValue="Algeria">Algeria</option>
                        <option defaultValue="American Samoa">
                          American Samoa
                        </option>
                        <option defaultValue="Andorra">Andorra</option>
                        <option defaultValue="Angola">Angola</option>
                        <option defaultValue="Anguilla">Anguilla</option>
                        <option defaultValue="Antarctica">Antarctica</option>
                        <option defaultValue="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option defaultValue="Argentina">Argentina</option>
                        <option defaultValue="Armenia">Armenia</option>
                        <option defaultValue="Aruba">Aruba</option>
                        <option defaultValue="Australia">Australia</option>
                        <option defaultValue="Austria">Austria</option>
                        <option defaultValue="Azerbaijan">Azerbaijan</option>
                        <option defaultValue="Bahamas">Bahamas</option>
                        <option defaultValue="Bahrain">Bahrain</option>
                        <option defaultValue="Bangladesh">Bangladesh</option>
                        <option defaultValue="Barbados">Barbados</option>
                        <option defaultValue="Belarus">Belarus</option>
                        <option defaultValue="Belgium">Belgium</option>
                        <option defaultValue="Belize">Belize</option>
                        <option defaultValue="Benin">Benin</option>
                        <option defaultValue="Bermuda">Bermuda</option>
                        <option defaultValue="Bhutan">Bhutan</option>
                        <option defaultValue="Bolivia">Bolivia</option>
                        <option defaultValue="Bosnia &amp; Herzegovina">
                          Bosnia &amp; Herzegovina
                        </option>
                        <option defaultValue="Botswana">Botswana</option>
                        <option defaultValue="Brazil">Brazil</option>
                        <option defaultValue="British IndianOcean">
                          British IndianOcean
                        </option>
                        <option defaultValue="British Virgin Islands">
                          British Virgin Islands
                        </option>
                        <option defaultValue="Brunei">Brunei</option>
                        <option defaultValue="Bulgaria">Bulgaria</option>
                        <option defaultValue="Burkina Faso">
                          Burkina Faso
                        </option>
                        <option defaultValue="Burundi">Burundi</option>
                        <option defaultValue="Cambodia">Cambodia</option>
                        <option defaultValue="Cameroon">Cameroon</option>
                        <option defaultValue="Canada">Canada</option>
                        <option defaultValue="Cape Verde">Cape Verde</option>
                        <option defaultValue="Cayman Islands">
                          Cayman Islands
                        </option>
                        <option defaultValue="Central African Rep.">
                          Central African Rep.
                        </option>
                        <option defaultValue="Chad">Chad</option>
                        <option defaultValue="Chile">Chile</option>
                        <option defaultValue="China">China</option>
                        <option defaultValue="Christmas Island">
                          Christmas Island
                        </option>
                        <option defaultValue="Cocos Islands">
                          Cocos Islands
                        </option>
                        <option defaultValue="Colombia">Colombia</option>
                        <option defaultValue="Comoros">Comoros</option>
                        <option defaultValue="Congo">Congo</option>
                        <option defaultValue="Cook Islands">
                          Cook Islands
                        </option>
                        <option defaultValue="Costa Rica">Costa Rica</option>
                        <option defaultValue="Croatia">Croatia</option>
                        <option defaultValue="Cuba">Cuba</option>
                        <option defaultValue="Cyprus">Cyprus</option>
                        <option defaultValue="Czech Republic">
                          Czech Republic
                        </option>
                        <option defaultValue="Denmark">Denmark</option>
                        <option defaultValue="Djibouti">Djibouti</option>
                        <option defaultValue="Dominica">Dominica</option>
                        <option defaultValue="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option defaultValue="East Timor">East Timor</option>
                        <option defaultValue="Ecuador">Ecuador</option>
                        <option defaultValue="Egypt">Egypt</option>
                        <option defaultValue="El Salvador">El Salvador</option>
                        <option defaultValue="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option defaultValue="Eritrea">Eritrea</option>
                        <option defaultValue="Estonia">Estonia</option>
                        <option defaultValue="Ethiopia">Ethiopia</option>
                        <option defaultValue="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option defaultValue="Faroe Islands">
                          Faroe Islands
                        </option>
                        <option defaultValue="Fiji">Fiji</option>
                        <option defaultValue="Finland">Finland</option>
                        <option defaultValue="France">France</option>
                        <option defaultValue="French Guiana">
                          French Guiana
                        </option>
                        <option defaultValue="French Polynesia">
                          French Polynesia
                        </option>
                        <option defaultValue="French SouthernTerr.">
                          French SouthernTerr.
                        </option>
                        <option defaultValue="Gabon">Gabon</option>
                        <option defaultValue="Gambia">Gambia</option>
                        <option defaultValue="Georgia">Georgia</option>
                        <option defaultValue="Germany">Germany</option>
                        <option defaultValue="Ghana">Ghana</option>
                        <option defaultValue="Gibraltar">Gibraltar</option>
                        <option defaultValue="Greece">Greece</option>
                        <option defaultValue="Greenland">Greenland</option>
                        <option defaultValue="Grenada">Grenada</option>
                        <option defaultValue="Guadeloupe">Guadeloupe</option>
                        <option defaultValue="Guam">Guam</option>
                        <option defaultValue="Guatemala">Guatemala</option>
                        <option defaultValue="Guinea">Guinea</option>
                        <option defaultValue="Guinea-Bissau">
                          Guinea-Bissau
                        </option>
                        <option defaultValue="Guyana">Guyana</option>
                        <option defaultValue="Haiti">Haiti</option>
                        <option defaultValue="Heard &amp; McDonald">
                          Heard &amp; McDonald
                        </option>
                        <option defaultValue="Honduras">Honduras</option>
                        <option defaultValue="Hong Kong">Hong Kong</option>
                        <option defaultValue="Hungary">Hungary</option>
                        <option defaultValue="Iceland">Iceland</option>
                        <option defaultValue="India">India</option>
                        <option defaultValue="Indonesia">Indonesia</option>
                        <option defaultValue="Iran">Iran</option>
                        <option defaultValue="Iraq">Iraq</option>
                        <option defaultValue="Ireland">Ireland</option>
                        <option defaultValue="Israel">Israel</option>
                        <option defaultValue="Italy">Italy</option>
                        <option defaultValue="Ivory Coast">Ivory Coast</option>
                        <option defaultValue="Jamaica">Jamaica</option>
                        <option defaultValue="Japan">Japan</option>
                        <option defaultValue="Jordan">Jordan</option>
                        <option defaultValue="Kazakhstan">Kazakhstan</option>
                        <option defaultValue="Kenya">Kenya</option>
                        <option defaultValue="Kiribati">Kiribati</option>
                        <option defaultValue="Korea, North">
                          Korea, North
                        </option>
                        <option defaultValue="Korea, South">
                          Korea, South
                        </option>
                        <option defaultValue="Kuwait">Kuwait</option>
                        <option defaultValue="Kyrgyzstan">Kyrgyzstan</option>
                        <option defaultValue="Laos">Laos</option>
                        <option defaultValue="Latvia">Latvia</option>
                        <option defaultValue="Lebanon">Lebanon</option>
                        <option defaultValue="Lesotho">Lesotho</option>
                        <option defaultValue="Liberia">Liberia</option>
                        <option defaultValue="Libya">Libya</option>
                        <option defaultValue="Liechtenstein">
                          Liechtenstein
                        </option>
                        <option defaultValue="Lithuania">Lithuania</option>
                        <option defaultValue="Luxembourg">Luxembourg</option>
                        <option defaultValue="Macau">Macau</option>
                        <option defaultValue="Madagascar">Madagascar</option>
                        <option defaultValue="Malawi">Malawi</option>
                        <option defaultValue="Malaysia">Malaysia</option>
                        <option defaultValue="Maldives">Maldives</option>
                        <option defaultValue="Mali">Mali</option>
                        <option defaultValue="Malta">Malta</option>
                        <option defaultValue="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option defaultValue="Martinique">Martinique</option>
                        <option defaultValue="Mauritania">Mauritania</option>
                        <option defaultValue="Mauritius">Mauritius</option>
                        <option defaultValue="Mayotte">Mayotte</option>
                        <option defaultValue="Mexico">Mexico</option>
                        <option defaultValue="Micronesia,Fed. St.">
                          Micronesia,Fed. St.
                        </option>
                        <option defaultValue="Moldova">Moldova</option>
                        <option defaultValue="Monaco">Monaco</option>
                        <option defaultValue="Mongolia">Mongolia</option>
                        <option defaultValue="Montserrat">Montserrat</option>
                        <option defaultValue="Morocco">Morocco</option>
                        <option defaultValue="Mozambique">Mozambique</option>
                        <option defaultValue="Myanmar">Myanmar</option>
                        <option defaultValue="Namibia">Namibia</option>
                        <option defaultValue="Nauru">Nauru</option>
                        <option defaultValue="Nepal">Nepal</option>
                        <option defaultValue="Netherlands">Netherlands</option>
                        <option defaultValue="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option defaultValue="New Caledonia">
                          New Caledonia
                        </option>
                        <option defaultValue="New Zealand">New Zealand</option>
                        <option defaultValue="Nicaragua">Nicaragua</option>
                        <option defaultValue="Niger">Niger</option>
                        <option defaultValue="Nigeria">Nigeria</option>
                        <option defaultValue="Niue">Niue</option>
                        <option defaultValue="Norfolk Island">
                          Norfolk Island
                        </option>
                        <option defaultValue="Northern Mariana Isl.">
                          Northern Mariana Isl.
                        </option>
                        <option defaultValue="Norway">Norway</option>
                        <option defaultValue="Oman">Oman</option>
                        <option defaultValue="Pakistan">Pakistan</option>
                        <option defaultValue="Palau">Palau</option>
                        <option defaultValue="Panama">Panama</option>
                        <option defaultValue="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option defaultValue="Paraguay">Paraguay</option>
                        <option defaultValue="Peru">Peru</option>
                        <option defaultValue="Philippines">Philippines</option>
                        <option defaultValue="Pitcairn Island">
                          Pitcairn Island
                        </option>
                        <option defaultValue="Poland">Poland</option>
                        <option defaultValue="Portugal">Portugal</option>
                        <option defaultValue="Puerto Rico">Puerto Rico</option>
                        <option defaultValue="Qatar">Qatar</option>
                        <option defaultValue="Reunion">Reunion</option>
                        <option defaultValue="Romania">Romania</option>
                        <option defaultValue="Russia">Russia</option>
                        <option defaultValue="Rwanda">Rwanda</option>
                        <option defaultValue="S.Georgia &amp; S.Sand.">
                          S.Georgia &amp; S.Sand.
                        </option>
                        <option defaultValue="Saint Kitts &amp; Nevis">
                          Saint Kitts &amp; Nevis
                        </option>
                        <option defaultValue="Saint Lucia">Saint Lucia</option>
                        <option defaultValue="St.Vincent &amp; Gren.">
                          St.Vincent &amp; Gren.
                        </option>
                        <option defaultValue="Samoa">Samoa</option>
                        <option defaultValue="San Marino">San Marino</option>
                        <option defaultValue="Sao Tome &amp; Principe">
                          Sao Tome &amp; Principe
                        </option>
                        <option defaultValue="Saudi Arabia">
                          Saudi Arabia
                        </option>
                        <option defaultValue="Senegal">Senegal</option>
                        <option defaultValue="Seychelles">Seychelles</option>
                        <option defaultValue="Seychelles">Seychelles</option>
                        <option defaultValue="Singapore">Singapore</option>
                        <option defaultValue="Slovakia">Slovakia</option>
                        <option defaultValue="Slovenia">Slovenia</option>
                        <option defaultValue="Somalia">Somalia</option>
                        <option defaultValue="South Africa">
                          South Africa
                        </option>
                        <option defaultValue="Spain">Spain</option>
                        <option defaultValue="Sri Lanka">Sri Lanka</option>
                        <option defaultValue="St. Helena">St. Helena</option>
                        <option defaultValue="St. Pierre &amp; Miquelon">
                          St. Pierre &amp; Miquelon
                        </option>
                        <option defaultValue="Sudan">Sudan</option>
                        <option defaultValue="Suriname">Suriname</option>
                        <option defaultValue="Svalbard &amp; J.Mayen">
                          Svalbard &amp; J.Mayen
                        </option>
                        <option defaultValue="Swaziland">Swaziland</option>
                        <option defaultValue="Sweden">Sweden</option>
                        <option defaultValue="Switzerland">Switzerland</option>
                        <option defaultValue="Syria">Syria</option>
                        <option defaultValue="Taiwan">Taiwan</option>
                        <option defaultValue="Tajikistan">Tajikistan</option>
                        <option defaultValue="Tanzania">Tanzania</option>
                        <option defaultValue="Thailand">Thailand</option>
                        <option defaultValue="Togo">Togo</option>
                        <option defaultValue="Tokelau">Tokelau</option>
                        <option defaultValue="Tonga">Tonga</option>
                        <option defaultValue="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option defaultValue="Tunisia">Tunisia</option>
                        <option defaultValue="Turkey">Turkey</option>
                        <option defaultValue="Turkmenistan">
                          Turkmenistan
                        </option>
                        <option defaultValue="Turks &amp; Caicos Isl.">
                          Turks &amp; Caicos Isl.
                        </option>
                        <option defaultValue="Tuvalu">Tuvalu</option>
                        <option defaultValue="U.S.Minor Outlying Isl.">
                          U.S.Minor Outlying Isl.
                        </option>
                        <option defaultValue="Uganda">Uganda</option>
                        <option defaultValue="Ukraine">Ukraine</option>
                        <option defaultValue="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option defaultValue="United Kingdom">
                          United Kingdom
                        </option>
                        <option defaultValue="U.S.A.">U.S.A.</option>
                        <option defaultValue="Uruguay">Uruguay</option>
                        <option defaultValue="Uzbekistan">Uzbekistan</option>
                        <option defaultValue="Vanuatu">Vanuatu</option>
                        <option defaultValue="Vatican City">
                          Vatican City
                        </option>
                        <option defaultValue="Venezuela">Venezuela</option>
                        <option defaultValue="Vietnam">Vietnam</option>
                        <option defaultValue="Virgin Islands">
                          Virgin Islands
                        </option>
                        <option defaultValue="Wallis &amp; Futuna Isl.">
                          Wallis &amp; Futuna Isl.
                        </option>
                        <option defaultValue="Western Sahara">
                          Western Sahara
                        </option>
                        <option defaultValue="Yemen">Yemen</option>
                        <option defaultValue="Yugoslavia (Former)">
                          Yugoslavia (Former)
                        </option>
                        <option defaultValue="Zaire">Zaire</option>
                        <option defaultValue="Zambia">Zambia</option>
                        <option defaultValue="Zimbabwe">Zimbabwe</option>
                      </select>
                      {errors.country && (
                        <p className="text-danger">{errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Arrival Date</label>
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
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Car Required</label>
                      <select
                        className="form-control"
                        onChange={handleChange}
                        name="car_required"
                      >
                        <option defaultValue="">Select Vehicle type</option>
                        <option defaultValue="None">None </option>
                        <option defaultValue="Economy Cars">
                          Economy Cars
                        </option>
                        <option defaultValue="Luxury Cars">Luxury Cars</option>
                        <option defaultValue="SUV / MU Vehicles">
                          SUV / MU Vehicles
                        </option>
                        <option defaultValue="Coaches">Coaches</option>
                        <option defaultValue="Others">Others</option>
                        <option defaultValue="Not Required">
                          Not Required
                        </option>
                      </select>
                      {errors.car_required && (
                        <p className="text-danger">{errors.car_required}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Adult</label>
                      <input
                        type="text"
                        name="adults"
                        className="form-control"
                        value={values.adults}
                        onChange={handleChange}
                        placeholder="Adults"
                      />
                      {errors.adults && (
                        <p className="text-danger">{errors.adults}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Children </label>
                      <input
                        type="text"
                        name="children"
                        className="form-control"
                        value={values.children}
                        onChange={handleChange}
                        placeholder="Children"
                      />
                      {errors.children && (
                        <p className="text-danger">{errors.children}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Special Request</label>
                      <textarea
                        name="messages"
                        className="form-control"
                        value={values.messages}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      name="agree"
                      id="agree"
                    />{" "}
                    I agree with all of <a href=""> Terms &amp; Condition</a>
                    ready to go
                    <br /> <br />
                    {errors.agree && (
                      <p className="text-danger">{errors.agree}</p>
                    )}
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="hidden"
                        name="hiddenField"
                        value={values.hiddenField}
                      />
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleRecaptchaChange}
                      />
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="btn btn-danger btn-lg mt-2"
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
      <ToastContainer />
    </Fragment>
  );
};

export default TourBooking;
