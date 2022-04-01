import { useRecipeContext } from '@/context/RecipeContext';
import { roundOff } from '@/lib/helpers';
import {
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const ResultGridItem = ({ name, value, unit }) => (
  <GridItem bg="gray.100" borderRadius={8} py={5}>
    <Center h="100%">
      <VStack>
        <Text>{name}</Text>
        <Text>
          {value}
          {'gr'}
        </Text>
      </VStack>
    </Center>
  </GridItem>
);

const ResultGrid = () => {
  const { recipe } = useRecipeContext();
  const { flour, water, salt, yeast } = recipe?.totals;

  return (
    <VStack gap={1} w="full" alignItems="start">
      <Heading size="md">Your recipe</Heading>
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
