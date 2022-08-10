import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const EditBooks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button>Open</Button>
    </>
  );
};

export default EditBooks;
