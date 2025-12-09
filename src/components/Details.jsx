import React from 'react';

const Details = () => {
    return (
        <section id="details" className="content-section fade-in-scroll">
            <div className="container">
                <h2 className="section-title">The Wedding</h2>

                <div className="details-grid">
                    <div className="detail-card">
                        <h3>Ceremony</h3>
                        <p className="time">11:00 AM</p>
                        <p className="location">Standesamt Hohen Neuendorf</p>
                        <p className="address">Oranienburger Str. 2, 16540 Hohen Neuendorf</p>
                    </div>

                    <div className="divider-vertical"></div>

                    <div className="detail-card">
                        <h3>Celebration</h3>
                        <p className="cuisine">01:00 PM</p>
                        <p className="location">Filo d'Olio Glienicke</p>
                        <p className="address">Hauptstraße 19, 16548 Glienicke/Nordbahn</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
