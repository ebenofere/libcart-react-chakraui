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
  Center,
} from '@chakra-ui/react';
import ButtonBar from '../ButtonBar';

const BookItem = ({ items, onDelete }) => {
  console.log(items, 'items');

  if (items.length === 0) {
    return (
      <Box px={4} h="120px" w="100%">
        <Center>
          <Text mt={12}>No books yet.</Text>
        </Center>
      </Box>
    );
  }

  const deleteItemHandler = props => {
    onDelete(props.id);
  };

  return (
    <Box>
      {items.map(item => (
        <Stack w="100%" p={4} key={item.id}>
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
                <ButtonBar
                  btnTitle="Delete Item"
                  bgBtnColor="#DF6C5E"
                  whatToDo={deleteItemHandler}
                />
                <ButtonBar btnTitle="View/Edit Item" bgBtnColor="teal.500" />
              </Flex>
            </Box>
            <Box flex="4">
              <Flex direction="column">
                <Text fontWeight="600" fontSize="2xl">
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
        </Stack>
      ))}
    </Box>
  );
};

export default BookItem;
