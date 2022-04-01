import { useEffect, useState } from 'react';
import { QuestionIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Center,
  Input,
} from '@chakra-ui/react';

import { useRecipeContext } from '@/context/RecipeContext';
import IconButton from './IconButton';

const NumberInput = ({ label, step = 1, value, min = step, icon, unit }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleRecipeChange } = useRecipeContext();
  const ingredient = label.split(' ').join('').toLocaleLowerCase();

  useEffect(() => {
    +value === +min ? setIsDisabled(true) : setIsDisabled(false);
  }, [value, min]);

  const handleInc = () => {
    const newVal = value + +step;
    handleRecipeChange(ingredient, newVal);
  };

  const handleDec = () => {
    if (value !== min) {
      const newVal = value - +step;
      handleRecipeChange(ingredient, newVal);
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor={label}>
        {label}{' '}
        {icon ? <QuestionIcon w={3} color="whiteAlpha.500" mt="-0.5" /> : null}
      </FormLabel>
      <HStack maxW="320px" alignItems="stretch">
        <IconButton
          value="-"
          onClick={handleDec}
          isDisabled={isDisabled}
          test="test"
        />
        <Box
          w="full"
          border="1px solid"
          borderColor="whiteAlpha.200"
          background="whiteAlpha.50"
          borderRadius={4}
        >
          <Center h="100%">
            <Text>
              {value}
              {unit}
            </Text>
          </Center>
        </Box>
        <Input
          id={label}
          name={label.split(' ').join('').toLocaleLowerCase()}
          display="none"
          defaultValue={value}
        />
        <IconButton value="+" onClick={handleInc} />
      </HStack>
    </FormControl>
  );
};

export default NumberInput;
