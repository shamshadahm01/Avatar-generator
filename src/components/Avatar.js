import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {

     constructor() {
          super();
          this.state = {
               name: "Welcome to Avatar World"
          }
     }

     setstate = () => {

          this.setState({

               name: "Subscribe the Shamshad channel"

          })

     }

     // resetstate = () => {
     //      this.setState({name: {this.state.name}})
     // }

     render() {
          const avatararray = [

               {
                    id: 1,
                    name: "Vinod",
                    work: "Developer"
               },
               {
                    id: 2,
                    name: "Thapa",
                    work: "Tester"
               },
               {
                    id: 3,
                    name: "Ramesh",
                    work: "HR"
               },
               {
                    id: 4,
                    name: "Shamshad",
                    work: "Sales"
               }

          ]

          const avatararaaydata = avatararray.map((avatarcard, ind) => {

               return <Avatarlist key={ind} id={avatararray[ind].id}
                    name={avatararray[ind].name}
                    work={avatararray[ind].work} />

          })

          return (

               <div className="mainpage">
                    <h1>{this.state.name}</h1>
                    <p>{avatararaaydata}</p>

                    <button onClick={this.setstate} className="button1 blue">Subscribe</button>
                    <button onClick='' className="button2 red">UnSubscribe</button>

               </div>
          )
     }

}
export default Avatar;