import React, { useState}  from 'react';
import IngredientList from './components/Ingredient';
import BurgerStack from './components/BurgerStack';
import Ingredient from './components/Ingredient';

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (ingredientToRemove) => {
    setStack(stack.filter(ingredient => ingredient.name !== ingredientToRemove.name))
  }

  return (
    <main>
       <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
       <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      <section>
      
      </section>
    </main>
  );
};

export default App;
