import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import BookItem from './BookItem';

const BookList = ({ items, onDeleteItem }) => {
  return <BookItem items={items} onDelete={onDeleteItem} />;
};

export default BookList;
