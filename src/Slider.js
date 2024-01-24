import React from 'react';
import './App.css'


 export default function Slider (props) {

    return (
        <div> 
                <p><label for="range_weight">Price Sort: </label> <input class="slider" type="range"   min="0" max="350" value= {props.sliderState} onChange={props.onSlide} />
                <span  class="slider_label"></span></p>
        </div>
    )

}