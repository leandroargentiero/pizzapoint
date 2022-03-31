import { Center, Grid, GridItem, Text, VStack } from '@chakra-ui/react';

const ResultGridItem = ({ name, value }) => (
  <GridItem bg="gray.100" borderRadius={8} py={5}>
    <Center h="100%">
      <VStack>
        <Text>{name}</Text>
        <Text>{value}</Text>
      </VStack>
    </Center>
  </GridItem>
);

const ResultGrid = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <ResultGridItem name="Flour" value="-" />
      <ResultGridItem name="Water" value="-" />
      <ResultGridItem name="Salt" value="-" />
      <ResultGridItem name="Yeast" value="-" />
    </Grid>
  );
};

export default ResultGrid;
