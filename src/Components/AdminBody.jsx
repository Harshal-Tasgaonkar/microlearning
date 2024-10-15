import React from 'react';

const AdminBody = () => {
  return (
    <div className="page-content">
      {/* Top bar START */}

      {/* Top bar END */}
      <div className="page-content-wrapper border">

        {/* Course boxes START */}
        <div className="row g-4 mb-4">
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
              <h6>Total Courses</h6>
              <h2 className="mb-0 fs-1 text-primary">1200</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
              <h6>Total Teachers</h6>
              <h2 className="mb-0 fs-1 text-success">996</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-warning bg-opacity-15 border border-warning rounded-3">
              <h6>Total Students</h6>
              <h2 className="mb-0 fs-1 text-warning">200</h2>
            </div>
          </div>
        </div>

        {/* Second row of course boxes START */}
        <div className="row g-4 mb-4">
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-danger bg-opacity-10 border border-danger rounded-3">
              <h6>Total Categories</h6>
              <h2 className="mb-0 fs-1 text-danger">50</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-info bg-opacity-10 border border-info rounded-3">
              <h6>Total Skills</h6>
              <h2 className="mb-0 fs-1 text-info">100</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-secondary bg-opacity-10 border border-secondary rounded-3">
              <h6>Total Inquiries</h6>
              <h2 className="mb-0 fs-1 text-secondary">54</h2>
            </div>
          </div>
        </div>
        {/* Course boxes END */}

      </div>
      {/* Top listed Cards END */}
    </div>
  );
}

export default AdminBody;
