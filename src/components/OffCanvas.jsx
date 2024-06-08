import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const OffCanvas = ({ children, show, onClose, title }) => {
    const offcanvasRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (show && offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show, onClose]);

    return show
        ? ReactDOM.createPortal(
            <>
                <div className="offcanvas-backdrop show" />
                <div className="offcanvas offcanvas-end show" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref={offcanvasRef}>
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">{title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
                    </div>
                    <div className="offcanvas-body">
                        {children}
                    </div>
                </div>
            </>,
            document.body
        )
        : null;
};

export default OffCanvas;
