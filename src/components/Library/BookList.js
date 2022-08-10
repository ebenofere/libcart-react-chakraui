import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import BookItem from './BookItem';

const BookList = ({ items, books, deleteItemHandler }) => {
  return (
    <BookItem
      items={items}
      books={books}
      deleteItemHandler={deleteItemHandler}
    />
  );
};

export default BookList;
