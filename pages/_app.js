import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';

import { RecipeProvider } from '@/context/RecipeContext';

function MyApp({ Component, pageProps }) {
  return (
    <RecipeProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecipeProvider>
  );
}

export default MyApp;
