import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import BookItem from './BookItem';

const BookList = ({ items }) => {
  return <BookItem items={items} />;
};

export default BookList;
