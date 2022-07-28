import React from 'react';
import { Box, List, ListIcon, ListItem, Image } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

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
          {sideNavItemList_one.map(x => (
            <ListItem key={x.id}>
              <ListIcon as={MdCheckCircle} color="teal.500" />
              {x.navItemList}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box color="black" mb={12}>
        <List spacing={3}>
          {sideNavItemList_two.map(x => (
            <ListItem key={x.id}>
              <ListIcon as={MdCheckCircle} color="teal.500" />
              {x.navItemList}
            </ListItem>
          ))}
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
