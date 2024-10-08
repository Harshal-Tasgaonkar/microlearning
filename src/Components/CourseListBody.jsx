import React from 'react'
import course01 from "../Assets/images/courses/4by3/01.jpg"
import course02 from "../Assets/images/courses/4by3/02.jpg"
import course03 from "../Assets/images/courses/4by3/03.jpg"
import course05 from "../Assets/images/courses/4by3/05.jpg"
import course06 from "../Assets/images/courses/4by3/06.jpg"
import course07 from "../Assets/images/courses/4by3/07.jpg"
import course09 from "../Assets/images/courses/4by3/09.jpg"
import course11 from "../Assets/images/courses/4by3/11.jpg"
import course12 from "../Assets/images/courses/4by3/12.jpg"
import course13 from "../Assets/images/courses/4by3/13.jpg"
import png04 from "../Assets/images/pattern/04.png"

const CourseListBody = () => {
  return (
   
    <main>
    {/* =======================
  Page Banner START */}
    <section
      className="bg-dark align-items-center d-flex"
      style={{
        backgroundImage: `url(${png04})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: "cover"
      }}
    >
      {/* Main banner background image */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Title */}
            <h1 className="text-white">Course List Minimal</h1>
            {/* Breadcrumb */}
            <div className="d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Courses
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
  Page Banner END */}
    {/* =======================
  Page content START */}
    <section className="pt-5">
      <div className="container">
        {/* Search option START */}
        <div className="row mb-4 align-items-center">
          {/* Search bar */}
          <div className="col-sm-6 col-xl-4">
            <form className="border rounded p-2">
              <div className="input-group input-borderless">
                <input
                  className="form-control me-1"
                  type="search"
                  placeholder="Search course"
                />
                <button type="button" className="btn btn-primary mb-0 rounded">
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </div>
          {/* Select option */}
          <div class="col-sm-6 col-xl-3 mt-3 mt-lg-0">
    <form class="border rounded p-2 input-borderless">
        <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
            <div class="choices__inner">
                <select class="form-select form-select-sm js-choice choices__input" aria-label="Category" tabindex="-1" data-choice="active">
                    <option value="" data-custom-properties="[object Object]">Category</option>
                    <option value="Accounting">Accounting</option>
                    <option value="All">All</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Finance">Finance</option>
                    <option value="Legal">Legal</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Photography">Photography</option>
                    <option value="Translation">Translation</option>
                    <option value="Writing">Writing</option>
                </select>
            </div>
        </div>
    </form>
</div>



          {/* Select option */}
          <div className="col-sm-6 col-xl-3 mt-3 mt-xl-0">
  <form className="border rounded p-2 input-borderless">
    <div
      className="choices"
      data-type="select-one"
      tabIndex="0"
      role="combobox"
      aria-autocomplete="list"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <div className="choices__inner">
        <select
          className="form-select form-select-sm js-choice choices__input"
          aria-label="Sort by"
          hidden
          tabIndex="-1"
          data-choice="active"
        >
          <option value="" data-custom-properties="[object Object]">
            Sort by
          </option>
        </select>
        <div className="choices__list choices__list--single">
          <div
            className="choices__item choices__placeholder choices__item--selectable"
            data-item=""
            data-id="1"
            data-value=""
            data-custom-properties="[object Object]"
            aria-selected="true"
          >
            Sort by
          </div>
        </div>
      </div>
      <div className="choices__list choices__list--dropdown" aria-expanded="false">
        <input
          type="search"
          name="search_terms"
          className="choices__input choices__input--cloned"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          role="textbox"
          aria-autocomplete="list"
          aria-label="Sort by"
          placeholder=""
        />
        <div className="choices__list" role="listbox">
          <div
            id="choices--h2b7-item-choice-4"
            className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
            role="option"
            data-choice=""
            data-id="4"
            data-value=""
            data-select-text="Press to select"
            data-choice-selectable=""
            aria-selected="true"
          >
            Sort by
          </div>
          <div
            id="choices--h2b7-item-choice-1"
            className="choices__item choices__item--choice choices__item--selectable"
            role="option"
            data-choice=""
            data-id="1"
            data-value="Free"
            data-select-text="Press to select"
            data-choice-selectable=""
          >
            Free
          </div>
          <div
            id="choices--h2b7-item-choice-2"
            className="choices__item choices__item--choice choices__item--selectable"
            role="option"
            data-choice=""
            data-id="2"
            data-value="Most viewed"
            data-select-text="Press to select"
            data-choice-selectable=""
          >
            Most viewed
          </div>
          <div
            id="choices--h2b7-item-choice-3"
            className="choices__item choices__item--choice choices__item--selectable"
            role="option"
            data-choice=""
            data-id="3"
            data-value="Popular"
            data-select-text="Press to select"
            data-choice-selectable=""
          >
            Popular
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

          {/* Button */}
          <div className="col-sm-6 col-xl-2 mt-3 mt-xl-0 d-grid">
            <a href="#" className="btn btn-lg btn-primary mb-0">
              Filter Results
            </a>
          </div>
        </div>
        {/* Search option END */}
        {/* Course list START */}
        <div className="row g-4 justify-content-center">
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course01}
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">
                          The Complete Digital Marketing Course - 12 Courses in 1
                        </a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#">
                        <i className="fas fa-heart text-danger" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        6h 56m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        82 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Beginner
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.5/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course02}
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Graphic Design Masterclass</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        9h 56m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        65 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        All level
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.0/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course03}
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Create a Design System in Figma</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        7h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        32 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Intermediate
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.0/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course05}
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">The Complete Web Development in python</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#">
                        <i className="fas fa-heart text-danger" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        7h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        32 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Intermediate
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.0/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course06}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Angular – The Complete Guider</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        21h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        68 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        All level
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.5/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course07}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Deep Learning with React-Native</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        10h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        21 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Advance
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        3.5/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course09}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">JavaScript: Full Understanding</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#">
                        <i className="fas fa-heart text-danger" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        7h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        12 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Beginner
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.0/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course11}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Build Responsive Websites with HTML</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        15h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        38 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        All level
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="far fa-star text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.0/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course12}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">Build Websites with CSS</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#" className="h6 fw-light">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        22h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />
                        16 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Advance
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.5/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-lg-10 col-xxl-6">
            <div className="card rounded overflow-hidden shadow">
              <div className="row g-0">
                {/* Image */}
                <div className="col-md-4">
                  <img
                    src={course13}
                    loading="lazy"
                    width={207}
                    height={156}
                    alt="card image"
                  />
                </div>
                {/* Card body */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Title */}
                    <div className="d-flex justify-content-between mb-2">
                      <h5 className="card-title mb-0">
                        <a href="#">PHP with - CMS Project</a>
                      </h5>
                      {/* Wishlist icon */}
                      <a href="#">
                        <i className="fas fa-heart text-danger" />
                      </a>
                    </div>
                    {/* Content */}
                    {/* Info */}
                    <ul className="list-inline mb-1">
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="far fa-clock text-danger me-2" />
                        10h 16m
                      </li>
                      <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                        <i className="fas fa-table text-orange me-2" />9 lectures
                      </li>
                      <li className="list-inline-item h6 fw-light">
                        <i className="fas fa-signal text-success me-2" />
                        Intermediate
                      </li>
                    </ul>
                    {/* Rating */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star text-warning" />
                      </li>
                      <li className="list-inline-item me-0 small">
                        <i className="fas fa-star-half-alt text-warning" />
                      </li>
                      <li className="list-inline-item ms-2 h6 fw-light">
                        4.5/5.0
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
        </div>
        {/* Course list END */}
        {/* Pagination START */}
        <div className="col-12">
          <nav
            className="mt-4 d-flex justify-content-center"
            aria-label="navigation"
          >
            <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
              <li className="page-item mb-0">
                <a className="page-link" href="#" tabIndex={-1}>
                  <i className="fas fa-angle-double-left" />
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item mb-0 active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  ..
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="#">
                  <i className="fas fa-angle-double-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Pagination END */}
      </div>
    </section>
    {/* =======================
  Page content END */}
    {/* =======================
  Action box START */}
    <section className="pt-0">
      <div className="container position-relative">
        {/* SVG */}
        <figure className="position-absolute top-50 start-50 translate-middle ms-3">
          <svg>
            <path
              d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
              fill="#fff"
              fillRule="evenodd"
              opacity=".502"
            />
            <path
              d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
              fill="#fff"
              fillRule="evenodd"
              opacity=".102"
            />
            <path
              d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
              fill="#fff"
              fillRule="evenodd"
              opacity=".2"
            />
            <path
              d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
              fill="#fff"
              fillRule="evenodd"
              opacity=".2"
            />
          </svg>
        </figure>
        <div className="bg-success p-4 p-sm-5 rounded-3">
          <div className="row justify-content-center position-relative">
            {/* Svg */}
            <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
              <svg width="141px" height="141px">
                <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
              </svg>
            </figure>
            {/* Action box */}
            <div className="col-11 position-relative">
              <div className="row align-items-center">
                {/* Title */}
                <div className="col-lg-7">
                  <h3 className="text-white">Become an Instructor!</h3>
                  <p className="text-white mb-3 mb-lg-0">
                    Speedily say has suitable disposal add boy. On forth doubt
                    miles of child. Exercise joy man children rejoiced. Yet
                    uncommonly his ten who diminution astonished.
                  </p>
                </div>
                {/* Button */}
                <div className="col-lg-5 text-lg-end">
                  <a href="#" className="btn btn-dark mb-0">
                    Start Teaching today
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </div>
    </section>
    {/* =======================
  Action box END */}
  </main>
  

  )
}

export default CourseListBody