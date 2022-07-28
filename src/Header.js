import React from 'react';
// import logo from './logo.svg';
import {
  Image,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Flex,
} from '@chakra-ui/react';
import { MdEdit, MdViewList, MdBookmark, MdDelete } from 'react-icons/md';

export const Header = props => {
  return (
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
  );
};
