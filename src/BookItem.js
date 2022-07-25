import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Stack } from '@chakra-ui/react';

const BookItem = ({ items }) => {
  console.log(items, 'items');

  return (
    <Stack>
      {items.map(item => {
        <Text key={item.id}>Book Name: {item.itemName}</Text>;
        <Text key={item.id}>Author: {item.itemAuthor}</Text>;
        <Text key={item.id}>Year Published: {item.itemPublishedYear}</Text>;
      })}
    </Stack>
  );
};

export default BookItem;
