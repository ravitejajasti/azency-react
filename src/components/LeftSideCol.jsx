import React from 'react';

const LeftSideCol = ({children}) => {

  return (
    <div className="js-offcanvas-start offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column" tabIndex="-1" id="splittedOffcanvasContent" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <div className="offcanvas-body d-flex flex-column overflow-auto">
        <div className="d-flex justify-content-center flex-column align-items-center h-100 py-10 py-xl-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LeftSideCol;
