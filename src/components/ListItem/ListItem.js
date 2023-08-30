import React from 'react';

export default function ListItem(props) {
  return (
    <div>
        {!props.foodData.haveTried && <h3>Try this food</h3>}
        <h1>{props.foodData.title}
            {props.foodData.rating > 0 ? `${props.foodData.rating}/5` : `No Rating`}
        </h1>
        <img src ={props.foodData.image} alt={props.foodData.title}/>
        <p>{props.foodData.description}</p>
    </div>
  )
}

