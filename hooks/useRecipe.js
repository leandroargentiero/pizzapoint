import { useState, useEffect } from 'react';

const useRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({
    style: 'Neapolitan',
    doughballs: 2,
    ballweight: 250,
    water: 60,
    salt: 3,
    leavening: 8,
    roomtemperature: 20,
    totals: {
      flour: 0,
      water: 0,
      salt: 0,
      yeast: 0,
    },
  });

  useEffect(() => {
    setLoading(true);
    const initialTotals = calculateRecipe(recipe);
    setRecipe({
      ...recipe,
      totals: initialTotals,
    });
    setLoading(false);
  }, []);

  const handleRecipeChange = (ingredient, newVal) => {
    setLoading(true);
    const newIngredients = {
      ...recipe,
      [ingredient]: newVal,
    };
    const newTotals = calculateRecipe(newIngredients);

    setRecipe({
      ...newIngredients,
      totals: newTotals,
    });
    setLoading(false);
  };

  return {
    loading,
    recipe,
    handleRecipeChange,
  };
};

const calculateRecipe = ({
  doughballs,
  ballweight,
  water: waterPercentage,
  salt: saltPercentage,
}) => {
  const totalDoughWeight = doughballs * ballweight;
  const flourPercentage = 100;
  const yeastPercentage = 0.2;
  const totalPercentage =
    flourPercentage + yeastPercentage + waterPercentage + saltPercentage;

  return {
    flour: calculateIngredientTotal(
      totalDoughWeight,
      totalPercentage,
      flourPercentage
    ),
    water: calculateIngredientTotal(
      totalDoughWeight,
      totalPercentage,
      waterPercentage
    ),
    salt: calculateIngredientTotal(
      totalDoughWeight,
      totalPercentage,
      saltPercentage
    ),
    yeast: calculateIngredientTotal(
      totalDoughWeight,
      totalPercentage,
      yeastPercentage
    ),
  };
};

const calculateIngredientTotal = (
  totalDoughWeight,
  totalBakersPercentage,
  ingredientPercentage
) => {
  // formula is based on calculating a backwards bakers percentage
  return (totalDoughWeight / totalBakersPercentage) * ingredientPercentage;
};

export default useRecipe;
