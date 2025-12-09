import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useLanguage();

    const faqData = [
        {
            title: t.faq.ceremony.title,
            content: (
                <>
                    <p><strong>{t.hero.location}:</strong> Standesamt Hohen Neuendorf (Town Hall)</p>
                    <p><strong>{t.hero.address}:</strong> Oranienburger Str. 2, 16540 Hohen Neuendorf</p>

                    <div className="faq-subsection">
                        <h4>{t.faq.ceremony.transport_title}</h4>
                        <ul>
                            <li>{t.faq.ceremony.transport_text_1}</li>
                            <li>{t.faq.ceremony.transport_text_2}</li>
                        </ul>
                    </div>

                    <div className="faq-subsection">
                        <h4>{t.faq.ceremony.parking_title}</h4>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t.faq.ceremony.parking_text_1 }}></li>
                            <li dangerouslySetInnerHTML={{ __html: t.faq.ceremony.parking_text_2 }}></li>
                        </ul>
                        <p className="note" dangerouslySetInnerHTML={{ __html: t.faq.ceremony.note }}></p>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <iframe
                            width="100%"
                            height="450px"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Stadtverwaltung%20Hohen%20Neuendorf%2C%20Oranienburger%20Stra%C3%9Fe%2C%20Hohen%20Neuendorf%2C%20Germany&maptype=roadmap"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
            )
        },
        {
            title: t.faq.celebration.title,
            content: (
                <>
                    <p><strong>{t.hero.location}:</strong> Ristorante Filo d'Olio</p>
                    <p><strong>{t.hero.address}:</strong> Karl-Liebknecht-Straße 55, 16548 Glienicke/Nordbahn</p>

                    <div className="faq-subsection">
                        <h4>{t.faq.celebration.transport_title}</h4>
                        <ul>
                            <li dangerouslySetInnerHTML={{ __html: t.faq.celebration.transport_car }}></li>
                            <li>{t.faq.celebration.transport_public}
                                <ul>
                                    <li>{t.faq.celebration.transport_step_1}</li>
                                    <li>{t.faq.celebration.transport_step_2}</li>
                                    <li>{t.faq.celebration.transport_step_3}</li>
                                </ul>
                            </li>
                            <li dangerouslySetInnerHTML={{ __html: t.faq.celebration.time }}></li>
                        </ul>
                    </div>

                    <div className="faq-subsection">
                        <h4>{t.faq.celebration.parking_title}</h4>
                        <p>{t.faq.celebration.parking_text}</p>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <iframe
                            width="100%"
                            height="450px"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ristorante%20Filo%20d'Olio%20glienicke&maptype=roadmap"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
            )
        },
        {
            title: t.faq.accommodation.title,
            content: (
                <>
                    <div className="faq-subsection">
                        <h4>{t.faq.accommodation.loc1}</h4>
                        <ul>
                            <li><strong>Hotel am Lunik Park</strong> (Stolper Str. 8) – Close to the S-Bahn and Town Hall.</li>
                            <li><strong>Hotel Zum Grünen Turm</strong> (Oranienburger Str. 59) – Central and traditional.</li>
                        </ul>
                    </div>

                    <div className="faq-subsection">
                        <h4>{t.faq.accommodation.loc2}</h4>
                        <ul>
                            <li><strong>Wyndham Garden Hennigsdorf Berlin</strong> (Fontanestr. 110) – Larger hotel, approx. 15 min drive to ceremony.</li>
                            <li><strong>T3 Budget Berlin Hennigsdorf</strong> (Neuendorfstr. 23) – Budget-friendly option.</li>
                        </ul>
                    </div>
                </>
            )
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="content-section">
            <div className="container">
                <h2 className="section-title">{t.faq.title}</h2>
                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <span className="accordion-title">{item.title}</span>
                                <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="accordion-content" style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}>
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
