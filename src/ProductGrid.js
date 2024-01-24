import React from 'react';
import './App.css'
import products from './products';
import DropDownMenu from './DropdownMenu.js';
import ProductCard from './ProductCard.js';
import { useState } from 'react';
import Slider from './Slider.js';



const ProductGrid = () => {

  const [productData, setProducts] = useState(products);
  const [sortType, setSortType] = useState('');
  const [sliderSort, setSliderSort] = useState(350);

  function handleSort (selectedButton) {
    const type = selectedButton.value;
    setSortType(type);
    let productList = [...products];

    if (type === "price") {
      console.log("price");
      productList.sort((a,b) => a.price - b.price);
    }
    
    else if (type === "atoz") {
      console.log("atoz");
      productList.sort((a,b) => a.name > b.name ? 1 :-1);
    }

    else if (type === "ztoa") {
      console.log("atoz");
      productList.sort((a,b) => a.name > b.name ? -1 : 1);
    }

    else {
      productList.sort();
    }

    setProducts(productList);
  }


function handleSliderSort (slideValue) {
  let price = slideValue.value;
  setSliderSort(price);
  let productsList = [...products];

  productsList = productsList.filter((products) => {
      return products.price < price;
  })
   
  setProducts(productsList);
}





  return (
    <>
    <div>
            <DropDownMenu sorttType ={sortType} onSelect={(e)=> handleSort(e.target)} />
    </div>

    <div className="sider-container">
      <Slider sliderState = {sliderSort} onSlide = {(e)=>handleSliderSort(e.target)}/>
    </div>
    
    <div className="products">
      {productData.map(object => <ProductCard {...object} />)}
    </div>

    </>
    );

};

export default ProductGrid;
