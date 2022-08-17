import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Input,
  Button,
  Stack,
  Flex,
  Spacer,
  Icon,
  Heading,
  Container,
} from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';

import BookList from './BookList';
import SearchBox from '../SearchBox/SearchBox';
import ContainerHeader from '../ContainerHeader';
import ButtonBar from '../ButtonBar';

const Books = ({
  items,
  books,
  editItemHandler,
  deleteItemHandler,
  handleChange,
}) => {
  return (
    <Container maxW="6xl" bg="white">
      <ContainerHeader pageTitle="Library" tabOne="" />
      <Box mb={8}>
        <Text fontWeight="600" fontSize="xl">
          Search for Books
        </Text>
        <Stack mt={4}>
          <Flex direction="column">
            <SearchBox mb={2} handleChange={handleChange} />
            <Text as="em" fontSize="xs" color="#999999" mt={2}>
              Search by title or author
            </Text>
            <Box mt={4}>
              <ButtonBar btnTitle="Search" bgBtnColor="teal.500" />
            </Box>
          </Flex>
        </Stack>
      </Box>
      <Heading fontWeight="600" fontSize="3xl" mb={2} color="#03151E">
        Results
      </Heading>
      <BookList
        items={items}
        books={books}
        editItemHandler={editItemHandler}
        deleteItemHandler={deleteItemHandler}
      />
    </Container>
  );
};

export default Books;
