// src/components/IngredientList.jsx
import React from "react";


const IngredientList = (props) => {
    return(
      <ul>
        {IngredientList.name}
        {inBurgerStack ? (
          <button onClick={() => onpointermove(ingredient)}>X</button>
        ) : (
          <button onClick={() => ongamepaddisconnected(ingredient)}>+</button>
        )}
      </ul>
    ) 
  }
  
  export default IngredientList;
  