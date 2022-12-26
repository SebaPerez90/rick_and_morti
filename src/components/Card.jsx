import React from 'react';
// import batman  from '../imagenes/batman.png'

export default function Card(props) {
   return (
      <div>
          <button onClick={props.onClose}>X</button>
         <h3>{props.name}</h3>
         <h3>{props.species}</h3>
         <h3>{props.gender}</h3>
         <img  src={props.image} alt={props.name} /> 
      </div>
   );
}
