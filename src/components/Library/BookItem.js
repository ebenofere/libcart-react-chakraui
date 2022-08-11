import React, { useState } from 'react';
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import DeleteButton from './DeleteButton';
import ButtonBar from '../ButtonBar';
import EditDrawer from './EditDrawer';

const BookItem = ({ items, books, deleteItemHandler }) => {
  console.log(items, 'items');
  const [size, setSize] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = md => {
    setSize('md');
    onOpen();
  };

  const editItemHandler = () => {
    console.log('amin!');
  };

  if (items.length === 0) {
    return (
      <Box px={4} h="120px" w="100%">
        <Center>
          <Text mt={12}>No books yet.</Text>
        </Center>
      </Box>
    );
  }

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
                <DeleteButton
                  btnTitle="Delete Item"
                  bgBtnColor="#DF6C5E"
                  deleteItem={() => deleteItemHandler(item.id)}
                />
                <ButtonBar
                  btnTitle="View/Edit Item"
                  bgBtnColor="teal.500"
                  whatToDo={() => handleClick('md')}
                />
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

          <EditDrawer isOpen={isOpen} onClose={onClose} />
          <Divider orientation="horizontal" color="black" mt={12} />
        </Stack>
      ))}
    </Box>
  );
};

export default BookItem;
