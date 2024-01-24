import React from 'react';
import './App.css'


export default function ProductCard (props) {   
    return (
        <div className='product-card'>
        <h3 >{props.name}</h3>
        <img>{props.image}</img>
        <p>{props.price}</p>
        </div>
        
    );
}