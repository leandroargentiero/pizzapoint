import { Box } from '@chakra-ui/react';

const Panel = ({ children, ...rest }) => (
  <Box
    p={4}
    w="full"
    borderRadius={12}
    backgroundColor="rgba(255, 
  255, 255, 0.1)"
    backdropFilter="saturate(150%) blur(15px)"
    border="1px solid"
    borderColor="whiteAlpha.100"
    {...rest}
  >
    {children}
  </Box>
);

export default Panel;
