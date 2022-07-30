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
  Flex,
  Divider,
} from '@chakra-ui/react';
import ButtonBar from '../ButtonBar';

const BookItem = ({ items }) => {
  console.log(items, 'items');

  return (
    <Box>
      {items.map(item => (
        <Box w="100%" p={4} key={item.id}>
          <Flex>
            <Box flex="1" mx={4} pr={4}>
              <Flex direction="column" gap={4}>
                <Box>
                  <Image
                    src={item.itemImage}
                    alt={item.itemName}
                    boxSize="300px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                </Box>
                <ButtonBar btnTitle="Add Item" />
              </Flex>
            </Box>
            <Box flex="4">
              <Flex direction="column">
                <Text as="b" fontSize="2xl">
                  {item.itemName}
                </Text>
                <Text fontSize="md" color="#999999" mb={4}>
                  {item.itemAuthor}
                </Text>
                <Box display="flex">
                  <Text as="b" mr={4}>
                    {item.itemPublishedYear}
                  </Text>
                  <Text mr={4}>
                    <strong>Pages:</strong> {item.itemTotalPages}
                  </Text>
                  <Text>({item.itemPublisher})</Text>
                </Box>
                <Text mb={4}>
                  <strong>ISBN13: </strong> {item.ISBN}
                </Text>
                <Box>{item.itemDescription}</Box>
              </Flex>
            </Box>
          </Flex>
          <Divider orientation="horizontal" color="black" mt={12} />
        </Box>
      ))}
    </Box>
  );
};

export default BookItem;
