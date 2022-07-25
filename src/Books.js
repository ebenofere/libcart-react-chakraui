import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import BookList from './BookList';

const Books = ({ items }) => {
  return <BookList items={items} />;
};

export default Books;
