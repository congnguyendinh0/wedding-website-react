import React from 'react';

const Envelope = ({ isOpen, onClick }) => {
    return (
        <div className={`envelope-container ${isOpen ? 'open' : ''}`} id="envelope-container" onClick={onClick}>
            <div className="envelope">
                <div className="flap left"></div>
                <div className="flap right"></div>
                <div className="flap bottom"></div>
                <div className="flap top">
                    <div className="seal"></div>
                </div>
            </div>
        </div>
    );
};

export default Envelope;
