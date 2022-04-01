import dynamic from 'next/dynamic';
import { Grid, Heading, Text, VStack } from '@chakra-ui/react';

import { useRecipeContext } from '@/context/RecipeContext';
import { roundOff } from '@/lib/helpers';
import Panel from './Panel';
import { useEffect, useState } from 'react';
import 'odometer/themes/odometer-theme-default.css';

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
});

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

const ResultGridItem = ({ name, value }) => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(value);
    }, 10);
  }, [value]);

  return (
    <Panel pb="20%">
      <Heading
        textTransform="uppercase"
        color="whiteAlpha.600"
        size="xs"
        fontWeight="medium"
      >
        {name}
      </Heading>
      <Heading color="whiteAlpha.900" fontWeight="light">
        <Text as="span" fontSize="5xl">
          <Odometer
            duration={1000}
            value={odometerValue}
            format="(.ddd),dd"
            theme="default"
          />
        </Text>
        <Text as="span" fontSize="md">
          {'gr'}
        </Text>
      </Heading>
    </Panel>
  );
};

export default ResultGrid;
