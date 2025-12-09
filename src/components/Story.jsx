import React from 'react';
import storyImg1 from '../assets/GAU08611.jpg';
import storyImg2 from '../assets/GAU08762.jpg';
import { useLanguage } from '../context/LanguageContext';

const Story = () => {
    const { t } = useLanguage();

    return (
        <section id="story" className="content-section">
            <div className="container">
                <h2 className="section-title">{t.story.title}</h2>
                <div className="story-grid">
                    <div className="story-text">
                        <p dangerouslySetInnerHTML={{ __html: t.story.p1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.story.p2 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.story.p3 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.story.p4 }}></p>
                    </div>
                    <div className="story-images">
                        <img src={storyImg2} alt="Story Moment 2" className="story-photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
