import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Stack,
  Box,
} from '@chakra-ui/react';

import { useRecipeContext } from '@/context/RecipeContext';
import NumberInput from './NumberInput';
import { roundOff } from '@/lib/helpers';
import Panel from './Panel';

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
    <Panel mt={32}>
      <Stack gap={2} as="form">
        <FormControl>
          <FormLabel>Pizza Style</FormLabel>
          <Select
            icon={<ChevronDownIcon />}
            variant="outline"
            bg="whiteAlpha.50"
            borderColor="whiteAlpha.200"
            _hover={{
              bg: 'whiteAlpha.200',
            }}
            _active={{
              bg: 'whiteAlpha.300',
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(99, 179, 237, .50), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            size="md"
          >
            <option value="option1">{style}</option>
          </Select>
        </FormControl>
        <Grid templateColumns="repeat(2, 1fr)" rowGap={2} columnGap={6}>
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
            <NumberInput
              label="Leavening"
              value={leavening}
              step=".5"
              unit="h"
            />
          </GridItem>
          <GridItem>
            <NumberInput
              label="Room Temperature"
              value={roomtemperature}
              step=".5"
              unit="???"
            />
          </GridItem>
        </Grid>
      </Stack>
    </Panel>
  );
};

export default FormGrid;
