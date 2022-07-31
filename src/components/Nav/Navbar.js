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
  MdAddCircle,
  MdLibraryBooks,
  MdSend,
  MdLibraryAdd,
  MdDashboard,
  MdSettings,
  MdLiveHelp,
  MdExitToApp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import ButtonBar from '../ButtonBar';

const Navbar = () => {
  return (
    <Box ml={8}>
      <Link to="/">
        <Image
          src="https://res.cloudinary.com/ebenofere/image/upload/v1658791272/libcart-books-images/libcart-logo_y1kari.png"
          w="120px"
          mb={12}
          mt={5}
        />
      </Link>
      <Box color="black" mb={12}>
        <List spacing={3}>
          <ListItem>
            <Link to="/library">
              <Flex alignItems="center">
                <ListIcon as={MdLibraryBooks} color="teal.500" />
                Library
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/library/additems">
              <Flex alignItems="center">
                <ListIcon as={MdAddCircle} color="teal.500" />
                Add Items
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="">
              <Flex alignItems="center">
                <ListIcon as={MdLibraryAdd} color="teal.500" />
                Add Collection
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="">
              <Flex alignItems="center">
                <ListIcon as={MdSend} color="teal.500" />
                Publish
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard">
              <Flex alignItems="center">
                <ListIcon as={MdDashboard} color="teal.500" />
                Dashboard
              </Flex>
            </Link>
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
      <ButtonBar btnTitle="Upgrade" bgBtnColor="teal.500" />
    </Box>
  );
};

export default Navbar;
