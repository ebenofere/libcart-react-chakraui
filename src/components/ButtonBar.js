import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const ButtonBar = ({ btnTitle, whatToDo }) => {
  return (
    <Button
      as="button"
      borderRadius="md"
      bg="teal.500"
      color="white"
      px={4}
      h={8}
      onClick={whatToDo}
    >
      {btnTitle}
    </Button>
  );
};

export default ButtonBar;
