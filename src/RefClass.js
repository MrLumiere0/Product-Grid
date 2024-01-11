import React,{Component, useRef} from 'react';

class TextReader extends Component {

 constructor(props) {
 super(props);
 this.textView = React.createRef();
 }
reset(){
    console.log('I can be accessed by this.textView.current.reset()')
}
 componentDidMount(){
 this.textView.current.focus();
 }
 render(){
 return (
 <textarea style={{width:'380px',height:'400px'}}
 ref={this.textView}>{this.props.bookText}</textarea>
 );
 }
}

function TextReaderFxn(props){
    const textView2 = useRef(null);
    console.log(textView2.current);
    return(
        <div ref = {textView2}> </div>
    )
}

class ParentComponent extends React.Component{
constructor(props){
    super(props);
    this.childRef = React.createRef();

}

callChildReset = () => {
    if (this.childRef.current){
        this.childRef.current.reset();
    }
}
render() {
    return(
        <div> 
            <ChildComponent ref={this.childRef} />
            <button onClick = {this.callChildReset}>Press me to call the reset method</button>
        </div>
    );
}
}

class ChildComponent extends React.Component{
    reset(){
        alert("Reset method triggered")
    }
    
    render() {
        return (
            <div>Child Component</div>
        );
    }
}

const ScrollToElement = (ref)=>{window.scrollTo(0,ref.current.offsetTop)};
function ParentComponent(){
 const bookStart = useRef();
 return (
 <>
 <h1 ref={bookStart}>CHAPTER 1. Loomings.</h1>

 <div style={{height:'2000px'}}><p>...</p></div>
 <button onClick={() => ScrollToElement(bookStart)}>
 Scroll to the Beginning
 </button>
 </>
 );
}
export default ParentComponent;

/*
import React from 'react';
import {BroswerRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ProductGrid from './ProductGrid';
import App from './App';
function Main(){
    return {
        <Router>
        <nav>
        <ul>
        <li>  <Link to="/">Home</Link></li>
        <li>  <Link to="/grid">Product Grid</Link></li>

        </ul>
        
        </nav>
    <Routes>
    <Route path="/" element ={<App/>}/>

    <Route path="/grid" element ={ProductGrid}/>
    </Routes>
    </Router>
    
}


}
*/