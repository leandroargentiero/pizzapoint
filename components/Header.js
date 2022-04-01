import { Code, Heading, Text, VStack } from '@chakra-ui/react';
import Logo from './Logo';

const Header = () => (
  <VStack
    py={10}
    position="fixed"
    top="0"
    left="0"
    right="0"
    textAlign="center"
  >
    <Logo />
    <Text color="whiteAlpha.700" fontSize="sm">
      Built to help you make the perfect pizza dough
    </Text>
  </VStack>
);

export default Header;
