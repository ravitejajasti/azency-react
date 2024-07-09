import React from 'react';

const LeftSideCol = ({children}) => {

  return (
    <div className="js-offcanvas-start offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column" tabIndex="-1" id="splittedOffcanvasContent" style={{ maxHeight: '100vh', overflowY: 'auto', minHeight:'calc(100vh - 3.875rem)' }}>
      {children}
    </div>
  );
};

export default LeftSideCol;
