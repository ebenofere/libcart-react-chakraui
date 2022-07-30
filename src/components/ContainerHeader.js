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
  Avatar,
  Badge,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { MdAccountCircle } from 'react-icons/md';

const ContainerHeader = ({ pageTitle, tabOne }) => {
  return (
    <Box mb={8}>
      <Flex align="center" mb={8}>
        <Box>
          <Heading fontWeight="700" fontSize="4xl">
            {pageTitle}
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Flex align="center">
            <Text mr={4}>Welcome, Eben</Text>
            <Icon as={MdAccountCircle} w={12} h={12} color="teal.500" />
          </Flex>
        </Box>
      </Flex>
      <Box>
        {/* <Text fontWeight="600" fontSize="2xl">
          {tabOne}
        </Text> */}
        <Divider orientation="horizontal" color="black" mt={2} />
      </Box>

      {/* <Flex align="center" justifyContent="space-between">
        <Box>
          <Text fontSize="4xl">{pageTitle}</Text>
        </Box>
        <Flex>
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="3">
            <Text fontWeight="bold">
              Eben Ofere
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            </Text>
            <Text fontSize="sm">Software Developer</Text>
          </Box>
        </Flex>
      </Flex> */}
    </Box>
  );
};

export default ContainerHeader;
