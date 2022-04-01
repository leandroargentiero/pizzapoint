import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Heading, Text } from '@chakra-ui/react';
import Panel from './Panel';
import 'odometer/themes/odometer-theme-default.css';

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
});

const ResultGridItem = ({ name, value }) => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(value);
    }, 10);
  }, [value]);

  return (
    <Panel pb="20%">
      <Heading
        textTransform="uppercase"
        color="whiteAlpha.600"
        size="xs"
        fontWeight="medium"
      >
        {name}
      </Heading>
      <Heading color="whiteAlpha.900" fontWeight="light">
        <Text as="span" fontSize="5xl">
          <Odometer
            duration={1000}
            value={odometerValue}
            format="(.ddd),dd"
            theme="default"
          />
        </Text>
        <Text as="span" fontSize="md">
          {'gr'}
        </Text>
      </Heading>
    </Panel>
  );
};

export default ResultGridItem;
