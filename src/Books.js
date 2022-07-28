import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import BookList from './BookList';

const Books = ({ items }) => {
  return (
    <>
      <Text as="b" fontSize="4xl" color="#03151E">
        Results
      </Text>
      <BookList items={items} />
    </>
  );
};

export default Books;
