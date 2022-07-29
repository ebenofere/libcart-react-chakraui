import React from 'react';
import { Box, Text, Link, VStack, Input } from '@chakra-ui/react';

const SearchBox = ({ handleChange }) => {
  return (
    <Box>
      <Input
        htmlSize={4}
        width="60%"
        size="lg"
        variant="filled"
        placeholder="Search"
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBox;
