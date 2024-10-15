import React, { useState } from 'react';
import contact from "../Assets/images/element/contact.svg";
import map from "../Assets/images/element/map.svg";
import { database } from '../firebase'; // Importing the initialized database
import { ref, push } from "firebase/database";

// Function to capitalize the first letter of each word (for title case)
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// Function to capitalize the first letter of the first word in the message
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ContactUsBody = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, mobile, message } = formData;

    // Validate mobile number (must be exactly 10 digits)
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    // Format name to title case
    const formattedName = toTitleCase(name);

    // Format message (capitalize first letter of the first word)
    const formattedMessage = capitalizeFirstLetter(message);

    // Clear error
    setError('');

    // Prepare contact data to be sent to Firebase
    const contactData = {
      contactId: Date.now(),  // unique contact ID based on timestamp
      name: formattedName,
      mobile: mobile,
      message: formattedMessage,
    };

    // Send data to Firebase Realtime Database
    const contactsRef = ref(database, 'contacts'); // Using `database` here
    push(contactsRef, contactData)
      .then(() => {
        alert('Message sent successfully!');
        // Clear the form after successful submission
        setFormData({ name: '', mobile: '', message: '' });
      })
      .catch((error) => {
        console.error("Error submitting message: ", error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <main>
      {/* Page Banner START */}
      <section
        className="pt-5 pb-0"
        style={{
          backgroundImage: `url(${map})`,
          backgroundPosition: "center left",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-6 text-center mx-auto">
              {/* Title */}
              <h6 className="text-primary">Contact us</h6>
              <h1 className="mb-4">We're here to help!</h1>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="row g-4 g-md-5 mt-0 mt-lg-3">
            {/* Box item for Customer Support */}
            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body bg-primary shadow py-5 text-center h-100">
                <h5 className="text-white mb-3">Customer Support</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3">
                    <a href="#" className="text-white">
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                      Chicago HQ Estica Cop. Macomb, MI 48042
                    </a>
                  </li>
                  <li className="list-item mb-3">
                    <a href="#" className="text-white">
                      <i className="fas fa-fw fa-phone-alt me-2" />
                      (423) 733-8222
                    </a>
                  </li>
                  <li className="list-item mb-0">
                    <a href="#" className="text-white">
                      <i className="far fa-fw fa-envelope me-2" />
                      example@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box item for Contact Address */}
            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body shadow py-5 text-center h-100">
                <h5 className="mb-3">Contact Address</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                      2492 Centennial NW, Acworth, GA, 30102
                    </a>
                  </li>
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      <i className="fas fa-fw fa-phone-alt me-2" />
                      +896-789-546
                    </a>
                  </li>
                  <li className="list-item mb-0 h6 fw-light">
                    <a href="#">
                      <i className="far fa-fw fa-envelope me-2" />
                      example@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box item for Main Office Address */}
            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body shadow py-5 text-center h-100">
                <h5 className="mb-3">Main Office Address</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />
                      2002 Horton Ford Rd, Eidson, TN, 37731
                    </a>
                  </li>
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      <i className="fas fa-fw fa-phone-alt me-2" />
                      (678) 324-1251
                    </a>
                  </li>
                  <li className="list-item mb-0 h6 fw-light">
                    <a href="#">
                      <i className="far fa-fw fa-envelope me-2" />
                      example@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Info Cards END */}
        </div>
      </section>

      {/* Image and Contact Form */}
      <section>
        <div className="container">
          <div className="row g-4 g-lg-0 align-items-center">
            <div className="col-md-6 align-items-center text-center">
              <img
                src={contact}
                width={374}
                height={400}
                loading="lazy"
                className="h-400px"
                alt=""
              />
              {/* Social media links */}
              <div className="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
                <h5 className="mb-0">Follow us on:</h5>
                <ul className="list-inline mb-0 ms-sm-2">
                  <li className="list-inline-item">
                    <a className="fs-5 me-1 text-facebook" href="https://www.facebook.com/MicrolearningCorporateTraining/">
                      <i className="fab fa-fw fa-facebook-square" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="fs-5 me-1 text-instagram" href="https://www.instagram.com/micro_learning_/">
                      <i className="fab fa-fw fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="fs-5 me-1 text-twitter" href="https://x.com/microlearning0">
                      <i className="fab fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="fs-5 me-1 text-linkedin" href="https://www.linkedin.com/company/104394261/admin/dashboard/">
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h2 className="mt-4 mt-md-0">Let's talk</h2>
              <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.</p>
              <form>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="mb-4 bg-light-input">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4 bg-light-input">
                  <label htmlFor="mobile" className="form-label">Mobile *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4 bg-light-input">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-primary mb-0"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsBody;
