import { Container, Divider } from '@chakra-ui/react';

import ResultGrid from '@/components/ResultGrid';
import Header from '@/components/Header';
import FormGrid from '@/components/FormGrid';

const Home = () => {
  return (
    <Container as="main" py={16}>
      <Header />
      <FormGrid />
      <Divider borderColor="whiteAlpha.300" my={10} />
      <ResultGrid />
    </Container>
  );
};

export default Home;
