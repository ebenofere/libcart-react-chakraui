import React from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Grid,
  GridItem,
  Image,
  Flex,
  Spacer,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';

import ContainerHeader from '../ContainerHeader';

const AddItems = () => {
  return (
    <>
      <ContainerHeader pageTitle="Add Items" />
      <Box>
        <Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Author</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Year Published</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>No. of Pages</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Publisher</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>ISBN No.</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            <Textarea mt={8} placeholder="Write description here..." />
          </Grid>
          <Spacer />
          <Box>
            <Flex direction="column">
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/150"
                boxSize="300px"
                objectFit="cover"
                mb={4}
              />
              <Button
                leftIcon={<MdCloudUpload />}
                colorScheme="teal"
                variant="solid"
                width="50%"
                // justifyContent="right"
              >
                Upload
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AddItems;
