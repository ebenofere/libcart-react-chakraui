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

const PaperBoard = ({ noOfItems }) => {
  return (
    <Box flex="1" bg="white" borderRadius="lg" px={4} h="120px" w="100%">
      <Center>
        <Flex direction="column" align="center" gap={4} mt={4}>
          <Text fontWeight="600" fontSize="lg">
            Total Unique Items
          </Text>
          <Text fontWeight="600" fontSize="3xl">
            {noOfItems}
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default PaperBoard;
