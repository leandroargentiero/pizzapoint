import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      bg: '#E4DED7',
      text: '#144149',
      accent: '#FC6349',
    },
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.900',
        color: 'whiteAlpha.900',
      },
    },
  },
});

export default theme;
