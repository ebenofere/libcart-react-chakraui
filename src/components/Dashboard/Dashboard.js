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

const Dashboard = () => {
  return (
    <Container maxW="6xl" bg="gray.100">
      <ContainerHeader pageTitle="Dashboard" tabOne="Basic Stats" />
      <Box>
        <Flex gap={2} style={{ border: '1px solid black' }}>
          <Box>
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
          {/* <Box></Box> */}
        </Flex>
      </Box>
      <Box>
        <Flex color="white" gap={12}>
          <Box flex="1" bg="white" borderRadius="lg" px={4} h="120px" w="100%">
            <Center>
              <Flex direction="column" align="center" gap={4} mt={4}>
                <Text fontWeight="600" fontSize="lg">
                  Total Unique Items
                </Text>
                <Text fontWeight="600" fontSize="3xl">
                  4
                </Text>
              </Flex>
            </Center>
          </Box>
          <Box flex="1" bg="tomato">
            <Text>Total Unique Items</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Dashboard;
