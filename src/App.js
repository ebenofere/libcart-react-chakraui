import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { bookList } from './store';
import Books from './Books';
import { Header } from './Header';
import Navbar from './Nav/Navbar';
import './App.css';

function App() {
  return (
    <Grid
      templateAreas={`"nav header" "nav main" "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr 5fr'}
      h="500px"
      gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
      className="body-wrapper"
    >
      <GridItem bg="white" area={'header'} boxShadow="lg">
        <Header />
      </GridItem>
      <GridItem bg="#f6f6f6" area={'nav'}>
        <Navbar />
      </GridItem>
      <GridItem bg="white" area={'main'} p={10}>
        <Books items={bookList} />
      </GridItem>
      <GridItem bg="teal.500" area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;

// <Box textAlign="center" fontSize="xl">
//       <Grid minH="100vh" p={3}>
//         <VStack spacing={8}>
//           <Text>Welcome to Canada</Text>
//           <Books items={bookList} />
//         </VStack>
//       </Grid>
//     </Box>
