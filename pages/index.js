import { Container, VStack } from '@chakra-ui/react';

import ResultGrid from '@/components/ResultGrid';
import Header from '@/components/Header';
import FormGrid from '@/components/FormGrid';

const Home = () => {
  return (
    <Container as="main" py={16}>
      <Header />
      <VStack gap={8}>
        <FormGrid />
        <ResultGrid />
      </VStack>
    </Container>
  );
};

export default Home;
