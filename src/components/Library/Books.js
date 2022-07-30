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
  Heading,
  Container,
} from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';

import BookList from './BookList';
import SearchBox from '../SearchBox/SearchBox';
import ContainerHeader from '../ContainerHeader';
import ButtonBar from '../ButtonBar';

const Books = ({ items, handleChange }) => {
  return (
    <Container maxW="6xl" bg="white">
      <ContainerHeader pageTitle="Library" tabOne="" />
      <Box mb={8}>
        <Text fontWeight="600" fontSize="xl">
          Search for Books
        </Text>
        <Box mt={4}>
          <Flex direction="column">
            <SearchBox mb={2} handleChange={handleChange} />
            <Text as="em" fontSize="xs" color="#999999" mt={2}>
              Search by title or author
            </Text>
            <Box mt={4}>
              <ButtonBar btnTitle="Search" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Heading fontWeight="600" fontSize="3xl" mb={2} color="#03151E">
        Results
      </Heading>
      <BookList items={items} />
    </Container>
  );
};

export default Books;
