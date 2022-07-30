import React from 'react';
import { Box } from '@chakra-ui/react';

const ButtonBar = ({ btnTitle }) => {
  return (
    <Box as="button" borderRadius="md" bg="teal.500" color="white" px={4} h={8}>
      {btnTitle}
    </Box>
  );
};

export default ButtonBar;
