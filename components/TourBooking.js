import React, { Fragment } from "react";

const TourBooking = (props) => {
  return (
    <Fragment>
      <div className="your-res">
        <div className="container">
          <div className="online_booking_form_div">
            <h2>Tour Booking</h2>
            <form action="" method="post" id="tourbookid">
              <div className="tour_form">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Contact No.</label>
                      <input
                        name="contact"
                        id="contact"
                        className="form-control"
                        placeholder="Contact"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Counrty</label>
                      <select
                        name="country"
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
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Arrival Date</label>
                      <input
                        name="arrival_date"
                        id="arrival_date"
                        className="form-control hasDatepicker"
                        placeholder="Arrival Date"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Car Required</label>
                      <select
                        className="form-control"
                        name="type_car"
                        id="type_car"
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
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Adult</label>
                      <input
                        name="adult"
                        id="adult"
                        className="form-control"
                        placeholder="Adult"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Children </label>
                      <input
                        name="children"
                        id="children"
                        className="form-control"
                        placeholder="Children"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Special Request</label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="messages"
                        rows="3"
                        placeholder="Message"
                      />
                    </div>
                    <input type="checkbox" name="agreeid" id="agreeid" /> I
                    agree with all of <a href="">Terms &amp; Condition</a> ready
                    to go
                    <br /> <br />
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="hidden"
                        className="form-control"
                        name="page_url"
                        id="page_url"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        id="txtpname"
                        name="txtpname"
                        defaultValue={props.title}
                      />
                      <button
                        className="btn btn-danger btn-lg"
                        type="submit"
                        id="tourid"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TourBooking;
