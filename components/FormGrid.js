import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Stack,
} from '@chakra-ui/react';
import NumberInput from './NumberInput';

const FormGrid = () => {
  return (
    <Stack gap={4} as="form">
      <FormControl>
        <FormLabel>Pizza Style</FormLabel>
        <Select icon={<ChevronDownIcon />} variant="filled" size="md">
          <option value="option1">Neapolitan</option>
        </Select>
      </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <NumberInput label="Dough Balls" icon />
        </GridItem>
        <GridItem>
          <NumberInput
            label="Ball Weight"
            defaultValue="250"
            step="50"
            unit="gr"
          />
        </GridItem>
        <GridItem>
          <NumberInput label="Water" defaultValue="60" step="1" unit="%" />
        </GridItem>
        <GridItem>
          <NumberInput label="Salt" defaultValue="3" step="1" unit="%" />
        </GridItem>
        <GridItem>
          <NumberInput label="Leavening" defaultValue="8" step=".5" unit="h" />
        </GridItem>
        <GridItem>
          <NumberInput
            label="Room Temperature"
            defaultValue="20"
            step=".5"
            unit="℃"
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default FormGrid;
