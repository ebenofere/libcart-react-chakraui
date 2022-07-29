import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" color="white">
        Copyright 2021 © <a href="#">The Mayben Company</a> . All Rights
        Reserved.
      </Flex>
    </Box>
  );
};

export default Footer;
