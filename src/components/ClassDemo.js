import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './ClassDemo.css';

class Demo extends Component{

     render(){

          return <div className="demo_style">
               <h1>Hello {this.props.name}</h1>
               <p>React is a JavaScript liberary for building UI.</p>
          </div>
     }
}
export default Demo;