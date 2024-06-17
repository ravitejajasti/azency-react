import React from 'react';

const LeftSideCol = ({children, setRoomId}) => {
  const handleRoomClick = (id) => {
    setRoomId(id);
  };
  
  return (
    <div className="js-offcanvas-start offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column" tabIndex="-1" id="splittedOffcanvasContent" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <div className="offcanvas-body d-flex flex-column overflow-auto">
        <div className="d-flex justify-content-center flex-column align-items-center h-100 py-10 py-xl-0">
          {children}
          <div onClick={() => handleRoomClick(28)}>Room 1</div>
          <div onClick={() => handleRoomClick(29)}>Room 2</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCol;
