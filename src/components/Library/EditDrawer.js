import React, { useState, useEffect } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
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
  Container,
  useToast,
  Divider,
} from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';

import ButtonBar from '../ButtonBar';

const EditDrawer = ({ isOpen, onClose, item, editItemHandler }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredYear, setEnteredYear] = useState(0);
  const [enteredPages, setEnteredPages] = useState(0);
  const [enteredPublisher, setEnteredPublisher] = useState('');
  const [enteredISBN, setEnteredISBN] = useState(0);
  const [enteredDescription, setEnteredDescription] = useState('');

  console.log(item, 'itemeditdrawer C');

  const toast = useToast();

  const titleChangeHandler = event => {
    console.log(event.target.value, 'titlechangehandler');
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = event => {
    console.log(event.target.value, 'authorChangeHandler');
    setEnteredAuthor(event.target.value);
  };

  const yearChangeHandler = event => {
    console.log(event.target.value, 'yearChangeHandler');
    setEnteredYear(event.target.value);
  };

  const pagesChangeHandler = event => {
    console.log(event.target.value, 'pagesChangeHandler');
    setEnteredPages(event.target.value);
  };

  const publisherChangeHandler = event => {
    console.log(event.target.value, 'publisherChangeHandler');
    setEnteredPublisher(event.target.value);
  };

  const ISBNChangeHandler = event => {
    console.log(event.target.value, 'ISBNChangeHandler');
    setEnteredISBN(event.target.value);
  };

  const descriptionChangeHandler = event => {
    console.log(event.target.value, 'descriptionChangeHandler');
    setEnteredDescription(event.target.value);
  };

  useEffect(() => {
    if (item.id) {
      setEnteredTitle(item.itemName);
      setEnteredAuthor(item.itemAuthor);
      setEnteredYear(item.itemPublishedYear);
      setEnteredPages(item.itemTotalPages);
      setEnteredPublisher(item.itemPublisher);
      setEnteredISBN(item.ISBN);
      setEnteredDescription(item.itemDescription);
    }
  }, [item]);

  const submitHandler = event => {
    event.preventDefault();

    if (
      enteredTitle.trim().length == '' ||
      enteredAuthor.trim().length == '' ||
      enteredYear.trim().length == '' ||
      enteredPages.trim().length == '' ||
      enteredPublisher.trim().length == '' ||
      enteredISBN.trim().length == '' ||
      enteredDescription.trim().length == ''
    ) {
      toast({
        title: 'Incomplete fields!',
        description: 'Please complete the fields.',
        position: 'top-right',
        variant: 'subtle',
        status: 'warning',
        color: 'white',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Edit Book Item</DrawerHeader>
          <Divider orientation="horizontal" color="black" mb={8} />
          <DrawerBody>
            <Box mb={8}>
              <Flex>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Author</FormLabel>
                      <Input
                        value={enteredAuthor}
                        onChange={authorChangeHandler}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Year Published</FormLabel>
                      <Input value={enteredYear} onChange={yearChangeHandler} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>No. of Pages</FormLabel>
                      <Input
                        value={enteredPages}
                        onChange={pagesChangeHandler}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Publisher</FormLabel>
                      <Input
                        value={enteredPublisher}
                        onChange={publisherChangeHandler}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>ISBN No.</FormLabel>
                      <Input value={enteredISBN} onChange={ISBNChangeHandler} />
                    </FormControl>
                  </GridItem>
                </Grid>
              </Flex>
              <Box>
                <Flex direction="column" gap={8} mb={8}>
                  <Textarea
                    mt={8}
                    resize="vertical"
                    placeholder="Write description here..."
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                  />
                  <ButtonBar
                    btnTitle="Update Book Item"
                    bgBtnColor="teal.500"
                    whatToDo={() => {
                      editItemHandler({
                        id: item.id,
                        ISBN: enteredISBN,
                        itemName: enteredTitle,
                        itemAuthor: enteredAuthor,
                        itemTotalPages: enteredPages,
                        itemPublishedYear: enteredYear,
                        itemPublisher: enteredPublisher,
                        itemDateAdded: item.itemDateAdded,
                        itemImage: item.itemImage,
                        itemDescription: enteredDescription,
                      });
                      onClose();
                    }}
                  />
                </Flex>
                <Flex direction="column">
                  <Image
                    src="gibbresh.png"
                    fallbackSrc="https://via.placeholder.com/150"
                    // boxSize="300px"
                    width="100%"
                    objectFit="cover"
                    mb={4}
                  />
                  <Button
                    leftIcon={<MdCloudUpload />}
                    bg="teal.500"
                    color="white"
                    width="100%"
                    as="button"
                  >
                    Upload
                  </Button>
                </Flex>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditDrawer;
