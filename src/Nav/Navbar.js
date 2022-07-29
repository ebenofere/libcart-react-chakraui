import React from 'react';
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import {
  MdCheckCircle,
  MdAddCircle,
  MdLibraryBooks,
  MdSend,
  MdLibraryAdd,
  MdDashboard,
  MdSettings,
  MdLiveHelp,
  MdExitToApp,
} from 'react-icons/md';

import { sideNavItemList_one, sideNavItemList_two } from '../store';

const Navbar = () => {
  return (
    <Box ml={8}>
      <Image
        src="https://res.cloudinary.com/ebenofere/image/upload/v1658791272/libcart-books-images/libcart-logo_y1kari.png"
        w="120px"
        mb={12}
        mt={5}
      />
      <Box color="black" mb={12}>
        <List spacing={3}>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdLibraryBooks} color="teal.500" />
              Library
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdAddCircle} color="teal.500" />
              Add Items
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdLibraryAdd} color="teal.500" />
              Add Collection
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdSend} color="teal.500" />
              Publish
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdDashboard} color="teal.500" />
              Dashboards
            </Flex>
          </ListItem>
        </List>
      </Box>
      <Box color="black" mb={12}>
        <List spacing={3}>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdSettings} color="teal.500" />
              Settings
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdLiveHelp} color="teal.500" />
              Support
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems="center">
              <ListIcon as={MdExitToApp} color="teal.500" />
              Logout
            </Flex>
          </ListItem>
        </List>
      </Box>
      <Box
        as="button"
        borderRadius="md"
        bg="teal.500"
        color="white"
        px={4}
        h={8}
      >
        Upgrade
      </Box>
    </Box>
  );
};

export default Navbar;
