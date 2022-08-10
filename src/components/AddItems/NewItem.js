import React, { useState } from 'react';
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
  Container,
} from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';

import ButtonBar from '../ButtonBar';

const NewItem = ({ onSubmitBookItem }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredYear, setEnteredYear] = useState('');
  const [enteredPages, setEnteredPages] = useState('');
  const [enteredPublisher, setEnteredPublisher] = useState('');
  const [enteredISBN, setEnteredISBN] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

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
      alert('Complete these fields');
      return;
    }

    const addedBookData = {
      itemName: enteredTitle,
      itemAuthor: enteredAuthor,
      itemPublishedYear: enteredYear,
      pageitemTotalPages: enteredPages,
      itemPublisher: enteredPublisher,
      ISBN: enteredISBN,
      itemDescription: enteredDescription,
    };

    console.log(addedBookData, 'added bookdata');

    onSubmitBookItem(addedBookData);
  };

  return (
    <Box mb={8}>
      <Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input onChange={titleChangeHandler} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input onChange={authorChangeHandler} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Year Published</FormLabel>
              <Input onChange={yearChangeHandler} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>No. of Pages</FormLabel>
              <Input onChange={pagesChangeHandler} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input onChange={publisherChangeHandler} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>ISBN No.</FormLabel>
              <Input onChange={ISBNChangeHandler} />
            </FormControl>
          </GridItem>
          <Flex direction="column" gap={8}>
            <Textarea
              mt={8}
              placeholder="Write description here..."
              onChange={descriptionChangeHandler}
            />
            <ButtonBar
              btnTitle="Add Book"
              bgBtnColor="teal.500"
              whatToDo={submitHandler}
            />
          </Flex>
        </Grid>
        <Spacer />
        <Box>
          <Flex direction="column" alignItems="left">
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150"
              boxSize="300px"
              objectFit="cover"
              mb={4}
            />
            <Button
              leftIcon={<MdCloudUpload />}
              bg="teal.500"
              color="white"
              width="50%"
              as="button"
            >
              Upload
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NewItem;
