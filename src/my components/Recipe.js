import React from 'react';
import CuisineCard from './CuisineCard';
import indian1 from './indian1.png';
import chinese from './chinese.jpg';
import tandoor from './tandoor.png';
import './Recipe.css';

const cuisines = [
    {
        title: 'Indian Cuisine',
        description: 'Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.',
        imageUrl: indian1,
        imagePosition: 'left'
    },
    {
        title: 'Chinese Cuisine',
        description: 'Chinese cuisine is an important part of Chinese culture, which includes cuisine originating from the diverse regions of China as well as from Chinese people in other parts of the world. The history of Chinese cuisine in China stretches back for thousands of years and has changed from period to period and in each region according to climate, imperial fashions, and local preferences.',
        imageUrl: chinese,
        imagePosition: 'right'
    },
    {
        title: 'Tandoor Cuisine',
        description: 'Tandoori cooking is a style of cooking based on the use of a tandoor, a cylindrical clay or metal oven. The food is cooked with high, dry heat, and the fats and juices drip into the coals, creating a smoky flavor. Tandoori chicken is a well-known dish cooked in this manner.',
        imageUrl: tandoor,
        imagePosition: 'left'
    }
];

export default function Recipe() {
    return (
        <div className="recipe-container">
            {cuisines.map((cuisine, index) => (
                <CuisineCard
                    key={index}
                    title={cuisine.title}
                    description={cuisine.description}
                    imageUrl={cuisine.imageUrl}
                    imagePosition={cuisine.imagePosition}
                />
            ))}
        </div>
    );
} 