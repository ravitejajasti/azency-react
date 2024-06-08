import React from 'react'
import { Link } from 'react-router-dom';
function Content(params) {
    return (
        <>
<div className="content container">
    <div className="row justify-content-lg-center pt-lg-5 pt-xl-10">
      <div className="col-lg-9">
        {/* Title */}
        <div className="text-center">
          <img className="img-fluid mb-5" src="src/assets/svg/layouts/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="default" style={{maxWidth: '15rem'}} />
          <img className="img-fluid mb-5" src="src/assets/svg/layouts-light/demo-layouts-default-classic.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{maxWidth: '15rem'}} />
          <h1>Default (Classic)</h1>
          <p>Customize your overview page layout. Choose the one that best fits your needs.</p>
          <Link to="/projects" className="btn btn-primary">Go back to Layouts</Link>
        </div>
        {/* End Title */}
      </div>
    </div>
    {/* End Row */}
  </div>
</>

    )
}


export default Content;