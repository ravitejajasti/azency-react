import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <p className="fs-6 mb-0">&copy; Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-content-end">
            <ul className="list-inline list-separator">
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">FAQ</a>
              </li>
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">License</a>
              </li>
              <li className="list-inline-item">
              {/* Keyboard Shortcuts Toggle */}
                <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts">
                  <i className="bi-command"></i>
                </button>
              {/* End Keyboard Shortcuts Toggle */}
              </li>
            </ul>
            {/* End List Separator */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </footer>
  );
};

export default Footer;