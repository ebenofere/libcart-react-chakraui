import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Whoops404 = () => {
  let location = useLocation();
  console.log(location, 'location');

  return (
    <Box>
      <Text>Resource not found at {location.pathname}</Text>
    </Box>
  );
};

export default Whoops404;
