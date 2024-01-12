// ProductGrid.js
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import products from './products';
import DropDownMenu from './DropdownMenu.js';
import ProductCard from './ProductCard.js';


const ProductGrid = () => {
 
const [selectedSort, setSelectedSort] = useState(' ');

// How to do conditional rendering (couldn't figure out from youtube)

  function handlePriceSort (selectedTypeSort, products) {
    if (selectedTypeSort == 'price') {
             setSelectedSort(products.sort((a,b) => a.price - b.price));
          }
    
    else if (selectedTypeSort == 'atoz') {
      setSelectedSort(products.sort((a,b) => b.name - a.name));

          }
    
    else if (selectedTypeSort == 'ztoa') {
      setSelectedSort(products.sort((a,b) => b.name - a.name));
          } 
        }


  return (
    <div>
      <DropDownMenu onSelecteditem = {(e) => handlePriceSort(e.target.value)}/>
{/*                
               {/*How do we enable the output of our func that checks our value of selected item  to redner the correct logic */}
               
                {/* {((products) => return ( 
                            <ProductCard key={product.id} name={product.name} price={product.price}/>)} */}
    </div>
  ); 
};

export default ProductGrid;
