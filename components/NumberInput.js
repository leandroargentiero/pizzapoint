import { useEffect, useState } from 'react';
import { QuestionIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Center,
  Input,
} from '@chakra-ui/react';
import { useRecipeContext } from '@/context/RecipeContext';

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
        {icon ? <QuestionIcon w={3} color="gray.500" mt="-0.5" /> : null}
      </FormLabel>
      <HStack maxW="320px" alignItems="stretch">
        <Button onClick={handleDec} disabled={isDisabled}>
          -
        </Button>
        <Box w="full" bg="gray.100" borderRadius={4}>
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
        <Button onClick={handleInc}>+</Button>
      </HStack>
    </FormControl>
  );
};

export default NumberInput;
