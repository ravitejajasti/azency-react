import React from 'react';

function NavbarVerticalMenu({ category, subcategory, link }) {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Add any additional logic you want to execute on click
  };
  return (
    <div
  id="navbarVerticalMenu"
  className="nav nav-pills nav-vertical card-navbar-nav"
>
  {/* Collapse */}
  <div className="nav-item">
    <a
      className="nav-link dropdown-toggle @@if(category=='dashboards'){active}"
      href="#navbarVerticalMenuDashboards"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarVerticalMenuDashboards"
      aria-expanded="@@if(category=='dashboards'){true}@@if(category!=='dashboards'){false}"
      aria-controls="navbarVerticalMenuDashboards"
    >
      <i className="bi-house-door nav-icon" />
      <span className="nav-link-title">Dashboards</span>
    </a>
    <div
      id="navbarVerticalMenuDashboards"
      className="nav-collapse collapse @@if(category=='dashboards'){show}"
      data-bs-parent="#navbarVerticalMenu"
    >
      <a
        className="nav-link @@if(link=='index.html'){active}"
        href="@@autopath/index.html"
      >
        Default
      </a>
      <a
        className="nav-link @@if(link=='dashboard-alternative.html'){active}"
        href="@@autopath/dashboard-alternative.html"
      >
        Alternative
      </a>
    </div>
  </div>
  {/* End Collapse */}
  <span className="dropdown-header mt-4">Pages</span>
  <small className="bi-three-dots nav-subtitle-replacer" />
  {/* Collapse */}
  <div className="navbar-nav nav-compact"></div>
  <div id="navbarVerticalMenuPagesMenu">
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='users'){active}"
        href="#navbarVerticalMenuPagesUsersMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesUsersMenu"
        aria-expanded="@@if(category=='users'){true}@@if(category!=='users'){false}"
        aria-controls="navbarVerticalMenuPagesUsersMenu"
      >
        <i className="bi-people nav-icon" />
        <span className="nav-link-title">Users</span>
      </a>
      <div
        id="navbarVerticalMenuPagesUsersMenu"
        className="nav-collapse collapse @@if(category=='users'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='users.html'){active}"
          href="@@autopath/users.html"
        >
          Overview
        </a>
        <a
          className="nav-link @@if(link=='users-leaderboard.html'){active}"
          href="@@autopath/users-leaderboard.html"
        >
          Leaderboard
        </a>
        <a
          className="nav-link @@if(link=='users-add-user.html'){active}"
          href="@@autopath/users-add-user.html"
        >
          Add User <span className="badge bg-info rounded-pill ms-1">Hot</span>
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='user-profile'){active}"
        href="#navbarVerticalMenuPagesUserProfileMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesUserProfileMenu"
        aria-expanded="@@if(category=='user-profile'){true}@@if(category!=='user-profile'){false}"
        aria-controls="navbarVerticalMenuPagesUserProfileMenu"
      >
        <i className="bi-person nav-icon" />
        <span className="nav-link-title">
          User Profile{" "}
          <span className="badge bg-primary rounded-pill ms-1">5</span>
        </span>
      </a>
      <div
        id="navbarVerticalMenuPagesUserProfileMenu"
        className="nav-collapse collapse @@if(category=='user-profile'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='user-profile.html'){active}"
          href="@@autopath/user-profile.html"
        >
          Profile
        </a>
        <a
          className="nav-link @@if(link=='user-profile-teams.html'){active}"
          href="@@autopath/user-profile-teams.html"
        >
          Teams
        </a>
        <a
          className="nav-link @@if(link=='user-profile-projects.html'){active}"
          href="@@autopath/user-profile-projects.html"
        >
          Projects
        </a>
        <a
          className="nav-link @@if(link=='user-profile-connections.html'){active}"
          href="@@autopath/user-profile-connections.html"
        >
          Connections
        </a>
        <a
          className="nav-link @@if(link=='user-profile-my-profile.html'){active}"
          href="@@autopath/user-profile-my-profile.html"
        >
          My Profile
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='account'){active}"
        href="#navbarVerticalMenuPagesAccountMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesAccountMenu"
        aria-expanded="@@if(category=='account'){true}@@if(category!=='account'){false}"
        aria-controls="navbarVerticalMenuPagesAccountMenu"
      >
        <i className="bi-person-badge nav-icon" />
        <span className="nav-link-title">Account</span>
      </a>
      <div
        id="navbarVerticalMenuPagesAccountMenu"
        className="nav-collapse collapse @@if(category=='account'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='account-settings.html'){active}"
          href="@@autopath/account-settings.html"
        >
          Settings
        </a>
        <a
          className="nav-link @@if(link=='account-billing.html'){active}"
          href="@@autopath/account-billing.html"
        >
          Billing
        </a>
        <a
          className="nav-link @@if(link=='account-invoice.html'){active}"
          href="@@autopath/account-invoice.html"
        >
          Invoice
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='ecommerce'){active}"
        href="#navbarVerticalMenuPagesEcommerceMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesEcommerceMenu"
        aria-expanded="@@if(category=='ecommerce'){true}@@if(category!=='ecommerce'){false}"
        aria-controls="navbarVerticalMenuPagesEcommerceMenu"
      >
        <i className="bi-basket nav-icon" />
        <span className="nav-link-title">E-commerce</span>
      </a>
      <div
        id="navbarVerticalMenuPagesEcommerceMenu"
        className="nav-collapse collapse @@if(category=='ecommerce'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='ecommerce.html'){active}"
          href="@@autopath/ecommerce.html"
        >
          Overview
        </a>
        <div id="navbarVerticalMenuPagesMenuEcommerce">
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#navbarVerticalMenuPagesEcommerceProductsMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu"
              aria-expanded="@@if(subcategory=='products'){true}@@if(subcategory!=='products'){false}"
              aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu"
            >
              Products
            </a>
            <div
              id="navbarVerticalMenuPagesEcommerceProductsMenu"
              className="nav-collapse collapse @@if(subcategory=='products'){show}"
              data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce"
            >
              <a
                className="nav-link @@if(link=='ecommerce-products.html'){active}"
                href="@@autopath/ecommerce-products.html"
              >
                Products
              </a>
              <a
                className="nav-link @@if(link=='ecommerce-product-details.html'){active}"
                href="@@autopath/ecommerce-product-details.html"
              >
                Product Details
              </a>
              <a
                className="nav-link @@if(link=='ecommerce-add-product.html'){active}"
                href="@@autopath/ecommerce-add-product.html"
              >
                Add Product
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#navbarVerticalMenuPagesEcommerceOrdersMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu"
              aria-expanded="@@if(subcategory=='orders'){true}@@if(subcategory!=='orders'){false}"
              aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu"
            >
              Orders
            </a>
            <div
              id="navbarVerticalMenuPagesEcommerceOrdersMenu"
              className="nav-collapse collapse @@if(subcategory=='orders'){show}"
              data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce"
            >
              <a
                className="nav-link @@if(link=='ecommerce-orders.html'){active}"
                href="@@autopath/ecommerce-orders.html"
              >
                Orders
              </a>
              <a
                className="nav-link @@if(link=='ecommerce-order-details.html'){active}"
                href="@@autopath/ecommerce-order-details.html"
              >
                Order Details
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#navbarVerticalMenuPagesEcommerceCustomersMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu"
              aria-expanded="@@if(subcategory=='customers'){true}@@if(subcategory!=='customers'){false}"
              aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu"
            >
              Customers
            </a>
            <div
              id="navbarVerticalMenuPagesEcommerceCustomersMenu"
              className="nav-collapse collapse @@if(subcategory=='customers'){show}"
              data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce"
            >
              <a
                className="nav-link @@if(link=='ecommerce-customers.html'){active}"
                href="@@autopath/ecommerce-customers.html"
              >
                Customers
              </a>
              <a
                className="nav-link @@if(link=='ecommerce-customer-details.html'){active}"
                href="@@autopath/ecommerce-customer-details.html"
              >
                Customer Details
              </a>
              <a
                className="nav-link @@if(link=='ecommerce-add-customers.html'){active}"
                href="@@autopath/ecommerce-add-customers.html"
              >
                Add Customers
              </a>
            </div>
          </div>
          {/* End Collapse */}
        </div>
        <a
          className="nav-link @@if(link=='ecommerce-referrals.html'){active}"
          href="@@autopath/ecommerce-referrals.html"
        >
          Referrals
        </a>
        <a
          className="nav-link @@if(link=='ecommerce-manage-reviews.html'){active}"
          href="@@autopath/ecommerce-manage-reviews.html"
        >
          Manage Reviews
        </a>
        <a
          className="nav-link @@if(link=='ecommerce-checkout.html'){active}"
          href="@@autopath/ecommerce-checkout.html"
        >
          Checkout
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='projects'){active}"
        href="#navbarVerticalMenuPagesProjectsMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesProjectsMenu"
        aria-expanded="@@if(category=='projects'){true}@@if(category!=='projects'){false}"
        aria-controls="navbarVerticalMenuPagesProjectsMenu"
      >
        <i className="bi-stickies nav-icon" />
        <span className="nav-link-title">Projects</span>
      </a>
      <div
        id="navbarVerticalMenuPagesProjectsMenu"
        className="nav-collapse collapse @@if(category=='projects'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='projects.html'){active}"
          href="@@autopath/projects.html"
        >
          Overview
        </a>
        <a
          className="nav-link @@if(link=='projects-timeline.html'){active}"
          href="@@autopath/projects-timeline.html"
        >
          Timeline
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='project'){active}"
        href="#navbarVerticalMenuPagesProjectMenu"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuPagesProjectMenu"
        aria-expanded="@@if(category=='project'){true}@@if(category!=='project'){false}"
        aria-controls="navbarVerticalMenuPagesProjectMenu"
      >
        <i className="bi-briefcase nav-icon" />
        <span className="nav-link-title">Project</span>
      </a>
      <div
        id="navbarVerticalMenuPagesProjectMenu"
        className="nav-collapse collapse @@if(category=='project'){show}"
        data-bs-parent="#navbarVerticalMenuPagesMenu"
      >
        <a
          className="nav-link @@if(link=='project.html'){active}"
          href="@@autopath/project.html"
        >
          Overview
        </a>
        <a
          className="nav-link @@if(link=='project-files.html'){active}"
          href="@@autopath/project-files.html"
        >
          Files
        </a>
        <a
          className="nav-link @@if(link=='project-activity.html'){active}"
          href="@@autopath/project-activity.html"
        >
          Activity
        </a>
        <a
          className="nav-link @@if(link=='project-teams.html'){active}"
          href="@@autopath/project-teams.html"
        >
          Teams
        </a>
        <a
          className="nav-link @@if(link=='project-settings.html'){active}"
          href="@@autopath/project-settings.html"
        >
          Settings
        </a>
      </div>
    </div>
    {/* End Collapse */}
    {/* Collapse */}
    <div className="nav-item">
      <a
        className="nav-link dropdown-toggle @@if(category=='authentication'){active} collapsed"
        href="#"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalMenuAuthentication"
        aria-expanded="@@if(category=='authentication'){true}@@if(category!=='authentication'){false}"
        aria-controls="navbarVerticalMenuAuthentication"
      >
        <i className="bi-shield-lock nav-icon" />
        <span className="nav-link-title">Authentication</span>
      </a>
      <div
        id="navbarVerticalMenuAuthentication"
        className="nav-collapse collapse @@if(category=='authentication'){show}"
        data-bs-parent="#navbarVerticalMenu"
      >
        <div id="navbarVerticalMenuAuthenticationMenu">
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle @@if(category=='login'){active}"
              href="#navbarVerticalMenuAuthenticationLoginMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuAuthenticationLoginMenu"
              aria-expanded="@@if(category=='login'){true}@@if(category!=='login'){false}"
              aria-controls="navbarVerticalMenuAuthenticationLoginMenu"
            >
              Log In
            </a>
            <div
              id="navbarVerticalMenuAuthenticationLoginMenu"
              className="nav-collapse collapse @@if(subcategory=='login'){show}"
              data-bs-parent="#navbarVerticalMenuAuthenticationMenu"
            >
              <a
                className="nav-link @@if(link=='authentication-login-basic.html'){active}"
                href="@@autopath/authentication-login-basic.html"
              >
                Basic
              </a>
              <a
                className="nav-link @@if(link=='authentication-login-cover.html'){active}"
                href="@@autopath/authentication-login-cover.html"
              >
                Cover
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle @@if(category=='signup'){active}"
              href="#navbarVerticalMenuAuthenticationSignupMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu"
              aria-expanded="@@if(category=='signup'){true}@@if(category!=='signup'){false}"
              aria-controls="navbarVerticalMenuAuthenticationSignupMenu"
            >
              Sign Up
            </a>
            <div
              id="navbarVerticalMenuAuthenticationSignupMenu"
              className="nav-collapse collapse @@if(subcategory=='signup'){show}"
              data-bs-parent="#navbarVerticalMenuAuthenticationMenu"
            >
              <a
                className="nav-link @@if(link=='authentication-signup-basic.html'){active}"
                href="@@autopath/authentication-signup-basic.html"
              >
                Basic
              </a>
              <a
                className="nav-link @@if(link=='authentication-signup-cover.html'){active}"
                href="@@autopath/authentication-signup-cover.html"
              >
                Cover
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle @@if(category=='reset-password'){active}"
              href="#navbarVerticalMenuAuthenticationResetPasswordMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu"
              aria-expanded="@@if(category=='reset-password'){true}@@if(category!=='reset-password'){false}"
              aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu"
            >
              Reset Password
            </a>
            <div
              id="navbarVerticalMenuAuthenticationResetPasswordMenu"
              className="nav-collapse collapse @@if(subcategory=='reset-password'){show}"
              data-bs-parent="#navbarVerticalMenuAuthenticationMenu"
            >
              <a
                className="nav-link @@if(link=='authentication-reset-password-basic.html'){active}"
                href="@@autopath/authentication-reset-password-basic.html"
              >
                Basic
              </a>
              <a
                className="nav-link @@if(link=='authentication-reset-password-cover.html'){active}"
                href="@@autopath/authentication-reset-password-cover.html"
              >
                Cover
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle @@if(category=='email-verification'){active}"
              href="#navbarVerticalMenuAuthenticationEmailVerificationMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu"
              aria-expanded="@@if(category=='email-verification'){true}@@if(category!=='email-verification'){false}"
              aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu"
            >
              Email Verification
            </a>
            <div
              id="navbarVerticalMenuAuthenticationEmailVerificationMenu"
              className="nav-collapse collapse @@if(subcategory=='email-verification'){show}"
              data-bs-parent="#navbarVerticalMenuAuthenticationMenu"
            >
              <a
                className="nav-link @@if(link=='authentication-email-verification-basic.html'){active}"
                href="@@autopath/authentication-email-verification-basic.html"
              >
                Basic
              </a>
              <a
                className="nav-link @@if(link=='authentication-email-verification-cover.html'){active}"
                href="@@autopath/authentication-email-verification-cover.html"
              >
                Cover
              </a>
            </div>
          </div>
          {/* End Collapse */}
          {/* Collapse */}
          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle @@if(category=='2-step-verification'){active}"
              href="#navbarVerticalMenuAuthentication2StepVerificationMenu"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu"
              aria-expanded="@@if(category=='2-step-verification'){true}@@if(category!=='2-step-verification'){false}"
              aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu"
            >
              2-step Verification
            </a>
            <div
              id="navbarVerticalMenuAuthentication2StepVerificationMenu"
              className="nav-collapse collapse @@if(subcategory=='2-step-verification'){show}"
              data-bs-parent="#navbarVerticalMenuAuthenticationMenu"
            >
              <a
                className="nav-link @@if(link=='authentication-2-step-verification-basic.html'){active}"
                href="@@autopath/authentication-2-step-verification-basic.html"
              >
                Basic
              </a>
              <a
                className="nav-link @@if(link=='authentication-2-step-verification-cover.html'){active}"
                href="@@autopath/authentication-2-step-verification-cover.html"
              >
                Cover
              </a>
            </div>
          </div>
          {/* End Collapse */}
          <a
            className="nav-link"
            href="{handleClick}"
            data-bs-toggle="modal"
            data-bs-target="#welcomeMessageModal"
          >
            Welcome Message
          </a>
          <a
            className="nav-link @@if(link=='error-404.html'){active}"
            href="@@autopath/error-404.html"
          >
            Error 404
          </a>
          <a
            className="nav-link @@if(link=='error-500.html'){active}"
            href="@@autopath/error-500.html"
          >
            Error 500
          </a>
        </div>
      </div>
    </div>
    {/* End Collapse */}
    <div className="nav-item">
      <a
        className="nav-link @@if(link=='api-keys.html'){active}"
        href="@@autopath/api-keys.html"
        data-placement="left"
      >
        <i className="bi-key nav-icon" />
        <span className="nav-link-title">API Keys</span>
      </a>
    </div>
    <div className="nav-item">
      <a
        className="nav-link @@if(link=='welcome-page.html'){active}"
        href="@@autopath/welcome-page.html"
        data-placement="left"
      >
        <i className="bi-eye nav-icon" />
        <span className="nav-link-title">Welcome Page</span>
      </a>
    </div>
    <div className="nav-item">
      <a
        className="nav-link @@if(link=='landing.html'){active}"
        href="@@autopath/landing.html"
        data-placement="left"
      >
        <i className="bi-box-seam nav-icon" />
        <span className="nav-link-title">
          Landing Page{" "}
          <span className="badge bg-info rounded-pill ms-1">New</span>
        </span>
      </a>
    </div>
  </div>
  {/* End Collapse */}
  <span className="dropdown-header mt-4">Apps</span>
  <small className="bi-three-dots nav-subtitle-replacer" />

</div>

  );
}

export default NavbarVerticalMenu;
