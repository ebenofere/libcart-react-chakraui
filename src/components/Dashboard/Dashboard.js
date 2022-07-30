import React from 'react';
import {
  Text,
  Box,
  Divider,
  Container,
  Select,
  Flex,
  Center,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

import ContainerHeader from '../ContainerHeader';
import PaperBoard from './PaperBoard';
import SimpleChart from './SimpleChart';
import TinyBarChart from './TinyBarChart';

const Dashboard = ({ noOfItems, booksNoEachMonth }) => {
  return (
    <Container maxW="6xl" pb={12} bg="gray.100">
      <ContainerHeader pageTitle="Dashboard" tabOne="Basic Stats" />
      <Box>
        <Flex gap={12} mb={8}>
          <Box flex="1" w="50%">
            <Select
              icon={<MdArrowDropDown />}
              placeholder="All Collections"
              mb={2}
            >
              <option value="2">My Books</option>
            </Select>
            <Text as="em" fontSize="xs" color="#999999" mt={2}>
              Choose the collection you want stats for.
            </Text>
          </Box>
          <Box flex="1" w="50%"></Box>
        </Flex>
      </Box>
      <Box>
        <Flex gap={12} mb={8}>
          <PaperBoard noOfItems={noOfItems} />
          <PaperBoard noOfItems={noOfItems} />
        </Flex>
      </Box>
      <Box>
        <Flex gap={12}>
          <SimpleChart booksNoEachMonth={booksNoEachMonth} />
          <TinyBarChart booksNoEachMonth={booksNoEachMonth} />
        </Flex>
      </Box>
    </Container>
  );
};

export default Dashboard;
