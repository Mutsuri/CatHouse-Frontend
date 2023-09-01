import React from 'react';
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, // Import Button component
  Input, // Import Input component
  Text
} from '@chakra-ui/react';
// Import the missing useDisclosure hook
import { useDisclosure } from '@chakra-ui/react';

const allproduct = () => { // Change function name to start with an uppercase letter
  return (
    <Box w='1260px' h='1700px' position="relative" right="-320px" bottom="-10px" fontFamily={'Kanit, sans-serif'}>

    </Box>
  );
};

export default allproduct;
