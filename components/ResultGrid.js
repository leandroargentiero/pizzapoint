import { Grid, Heading, VStack } from '@chakra-ui/react';

import { roundOff } from '@/lib/helpers';
import { useRecipeContext } from '@/context/RecipeContext';
import ResultGridItem from '@/components/ResultGridItem';

const ResultGrid = () => {
  const { recipe } = useRecipeContext();
  const { flour, water, salt, yeast } = recipe?.totals;

  return (
    <VStack gap={1} w="full" alignItems="start">
      <Heading color="white" size="md">
        Your recipe
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
        <ResultGridItem name="Flour" value={roundOff(flour, 0)} />
        <ResultGridItem name="Water" value={roundOff(water, 0)} />
        <ResultGridItem name="Salt" value={roundOff(salt, 1)} />
        <ResultGridItem name="Yeast" value={roundOff(yeast, 1)} />
      </Grid>
    </VStack>
  );
};

export default ResultGrid;
