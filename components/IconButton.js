import { Button } from '@chakra-ui/react';

const IconButton = ({ value, onClick, isDisabled, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      borderColor="whiteAlpha.200"
      background="whiteAlpha.50"
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
      disabled={isDisabled}
      {...rest}
    >
      {value}
    </Button>
  );
};

export default IconButton;
