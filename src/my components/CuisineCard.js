import React from 'react';
import './CuisineCard.css';

const CuisineCard = ({ title, description, imageUrl, imagePosition }) => {
    const cardClass = `cuisine-card ${imagePosition === 'right' ? 'image-right' : ''}`;

    return (
        <div className={cardClass}>
            <div className="cuisine-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="cuisine-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btn btn-outline-primary">Learn More</button>
            </div>
        </div>
    );
};

export default CuisineCard; 