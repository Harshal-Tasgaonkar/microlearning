import React, { useEffect, useState } from 'react';
import { ref, get, child, push, database } from '../firebase';
import { Link } from 'react-router-dom'
import png02 from "../Assets/images/element/02.png"
import science from "../Assets/images/client/science.svg"
import angular from "../Assets/images/client/angular.svg"
import figma from "../Assets/images/client/figma.svg"
import jpg02 from "../Assets/images/avatar/02.jpg"
import jpg05 from "../Assets/images/avatar/05.jpg"
import jpg06 from "../Assets/images/avatar/06.jpg"
import jpg03 from "../Assets/images/avatar/03.jpg"

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    category: '',
    message: '',
  });
  const [categories, setCategories] = useState([]);

  // Fetch categories from Firebase
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesRef = ref(database, 'categories');
      const snapshot = await get(categoriesRef);
      if (snapshot.exists()) {
        const categoriesData = snapshot.val();
        const categoriesArray = Object.entries(categoriesData).map(([categoryID, category]) => ({
          categoryID,
          ...category,
        }));
        setCategories(categoriesArray);
      } else {
        console.error('No categories found');
      }
    };

    fetchCategories();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Capitalize the first letter of each word in the message
  const capitalizeMessage = (message) => {
    return message
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure mobile number is exactly 10 digits
    if (formData.mobile.length !== 10) {
      alert('Mobile number must be exactly 10 digits.');
      return;
    }

    // Capitalize message
    const formattedMessage = capitalizeMessage(formData.message);

    // Prepare data to be sent to Firebase
    const newContact = {
      name: formData.name,
      mobile: formData.mobile,
      category: formData.category,
      message: formattedMessage,
    };

    try {
      // Push new contact data to Firebase under "contacts" node
      await push(ref(database, 'contacts'), newContact);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        mobile: '',
        category: '',
        message: '',
      }); // Reset the form after submission
    } catch (error) {
      console.error('Error submitting contact:', error);
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    
    <footer className="pt-5 bg-light border-top border-primary">

<section className="py-0 py-lg-5">
  <div className="container">
    <div className="row">
      <div className="col-12 position-relative z-index-1">
        {/* Image */}
        <div className="d-none d-lg-block position-absolute bottom-0 start-0 ms-5">
          <img src={png02} alt="Image" />
        </div>
        <div className="bg-warning p-4 p-sm-5 rounded position-relative z-index-n1 overflow-hidden">
          {/* SVG decoration */}
          <figure className="position-absolute top-50 end-0 translate-middle-y me-n7">
            <svg
              className="fill-orange rotate-193 opacity-2"
              width="676px"
              height="161.3px"
              viewBox="0 0 676 161.3"
              style={{ enableBackground: "new 0 0 676 161.3" }}
              xmlSpace="preserve"
            >
              <path d="M53.6,18.8c28.6,8.8,50.3,27.3,70.9,48c19.9,19.9,39.5,40.8,65.3,53c53.3,24.9,116,12.4,168.2-9.1 c58.4-23.9,113.2-59.8,176.2-70.3c30.9-5.1,64.1-2.6,90.9,14.7c22.4,14.4,34.4,36.9,39.5,62.4c2.9,14.5,3.9,29.2,4.6,43.9h6.8 c-0.2-4.2-0.5-8.3-0.8-12.5c-1.7-24.1-4.9-49.1-17.6-70.3c-14.5-23.9-40-39.2-67-44.8c-32.9-6.8-67.2-0.3-98.5,10.2 c-30.3,10-59,24.2-87.7,38.1c-54.8,26.4-115.5,53.1-177.9,42c-14.5-2.6-28.7-7.4-41.7-14.7c-12.8-7.3-23.9-16.7-34.6-26.7 c-20.7-19.6-39.4-42-64.1-56.8c-25.6-15.4-56.4-22.2-86-19H0v6.9C17.9,11.8,36.3,13.5,53.6,18.8z" />
            </svg>
          </figure>
          <div className="row align-items-end justify-content-end position-relative">
            <div className="col-lg-10">
              <div className="row g-3 d-flex align-items-center justify-content-center">
                {/* Counter item */}
                <div className="col-sm-6 col-lg-3 text-center">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="purecounter display-6 text-white fw-bold mb-0"
                      data-purecounter-start={0}
                      data-purecounter-end={89}
                      data-purecounter-delay={200}
                      data-purecounter-duration={0}
                    >
                      89
                    </h4>
                  </div>
                  <h6 className="text-dark mb-0 fw-bold">Total Instructors</h6>
                </div>
                {/* Counter item */}
                <div className="col-sm-6 col-lg-3 text-center">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="purecounter display-6 text-white fw-bold mb-0"
                      data-purecounter-start={0}
                      data-purecounter-end={12}
                      data-purecounter-delay={200}
                      data-purecounter-duration={0}
                    >
                      12
                    </h4>
                  </div>
                  <h6 className="text-dark mb-0 fw-bold">Total Campuses</h6>
                </div>
                {/* Counter item */}
                <div className="col-sm-6 col-lg-3 text-center">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="purecounter display-6 text-white fw-bold mb-0"
                      data-purecounter-start={0}
                      data-purecounter-end={180}
                      data-purecounter-delay={200}
                      data-purecounter-duration={0}
                    >
                      180
                    </h4>
                    <span className="display-6 text-white mb-0">K</span>
                  </div>
                  <h6 className="text-dark mb-0 fw-bold">Students till date</h6>
                </div>
                {/* Counter item */}
                <div className="col-sm-6 col-lg-3 text-center">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="purecounter display-6 text-white fw-bold mb-0"
                      data-purecounter-start={0}
                      data-purecounter-end={23}
                      data-purecounter-delay={200}
                      data-purecounter-duration={0}
                    >
                      23
                    </h4>
                    <span className="display-6 text-white mb-0">+</span>
                  </div>
                  <h6 className="text-dark mb-0 fw-bold">Types of Courses</h6>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </div>
    </div>
  </div>
</section>


<section className="mb-2  ">
  <div className="container">
    <div className="row">
      <div className="col-11 col-md-10 mx-auto">
        <div className="bg-warning rounded-3 shadow p-3 p-sm-4 position-relative overflow-hidden">
          {/* SVG decoration */}
          <figure className="position-absolute top-100 start-100 translate-middle mt-n6 ms-n5">
            <svg width="211px" height="211px">
              <path
                className="fill-white opacity-4"
                d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"
              />
            </svg>
          </figure>
          {/* SVG decoration */}
          <figure className="position-absolute top-100 start-0 translate-middle mt-n6 ms-5">
            <svg width="141px" height="141px">
              <path
                className="fill-white opacity-4"
                d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"
              />
            </svg>
          </figure>
          {/* SVG decoration */}
          <figure className="position-absolute top-0 start-50 mt-4 ms-n9">
            <svg width="41px" height="41px">
              <path
                className="fill-white opacity-4"
                d="M40.531,20.265 C40.531,31.458 31.457,40.531 20.265,40.531 C9.072,40.531 -0.001,31.458 -0.001,20.265 C-0.001,9.073 9.072,-0.001 20.265,-0.001 C31.457,-0.001 40.531,9.073 40.531,20.265 Z"
              />
            </svg>
          </figure>
          {/* Icon logos START */}
          <div className="p-2 bg-white shadow rounded-3 rotate-74 position-absolute top-0 start-0 ms-3 mt-5 d-none d-sm-block">
            <img
              src={science}
              className="h-40px"
              alt="Icon"
            />
          </div>
          <div className="p-1 bg-white shadow rounded-3 rotate-74 position-absolute top-0 end-0 mt-5 me-5 d-none d-sm-block">
            <img
              src={angular}
              className="h-30px"
              alt="Icon"
            />
          </div>
          <div className="p-2 bg-white shadow rounded-3 rotate-130 position-absolute bottom-0 start-50 ms-5 mb-2 d-none d-lg-block">
            <img
              src={figma}
              className="h-20px"
              alt="Icon"
            />
          </div>
          {/* Icon logos END */}
          <div className="row">
            <div className="col-md-8 mx-auto text-center py-5 position-relative">
              {/* Title */}
              <h2>Subscribe to our Newsletter for Newest Course Updates</h2>
              {/* Form */}
              <form className="row align-items-center justify-content-center mt-3">
                <div className="col-lg-8">
                  <div className="bg-body shadow rounded-pill p-2">
                    <div className="input-group">
                      <input
                        className="form-control border-0 me-1"
                        type="email"
                        placeholder="Enter your email"
                      />
                      <button
                        type="button"
                        className="btn btn-blue mb-0 rounded-pill"
                      >
                        Subscribe!
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </div>
    </div>{" "}
    {/* Row END */}
  </div>
</section>


<section className="pt-0">
  <div className="container">
    <div className="bg-light p-4 rounded-3">
      {/* Title */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2>What students are saying</h2>
        </div>
      </div>
      <div className="row">
        {/* Slider START */}
        <div className="tiny-slider arrow-round arrow-blur arrow-hover">
          <div className="tns-outer" id="tns1-ow">
            <div
              className="tns-liveregion tns-visually-hidden"
              aria-live="polite"
              aria-atomic="true"
            >
              slide <span className="current">10 to 14</span> of 4
            </div>
            <div id="tns1-mw" className="tns-ovh">
              <div className="tns-inner" id="tns1-iw">
                <div
                  className="tiny-slider-inner pb-1  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                  data-autoplay="true"
                  data-arrow="true"
                  data-edge={2}
                  data-dots="false"
                  data-items={3}
                  data-items-lg={2}
                  data-items-sm={1}
                  id="tns1"
                  style={{
                    transform: "translate3d(-55.5556%, 0px, 0px)",
                    transitionDuration: "0s"
                  }}
                >
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg02}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Billy Vasquez</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Life easier and organized conviction For every delay in
                        they Extremity now strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg05}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Lori Stevens</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Easier and organized conviction For every delay in they
                        Extremity now strangers contained breakfast makes my
                        life."
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg06}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Carolyn Ortiz</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Conviction For every delay in they Extremity now
                        strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg03}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Dennis Barrett</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Make my life easier and organized conviction For every
                        delay in they Extremity now strangers contained
                        breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg02}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Billy Vasquez</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Life easier and organized conviction For every delay in
                        they Extremity now strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg05}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Lori Stevens</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Easier and organized conviction For every delay in they
                        Extremity now strangers contained breakfast makes my
                        life."
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg06}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Carolyn Ortiz</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Conviction For every delay in they Extremity now
                        strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  {/* Slide item */}
                  <div
                    className="tns-item"
                    id="tns1-item0"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg03}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Dennis Barrett</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Make my life easier and organized conviction For every
                        delay in they Extremity now strangers contained
                        breakfast"
                      </h6>
                    </div>
                  </div>
                  {/* Slide item */}
                  <div
                    className="tns-item"
                    id="tns1-item1"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg02}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Billy Vasquez</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Life easier and organized conviction For every delay in
                        they Extremity now strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  {/* Slide item */}
                  <div className="tns-item tns-slide-active" id="tns1-item2">
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg05}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Lori Stevens</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Easier and organized conviction For every delay in they
                        Extremity now strangers contained breakfast makes my
                        life."
                      </h6>
                    </div>
                  </div>
                  {/* Slide item */}
                  <div className="tns-item tns-slide-active" id="tns1-item3">
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg06}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Carolyn Ortiz</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Conviction For every delay in they Extremity now
                        strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div className="tns-item tns-slide-cloned tns-slide-active">
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg03}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Dennis Barrett</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Make my life easier and organized conviction For every
                        delay in they Extremity now strangers contained
                        breakfast"
                      </h6>
                    </div>
                  </div>
                  <div className="tns-item tns-slide-cloned tns-slide-active">
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg02}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Billy Vasquez</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Life easier and organized conviction For every delay in
                        they Extremity now strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div className="tns-item tns-slide-cloned tns-slide-active">
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg05}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Lori Stevens</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Easier and organized conviction For every delay in they
                        Extremity now strangers contained breakfast makes my
                        life."
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg06}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Carolyn Ortiz</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Conviction For every delay in they Extremity now
                        strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg03}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Dennis Barrett</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Make my life easier and organized conviction For every
                        delay in they Extremity now strangers contained
                        breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg02}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Billy Vasquez</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Life easier and organized conviction For every delay in
                        they Extremity now strangers contained breakfast"
                      </h6>
                    </div>
                  </div>
                  <div
                    className="tns-item tns-slide-cloned"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div className="card card-body h-100">
                      <div className="d-sm-flex justify-content-between align-items-center mb-3">
                        {/* Avatar */}
                        <div className="d-flex align-items-center mb-1 mb-sm-0">
                          {/* Avatar */}
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src={jpg05}
                              alt="avatar"
                            />
                          </div>
                          {/* Info */}
                          <div className="ms-2">
                            <h6 className="mb-0">Lori Stevens</h6>
                          </div>
                        </div>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star text-warning" />
                          </li>
                          <li className="list-inline-item me-0 mb-0">
                            <i className="fas fa-star-half-alt text-warning" />
                          </li>
                        </ul>
                      </div>
                      {/* Content */}
                      <h6 className="fw-normal mb-0">
                        "Easier and organized conviction For every delay in they
                        Extremity now strangers contained breakfast makes my
                        life."
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tns-controls"
              aria-label="Carousel Navigation"
              tabIndex={0}
            >
              <button
                type="button"
                data-controls="prev"
                tabIndex={-1}
                aria-controls="tns1"
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button
                type="button"
                data-controls="next"
                tabIndex={-1}
                aria-controls="tns1"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        {/*Slider END  */}
      </div>
    </div>
  </div>
