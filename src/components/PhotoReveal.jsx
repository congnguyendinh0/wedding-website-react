import couplePhoto from '../assets/GAU07379.jpg';

const PhotoReveal = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className={`photo-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="photo-frame">
                <img
                    src={couplePhoto}
                    alt="Couple"
                    className="couple-photo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <div className="photo-caption">
                    <h2>We are getting married!</h2>
                </div>
            </div>
        </div>
    );
};

export default PhotoReveal;
