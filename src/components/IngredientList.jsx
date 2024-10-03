import React from "react";
import Ingredient from "./Ingredient";

const IngredientList =({ ingredients, addToBurger}) => {
    return (
        <ul>
        {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} ingredient={ingredient} onAdd={addToBurger} />
        ))}
        </ul>
    )
}

export default IngredientList