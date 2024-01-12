import React from 'react';
import './App.css';

export default function DropDownMenu ({children, onSelecteditem} ) {

    return (
       <div>
        <label className='Filter-label'>Sort Price By</label>
            <select className='Filter-selections' value='' for ='product-sort' onChange={onSelecteditem}>
                <option value= 'blank'></option>
                <option value = 'price'>Price</option>
                <option value ='atoz' >Alphabetical (A to Z)</option>
                <option value='ztoa'>Alphabetical (Z to A)</option>
            </select>
       </div>
    );
}