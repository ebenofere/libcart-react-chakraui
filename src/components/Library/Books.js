import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Input,
  Button,
  Flex,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import BookList from './BookList';
import SearchBox from '../SearchBox/SearchBox';
import { MdAccountCircle } from 'react-icons/md';

const Books = ({ items, handleChange }) => {
  return (
    <>
      <Box mb={8}>
        <Flex align="center">
          <Box>
            <Text fontSize="4xl">Library</Text>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center">
              <Text mr={4}>Welcome, Eben</Text>
              <Icon as={MdAccountCircle} w={12} h={12} color="teal.500" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mb={8}>
        <Text as="b" fontSize="xl">
          Search for Books
        </Text>
        <Box mt={4}>
          <Flex direction="column">
            <SearchBox mb={2} handleChange={handleChange} />
            <Text as="em" fontSize="xs" color="#999999" mt={2}>
              Search by title or author
            </Text>
            <Button mt={4} width="10%" color="white" bg="teal.500">
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
      <Text as="b" fontSize="3xl" color="#03151E">
        Results
      </Text>
      <BookList items={items} />
    </>
  );
};

export default Books;
