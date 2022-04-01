import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box py={10} position="fixed" top="0" left="0" right="0" color="white">
    <Heading textAlign="center">PizzaPoint</Heading>
    <Text textAlign="center">Built to make the perfect pizza dough</Text>
  </Box>
);

export default Header;