</section>



<section
  id="contact-form"
  className="position-relative overflow-hidden pt-0 pt-md-5"
>
  {/* SVG decoration */}
  <figure className="position-absolute top-0 start-0 ms-n7 d-none d-xl-block">
    <svg enableBackground="new 0 0 253.7 138">
      <path
        className="fill-info"
        d="m96.5 118.2c0 0.2 0.1 0.4 0.1 0.5l3-0.9c0-0.1-0.1-0.3-0.1-0.4-1 0.3-2 0.5-3 0.8m112-114v-0.4c-5.4-0.3-10.7-0.5-16.1-0.8v0.5c5.4 0.2 10.8 0.5 16.1 0.7m-87.7 89.2c23.1-3.7 45.7-8.8 67.4-17.7-22 7.6-44.5 13.4-67.4 17.7m-7.5-7.7c0 0.2 0.1 0.3 0.1 0.5 5.3-1 10.6-1.9 15.8-3 13.9-2.8 27.8-5.8 41.4-9.7 5.5-1.6 11-3.4 16.4-5.2 2.8-0.9 5.5-2 8.2-3 1.1-0.4 2.1-0.7 3.2-1.1-0.1-0.2-0.1-0.4-0.2-0.6-27.5 9.9-56 16.8-84.9 22.1m74.2-0.4c-0.1-0.2-0.2-0.3-0.3-0.5-2.1 1.1-4.2 2.4-6.3 3.4-5 2.4-10 4.7-15.1 6.9-6.1 2.6-12.2 5-18.3 7.3-1 0.4-2 1.5-3.2 0.3 0 0-0.4 0.3-0.6 0.4-0.7 0.5-1.3 1.2-2 1.4-11.5 3.6-23.1 7.2-34.6 10.8l-5.1 1.5c1 0.1 1.9 0 2.8-0.3 12.3-3.7 24.6-7.4 36.9-11.2 1.2-0.4 1.8-0.3 1.6 1.2-0.1 0.5 0.3 1 0.4 1.5 0.3-0.5 0.6-0.9 0.8-1.4 0.5-1.1 0.3-2.4 1.9-3 6.2-2.3 12.4-4.7 18.5-7.2 4.1-1.7 8-3.6 12-5.5 2.6-1.2 5.2-2.4 7.7-3.7 0.9-0.4 1.9-1.2 2.9-1.9m-162.4-10.9c0.1 0.1 0.1 0.3 0.2 0.4 2.3-1.5 4.7-3.1 7-4.5 8.5-5.1 17.2-9.6 26.5-13.1 8.1-3.1 16.3-6.2 24.6-8.5 10.5-2.9 21.2-5.2 31.8-7.4 4.5-1 9.1-1.2 13.6-1.8 2.7-0.3 5.3-0.6 8-0.9s5.4-0.5 8.1-0.8c-2.1-0.2-4.2-0.4-6.2-0.2-6.2 0.7-12.3 1.6-18.5 2.5-16.1 2.4-32 5.7-47.3 11.2-9.1 3.2-18 6.9-26.9 10.7-7.5 3.1-14.5 7.2-20.9 12.4m135.8-71.8c-24.3-0.3-62.8 5.2-107 27.8-11.3 5.6-21.9 12.4-31.7 20.4 41.8-29.7 88.1-46.3 138.7-48.2m64.4 8.6c-0.3 0.3-0.6 0.8-0.8 0.8-2.4-0.3-4.7-0.7-7.1-1.1-0.4-0.1-0.9 0-1.4 0 0.3 0.3 0.5 0.7 0.9 1 2.1 1.4 4.3 2.6 6.3 4.1 6.9 4.9 11.1 11.5 12.3 19.8 0.3 2.3 0 4.6 0 7.4 5-3.7 9-7.5 11.4-12.8 1.1-2.6 1.3-5.4-0.5-7.9-3.8-5-9.4-6.7-14.9-8.8-2.1-0.8-4.7-0.4-6.2-2.5m-98.8 33.2c0.3-0.4 0.6-0.8 1-1.2-0.5-0.1-0.8-0.2-1.1-0.1-0.7 0.2-1.3 0.5-2 0.7 0.8 0.2 1.5 0.4 2.1 0.6-0.4 0.3-0.8 0.8-1.3 0.9-0.9 0.1-1.9-0.3-2.7-0.1-1.3 0.3-2.4 1-3.7 1.3-9.6 2-19.3 3.8-29 6-3.8 0.9-7.5 2.3-11.1 3.7-6.1 2.3-12.7 3.6-18.7 6.6-0.5 0.3-1.2 0.2-1.7 0.4-1.9 0.9-3.9 1.8-5.8 2.7-1.8 0.9-3.4 2-5.2 2.8-1.7 0.8-3.6 1.4-5.3 2.1-4.7 2-8.5 5.4-12.4 8.5-2.2 1.7-4 3.9-5.9 6-1 1.1-1.7 2.4-2.5 3.7-0.8 1.4-0.1 2.1 1.3 2.3 4.1 0.5 8.1 1.2 12.2 1.2 19.1 0 38-2.7 56.9-5.5 10.6-1.6 21-3.5 31.5-5.5 17.3-3.3 34.6-7.1 51.5-12.1 11.9-3.5 23.7-7.4 35.2-12.1 1.5-0.6 1.3-1.2 0.4-2.1-2.9-3.2-6.6-5.2-10.5-6.6-4.9-1.8-10.2-2.6-15.3-3.8-0.4-0.1-0.6-0.6-0.9-0.9-0.4-0.3-0.9-0.6-1.3-0.9-0.2 0.2-0.3 0.4-0.5 0.6 0.5 0.1 0.9 0.2 1.4 0.3-0.1 0.1-0.2 0.3-0.3 0.4-0.9-0.2-1.9-0.6-2.7-0.4-2.7 0.4-5.4-0.5-8.1-0.5-4.6 0-9.2-0.4-13.8-0.7l-3.6-0.3c-1.1 0-2.2 0.2-3.2 0.2-0.8 0.1-1.6 0.1-2.4 0.2s-1.7 0.5-2.2 0.2c-1.5-0.9-2.8-0.3-4.2 0-1.2 0.3-2.3 0.8-3-0.7-0.1-0.3-0.7-0.3-1-0.4 0 0-0.3 0.3-0.3 0.4 0.7 1.4-0.5 0.8-0.9 0.9-0.6 0.2-1.2 0.2-1.8 0.3-1 0.2-2 0.3-3 0.4-1.2 0.2-2.6 0-3.6 0.5-1.1 0.9-1.7 0.5-2.5 0m-77.3 0.7c-2 0.9-4.2 1.7-6.1 2.8-9 4.9-17.2 11-24.5 18.1-2.5 2.5-4.5 5.6-6.7 8.4-2.8 3.4-4.3 7.3-4.5 11.6-0.1 1.3 0.2 2.9 1 3.8 1.8 2 4.2 3.2 7.1 3.9-2-3.6-2.8-7.1-0.7-10.6 1.4-2.4 3.2-4.7 5.2-6.6 6.1-5.9 13.4-10 20.9-13.9 11.7-6.1 24-10.8 36.5-14.7 16.3-5.1 32.9-8.8 49.8-10.6 5.9-0.6 11.8-1.1 17.7-1.5 12-0.8 23.9-0.3 35.8 1.5 6.5 1 12.8 2.3 19 4.7 6.3 2.5 11.9 5.4 15 11.8 0.4 0.8 0.8 1 1.7 0.6 2-1.1 4.1-2 6.1-3.1 1.6-0.9 3.5-1.7 4.7-3 2.6-3 4.2-6.6 4.5-10.7 0.2-3.2-0.3-6.4-2.2-8.9-2.2-3-4.5-6.2-8-7.8-1.7-0.8-2.4-3.1-4.6-2.9-0.2 0-0.4-0.6-0.6-0.9-0.7-0.9-2.3-0.6-2.7-1.8-0.1 0-0.2 0.1-0.3 0.1-0.5 0.1-1 0.3-1.4 0.2-4.9-1.7-9.8-3.6-15-4.6-4.7-1-9.4-1.5-14.3-1.2-3 0.2-6.1 1.2-9.2 0.1-0.6-0.2-1.5 0.7-2.3 0.8-5.3 0.7-10.6 1.4-15.9 1.8-5.2 0.4-10.2 2.4-15.5 1.8-1.2-0.1-2.9-0.2-4 1.3-0.5 0.6-2-0.2-3.2 0.4-1.3 0.7-3.1 0.4-4.6 0.6-0.1 0-0.1 0.1-0.2 0.1-3.4 0.8-6.8 2.1-10.1 3-12.8 3.6-25.5 7.4-37.9 12.2-2.8 1.1-5.5 2.3-8.4 3.2-3.8 1.2-7.7 1.9-11.1 4.3-1.3 0.9-2.9 1.2-4.4 1.9-0.6 0.2-1 0.7-1.6 1-1.9 1-3.4 1.9-5 2.8m114 46c-0.5 0.3-0.9 0.7-1.4 0.9-8.8 2.1-17.5 4.5-26.4 6.2-11.3 2.2-22.7 3.9-34 5.7-2.9 0.5-5.8 0.5-8.7 0.8-1.8 0.2-3.6 0.7-5.5 0.9-4.8 0.5-9.6 0.9-14.3 1.3-0.8 0.1-1.7-0.3-2.5-0.3-0.5 0-1 0.6-1.5 0.6-4.5 0.1-9 0.3-13.5 0.3-6.1-0.1-12.2 0-18.3-0.6-9.3-0.8-18.5-2.3-26.3-7.8-5.3-3.6-9.8-7.7-10.6-14.6-0.6-4.9 0.7-9.4 3.3-13.4 2-3 4.4-5.8 6.5-8.8 0.6-0.8 0.8-1.9 1.4-2.7 0.9-1.3 1.7-2.7 2.8-3.8 6.3-6 13.3-11.2 20.6-15.8 5.4-3.4 11-6.8 16.7-9.8 18.2-9.6 37.1-17.4 57.1-22.4 13.4-3.3 26.9-5.8 40.7-6.6 8.3-0.5 16.7-0.1 25-0.1 6.7 0 13.5 0.2 20.2 0.2 12.4 0.1 24.6 1.5 36.5 5.1 5.9 1.8 11.5 4.4 15.9 9 5.1 5.3 6.7 14.6 3.4 21.2-2.7 5.3-6.5 9.7-11.4 13.2-2.6 1.8-5.3 3.5-7.7 5.5-2 1.7-3.6 4-5.7 5.7-3.2 2.7-6.6 5.2-9.7 7.9-1 0.9-1.6 2.2-2.5 3.2-2.5 2.8-4.8 5.8-7.6 8.1-4.4 3.5-9.1 6.6-13.8 9.8-2.5 1.7-5.2 3.1-7.8 4.6-1.9 0.1-3.5 0.8-4.6 2.4-3 1.4-6.1 2.8-9.1 4.1-0.7 0.3-1.4 0.5-2 0.7-2.4 1-4.9 2-7.4 2.9-0.8 0.5-1.6 1.3-2.4 1.6-17.9 6.8-36.1 12.5-54.8 17-11.7 2.8-23.4 5.8-35.3 8.2-10.4 2.1-20.9 3.3-31.4 4.9-1.7 0.3-3.4 0.1-5.1 0.2-2 0.1-3.6-0.5-5.1-1.8-0.2-0.2-0.4-0.3-0.6-0.4-0.5-0.3-1.1-0.5-1.6-0.8 0.5-0.3 0.9-0.7 1.5-1.1-0.1-0.1-0.2-0.2-0.4-0.3-0.5-0.3-1.1-0.5-1.6-0.8 0.6-0.4 1.2-1 1.8-1 21-1.4 41.2-6.9 61.4-12 23.7-6 47-13 69.8-21.9 5.2-2 10.4-4.3 15.6-6.6 3.7-1.7 7.4-3.7 10.9-5.9-1.8 0.6-3.7 1.3-5.5 1.9-3.9 1.2-7.8 2.4-11.7 3.7-0.5 0.2-1 0.6-1.4 0.9-0.8 0.3-1.3 0.5-1.9 0.6"
      />
    </svg>
  </figure>
  <div className="container">
    <div className="row g-4 g-sm-5 align-items-center">
      <div className="col-lg-6">
        <h2>Access the right service for your kid today!!</h2>
        <p>
          Claim your free 10-minute phone call to see if we are right for your
          kid.
        </p>
        <div className="row mt-5">
          {/* Email box */}
          <div className="col-sm-6 col-lg-12 col-xl-6 mb-5">
            <div className="card card-body shadow">
              <div className="icon-lg bg-warning text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                <i className="fas fa-envelope" />
              </div>
              <h6>Email</h6>
              <p className="h6 mb-0">
                <a
                  href="#"
                  className="text-primary-hover fw-light stretched-link"
                >
                  example@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* Live support box */}
          <div className="col-sm-6 col-lg-12 col-xl-6 mb-5">
            <div className="card card-body shadow">
              <div className="icon-lg bg-success text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                <i className="bi bi-whatsapp" />
              </div>
              <h6>WhatsApp number</h6>
              <p className="h6 mb-0">
                <a
                  href="#"
                  className="text-primary-hover fw-light stretched-link"
                >
                  +256 359 556
                </a>
              </p>
            </div>
          </div>
          {/* Telephone box */}
          <div className="col-sm-6 col-lg-12 col-xl-6 mb-5 mb-xl-0">
            <div className="card card-body shadow">
              <div className="icon-lg bg-purple text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                <i className="fas fa-tty" />
              </div>
              <h6>Telephone</h6>
              <p className="h6 mb-0">
                <a
                  href="#"
                  className="text-primary-hover fw-light stretched-link"
                >
                  +123 456 789
                </a>
              </p>
            </div>
          </div>
          {/* Website box */}
          <div className="col-sm-6 col-lg-12 col-xl-6 mb-5 mb-xl-0">
            <div className="card card-body shadow">
              <div className="icon-lg bg-orange text-white rounded-circle position-absolute top-0 start-100 translate-middle ms-n6">
                <i className="fas fa-globe" />
              </div>
              <h6>Website</h6>
              <p className="h6 mb-0">
                <a
                  href="#"
                  className="text-primary-hover fw-light stretched-link"
                >
                  http://example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact form START */}
      <div className="col-lg-6">
        <div className="card card-body shadow p-4 p-sm-5 position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute top-0 start-100 mt-n5 ms-n7">
            <svg enableBackground="new 0 0 167 107">
              <path
                className="fill-danger"
                d="m87.1 1c-0.4 0.5-0.8 1-1.3 1.5l-3 2.7c-2.6 2.3-5.1 4.7-7.8 6.8-13.4 10.5-26.8 21-40.1 31.5l-25.8 20.4c-0.4 0.3-0.8 0.6-1.1 0.9-0.7 0.6-1.5 1-2.4 0.2-0.8-0.7-0.6-1.7-0.1-2.4 0.6-1 1.4-2 2.2-2.8 0.5-0.4 1-0.9 1.5-1.3 2.8-2.6 5.7-5.2 8.6-7.5 21.6-16.6 43.3-33.1 65.8-48.5 1.2-0.9 2.5-1.7 3.8-2.5 0 0 0.1 0.1 0.4 0.2-0.2 0.3-0.5 0.6-0.7 0.8zm78.9 20.9c-0.4 0.2-0.7 0.4-1.1 0.6-0.3 0.2-0.7 0.5-1.1 0.7-14.6 8.6-29 17.5-43.1 27-21.6 14.4-43 29.2-63.4 45.2-3.8 3-7.5 6-11.2 9-0.6 0.5-1.1 0.9-1.7 1.3-0.8 0.6-1.6 0.9-2.4 0.2s-0.6-1.7-0.1-2.4c0.6-1 1.3-2 2.2-2.8l0.1-0.1c2.5-2.3 5-4.6 7.7-6.6 30.4-23 61.6-44.5 94.9-63 3.8-2.1 7.7-4.1 11.6-6 1.9-1 3.9-2 5.8-3 0.5-0.2 1-0.4 1.4-0.6 0.2 0.1 0.3 0.3 0.4 0.5zm-66.1-13.4c0.7-0.5 1.3-1.1 1.9-1.7-0.1-0.1-0.2-0.2-0.5-0.3-0.7 0.5-1.4 1-2.1 1.6-0.7 0.5-1.4 1.1-2.1 1.6-4 2.9-8.1 5.8-12.1 8.7-19.3 13.8-38.6 27.7-57.8 41.8-5.4 3.9-10.5 8.1-15.6 12.3-2.1 1.7-4.2 3.5-6.3 5.2-1.5 1.2-2.8 2.6-4.1 4-0.5 0.5-1 1.1-1.2 1.8-0.1 0.5 0.1 1.2 0.4 1.5s1.1 0.4 1.5 0.2c0.8-0.4 1.5-0.9 2.2-1.5l7.2-6c4.2-3.6 8.5-7.1 12.8-10.5 10.6-8.2 21.3-16.4 31.9-24.5l23.4-18c6.9-5.4 13.7-10.8 20.5-16.2zm0.5 13.5c-1.1 1-2.2 2-3.4 2.9-3.3 2.6-6.7 5.2-10 7.8-11 8.5-22 17-32.9 25.6-6.4 5.1-12.8 10.3-19.1 15.4-3.5 2.8-7 5.7-10.5 8.5-0.8 0.7-1.6 1.4-2.5 1.9-0.5 0.3-1.6 0.3-1.9 0-0.4-0.4-0.5-1.4-0.2-1.9 0.4-0.8 1-1.6 1.7-2.3 0.7-0.6 1.4-1.3 2.1-1.9 1.7-1.6 3.4-3.2 5.2-4.7 20-15.8 40.2-31.3 61.3-45.6 2.3-1.6 4.7-3.1 7.1-4.6 0.5-0.3 1-0.7 1.5-1 0.4-0.2 0.8-0.4 1.2-0.7 0.1 0.1 0.1 0.2 0.2 0.3s0.2 0.2 0.2 0.3zm7 13.4 0.6-0.6c-0.3-0.2-0.4-0.3-0.4-0.3-1.5 1.1-3 2.2-4.5 3.2-16.7 11.1-32.8 23-48.7 35.1-4.7 3.5-9.3 7.1-13.9 10.7-0.9 0.7-1.7 1.5-2.4 2.3-0.6 0.7-0.9 1.6-0.2 2.4 0.7 0.9 1.6 0.8 2.4 0.3 1.1-0.6 2.2-1.3 3.2-2.1 1.8-1.4 3.5-2.8 5.2-4.3 1.7-1.4 3.5-2.8 5.2-4.3 12.1-9.5 24.3-19 36.5-28.4l15-12c0.6-0.4 1.3-1.2 2-2z"
              />
            </svg>
          </figure>
          {/* Form START */}
      <form className="row g-3 position-relative" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="col-md-6 col-lg-12 col-xl-6">
          <label className="form-label">Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone number */}
        <div className="col-md-6 col-lg-12 col-xl-6">
          <label className="form-label">Mobile Number *</label>
          <input
            type="number"
            placeholder="Enter Mobile Number"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Select category */}
        <div className="col-12">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <option key={index} value={category.categoryID}>
                  {category.categoryName}
                </option>
              ))
            ) : (
              <option disabled>No categories available</option>
            )}
          </select>
        </div>

        {/* Comment */}
        <div className="col-12">
          <label className="form-label">Message *</label>
          <textarea
            className="form-control"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-0 float-end">
            Send Message
          </button>
        </div>
      </form>
      {/* Form END */}
        </div>
      </div>
      {/* Contact form END */}
    </div>
  </div>
