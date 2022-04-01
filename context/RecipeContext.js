import { createContext, useContext, useState, useEffect } from 'react';
import useRecipe from 'hooks/useRecipe';

export const recipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const recipe = useRecipe();
  return (
    <recipeContext.Provider value={recipe}>{children}</recipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(recipeContext);
