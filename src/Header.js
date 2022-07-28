import React from 'react';
// import logo from './logo.svg';
import {
  Image,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { MdEdit, MdViewList, MdBookmark, MdDelete } from 'react-icons/md';
import { CloseIcon } from '@chakra-ui/icons';

export const Header = props => {
  return (
    <Flex>
      <List p={3} ml={10}>
        <Flex gap={10}>
          <ListItem color="black">
            <Flex minWidth="max-content" alignItems="center">
              <ListIcon as={MdEdit} />
              Edit
            </Flex>
          </ListItem>
          <ListItem color="black">
            <Flex minWidth="max-content" alignItems="center">
              <ListIcon as={MdViewList} />
              Details
            </Flex>
          </ListItem>
          <ListItem color="black">
            <Flex minWidth="max-content" alignItems="center">
              <ListIcon as={MdBookmark} />
              Flag
            </Flex>
          </ListItem>
          <ListItem color="red.500">
            <Flex minWidth="max-content" alignItems="center">
              <ListIcon as={MdDelete} color="red.500" />
              Delete
            </Flex>
          </ListItem>
        </Flex>
      </List>
      <Spacer />
      <Box p={3} mr={2}>
        <CloseIcon w={4} h={4} color="black" />
      </Box>
    </Flex>
  );
};
