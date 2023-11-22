import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
 
  const handleDelete = (id)=>{
  const newRecipes = recipes.filter((recipe, index)=>index!==id);
  setRecipes(newRecipes)
  }
  const addRecipe = (currentRecipe) => {
  setRecipes((prevRecipes) => [
    ...prevRecipes,
     currentRecipe,
  ]);
};


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes}
        handleDelete={handleDelete} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