</section>


  <div className="container">
    {/* Row START */}
    <div className="row g-4">
      {/* Widget 1 START */}
      <div className="col-lg-3">
        {/* logo */}
        <a className="navbar-brand" href="/">
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
              MICROLEARNING
            </span> 
          </a>
          
        <p className="my-3">
          Eduport education theme, built specifically for the education centers
          which is dedicated to teaching and involve learners.{" "}
        </p>
        {/* Social media icon */}
<ul className="list-inline mb-0 mt-3">
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-facebook"
      to="https://www.facebook.com/MicrolearningCorporateTraining/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-fw fa-facebook-f" />
    </Link>
  </li>
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-instagram"
      to="https://www.instagram.com/micro_learning_/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-fw fa-instagram" />
    </Link>
  </li>
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-twitter"
      to="https://x.com/microlearning0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-x-twitter fa-fw " />
    </Link>
  </li>
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-linkedin"
      to="https://www.linkedin.com/company/104394261/admin/dashboard/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-fw fa-linkedin-in" />
    </Link>
  </li>
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-linkedin"
      to="https://www.youtube.com/@microlearningcoachingcente2131"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-youtube fa-fw " />
    </Link>
  </li>
  <li className="list-inline-item">
    <Link
      className="btn btn-white btn-sm shadow px-2 text-linkedin"
      to="https://t.me/Microlearni"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-telegram fa-fw " />
    </Link>
  </li>
