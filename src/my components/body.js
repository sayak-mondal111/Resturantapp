import React from 'react'
import './body.css'
import Recipe from './Recipe'
// import Form from './Form'


export default function body() {
    return (
        <div className='body'>
            <h1>welcome to our resturant</h1>
            {/* <Form/> */}
            <Recipe />
            

        </div>
    )
}
