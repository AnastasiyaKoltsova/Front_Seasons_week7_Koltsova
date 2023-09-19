import React, { useState, useEffect } from 'react';
import './Gallery.scss';

const Gallery = (props) => {

    const photos = props.photos || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPhoto = photos[currentIndex];

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    const showPreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const autoplay = setInterval(showNextCard, 3000);

        return () => {
            clearInterval(autoplay);
        };
    }, []);

    return (
        <div className="containerOfGallery">
            <div className="wrapperOfGallery">
                <button onClick={showPreviousCard} className="button">&#8592;</button>
                <div className='imageContainer'>
                    <img src={currentPhoto.url} alt={currentPhoto.alt} className="photo" />
                </div>
                <button onClick={showNextCard} className="button">&#8594;</button>
            </div>
            <p>{currentPhoto.alt}</p>
        </div>
    );
};

export default Gallery;
