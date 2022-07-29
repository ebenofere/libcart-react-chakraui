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
import { MdAccountCircle } from 'react-icons/md';

const ContainerHeader = ({ pageTitle }) => {
  return (
    <Box mb={8}>
      <Flex align="center">
        <Box>
          <Text fontSize="4xl">{pageTitle}</Text>
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
  );
};

export default ContainerHeader;
