import React from 'react';
import './App.css';


export default function DropDownMenu ({props, onSelect, sorttType} ) {

    return (
       <div>
        <label className='Filter-label'>Sort Price By</label>
            <select className='Filter-selections' for ='product-sort' value= {sorttType} onChange={onSelect}>
                <option value= 'none' >None</option>
                <option value = "price">Price</option>
                <option value ="atoz" >Alphabetical (A to Z)</option>
                <option value="ztoa">Alphabetical (Z to A)</option>
            </select>
       </div>
    );
}