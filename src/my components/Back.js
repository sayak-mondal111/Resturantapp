import React from 'react'
import background from '../background.jpg'
import './Back.css'

export default function Back() {
    return (
        <div className="background-container">
            <img
                src={background}
                alt="background"
                className="background-image"
            />
            <div className="background-overlay"></div>
        </div>
    )
}
