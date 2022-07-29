import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import BookItem from './BookItem';

const BookList = ({ items }) => {
  return <BookItem items={items} />;
};

export default BookList;
