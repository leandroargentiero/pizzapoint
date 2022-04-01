import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Stack,
} from '@chakra-ui/react';

import { useRecipeContext } from '@/context/RecipeContext';
import NumberInput from './NumberInput';
import { roundOff } from '@/lib/helpers';

const FormGrid = () => {
  const { recipe } = useRecipeContext();
  const {
    style,
    doughballs,
    ballweight,
    water,
    salt,
    leavening,
    roomtemperature,
  } = recipe;

  return (
    <Stack gap={4} as="form">
      <FormControl>
        <FormLabel>Pizza Style</FormLabel>
        <Select icon={<ChevronDownIcon />} variant="filled" size="md">
          <option value="option1">{style}</option>
        </Select>
      </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <NumberInput label="Dough Balls" value={doughballs} icon />
        </GridItem>
        <GridItem>
          <NumberInput
            label="Ball Weight"
            value={ballweight}
            step="50"
            unit="gr"
          />
        </GridItem>
        <GridItem>
          <NumberInput label="Water" value={water} step="1" unit="%" />
        </GridItem>
        <GridItem>
          <NumberInput
            label="Salt"
            value={roundOff(salt, 1)}
            step=".1"
            unit="%"
          />
        </GridItem>
        <GridItem>
          <NumberInput label="Leavening" value={leavening} step=".5" unit="h" />
        </GridItem>
        <GridItem>
          <NumberInput
            label="Room Temperature"
            value={roomtemperature}
            step=".5"
            unit="℃"
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default FormGrid;
