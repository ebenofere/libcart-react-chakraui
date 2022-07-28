import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Stack,
  Image,
} from '@chakra-ui/react';

const BookItem = ({ items }) => {
  console.log(items, 'items');

  return (
    <Stack>
      {items.map(item => (
        <Box w="100%" p={4} style={{ border: '1px solid black' }}>
          <Box display="flex">
            <Box>
              <Image
                src={item.itemImage}
                alt={item.itemName}
                boxSize="300px"
                objectFit="cover"
                borderRadius="md"
              />
              <Box
                as="button"
                borderRadius="md"
                bg="teal.500"
                color="white"
                px={4}
                h={8}
              >
                Add Item
              </Box>
            </Box>
            <Box>
              <Box color="#03151E">{item.itemName}</Box>
              <Box color="#03151E">{item.itemAuthor}</Box>
              <Box color="#03151E" display="flex">
                <Box>{item.itemPublishedYear}</Box>
                <Box>Pages: {item.itemTotalPages}</Box>
                <Box>{item.itemPublisher}</Box>
              </Box>
              <Box color="#03151E">ISBN: {item.ISBN}</Box>
              <Box color="#03151E">{item.itemDescription}</Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default BookItem;

// <Text fontSize="md" key={item.id}>
// Book Name: {item.itemName}
// </Text>
