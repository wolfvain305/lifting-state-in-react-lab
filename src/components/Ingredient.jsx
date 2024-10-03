// src/components/IngredientList.jsx
import React from "react";


const Ingredient = ({ingredient, onAdd, onRemove, inBurgerStack}) => {
    return(
      <ul>
        {Ingredient.name}
        {inBurgerStack ? (
          <button onClick={() => onRemove(ingredient)}>X</button>
        ) : (
          <button onClick={() => onAdd(ingredient)}>+</button>
        )}
      </ul>
    ) 
  }
  
  export default Ingredient;
  