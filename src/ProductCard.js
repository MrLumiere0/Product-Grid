import React from 'react';
import './App.css'


export default function ProductCard () {
    return (
        <div className='"NewProductCard'>
        <h1 className='NewProductCard'>{products.name}</h1>
        <img className='NewProductCard'>{products.image}</img>
        <p className='NewProductCard'>{products.price}</p>
       
        </div>
        
    );
}