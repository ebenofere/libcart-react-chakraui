import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const ButtonBar = ({ btnTitle, bgBtnColor, whatToDo }) => {
  return (
    <Button
      as="button"
      borderRadius="md"
      bg={bgBtnColor}
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
