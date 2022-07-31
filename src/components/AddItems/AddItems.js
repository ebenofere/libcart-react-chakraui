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

import ContainerHeader from '../ContainerHeader';
import ButtonBar from '../ButtonBar';
import NewItem from './NewItem';

const AddItems = ({ onAddBookItem }) => {
  const submitBookItemHandler = enteredBookData => {
    console.log(enteredBookData, 'enteredBookData');
    const newItemData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };

    onAddBookItem(newItemData);
  };

  return (
    <Container maxW="6xl" bg="white">
      <ContainerHeader pageTitle="Add Items" tabOne="Search" />
      <NewItem onSubmitBookItem={submitBookItemHandler} />
    </Container>
  );
};

export default AddItems;
