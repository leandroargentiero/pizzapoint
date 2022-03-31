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
import { useEffect } from 'react';
import { useState } from 'react';

const NumberInput = ({
  label = 'label',
  step = 1,
  defaultValue = 3,
  min = step,
  icon,
  unit,
}) => {
  const [count, setCount] = useState(defaultValue);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    +count === +min ? setIsDisabled(true) : setIsDisabled(false);
  }, [count, min]);

  const handleInc = () => {
    setCount(+count + +step);
  };

  const handleDec = () => {
    if (count !== min) {
      setCount(+count - +step);
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
              {count}
              {unit}
            </Text>
          </Center>
        </Box>
        <Input
          id={label}
          name={label.split(' ').join('').toLocaleLowerCase()}
          display="none"
          defaultValue={count}
        />
        <Button onClick={handleInc}>+</Button>
      </HStack>
    </FormControl>
  );
};

export default NumberInput;
