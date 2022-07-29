import React from 'react';
import { Box, Text, Link, VStack, Input, Button, Flex } from '@chakra-ui/react';
import BookList from './BookList';
import SearchBox from '../SearchBox/SearchBox';

const Books = ({ items, handleChange }) => {
  return (
    <>
      <Box mb={8}>
        <Text as="b" fontSize="xl" color="#03151E">
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
      <Text as="b" fontSize="4xl" color="#03151E">
        Results
      </Text>
      <BookList items={items} />
    </>
  );
};

export default Books;