</ul>

      </div>
      {/* Widget 1 END */}
      {/* Widget 2 START */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Company</h5>
            <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inquiry">
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Teaching</h5>
            <ul className="nav flex-column">
            <li className="nav-item">
                <Link className="nav-link" to="/becomeinstructor">
                  Become a teacher
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/termsandconditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget 2 END */}
      {/* Widget 3 START */}
      <div className="col-lg-3">
        <h5 className="mb-2 mb-md-4">Contact</h5>
        {/* Time */}
        <p className="mb-2">
          Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
          <span className="d-block small">(9:AM to 8:PM IST)</span>
        </p>
        <p className="mb-0">
          Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
        </p>
        
        {/* Row END */}
      </div>
      {/* Widget 3 END */}
    </div>
    {/* Row END */}
    {/* Divider */}
    <hr className="mt-4 mb-0" />
    {/* Bottom footer */}
    <div className="py-3">
      <div className="container px-0">
        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
          {/* copyright text */}
          <div className="text-body text-primary-hover">
            {" "}
            Copyrights ©2024 {" "}
            <a
              href="https://www.webestica.com/"
              target="_blank"
              className="text-body"
            >
              Microlearning
            </a>
          </div>
          {/* copyright links*/}
          <div className="justify-content-center mt-3 mt-lg-0">
            <ul className="nav list-inline justify-content-center mb-0">
              <li className="list-inline-item">
                <Link className="nav-link" to="/termsandconditions">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="nav-link pe-0" to="/privacypolicy">
                  Privacy policy
                </Link>
              </li>
              <li className="list-inline-item">
                <a className="nav-link" href="#">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


  )
}

export default Footer