import React from 'react'
import './Header.css'
import food from './food.png'

export default function Header() {
    return (
        <>
            <div className='header1'>
                <div className='header-content'>
                    <div className='text-content'>
                        <h1>Experience the Taste of India</h1>
                        <p>Discover authentic Indian cuisine and a memorable dining experience.</p>
                        <button className="btn btn-primary">View Menu</button>
                    </div>
                    <div className='image-content'>
                        <img src={food} alt="Delicious Indian food" />
                    </div>
                </div>
            </div>
        </>
    )
}
