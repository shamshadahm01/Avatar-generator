import React from 'react';
import './Avatarlist.css';
import 'tachyons'

const Avatarlist = (props) => {

     return (
          <div className ="avatarstyle ma4 bg-blue dib tc grow shadow-4 pa4">
               <img src = {`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
               <h1>{props.name}</h1>
               <p>{props.work}</p>
          </div>

     )

}

export default Avatarlist;