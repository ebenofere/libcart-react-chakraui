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
import { Logo } from './Logo';

function App() {
  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h="500px"
      gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
    >
      <GridItem bg="#ffffff" area={'header'} boxShadow="lg">
        <Logo />
      </GridItem>
      <GridItem bg="#f6f6f6" area={'nav'}>
        Nav
      </GridItem>
      <GridItem bg="#ffffff" area={'main'}>
        <Books items={bookList} />
      </GridItem>
      <GridItem bg="blue.300" area={'footer'}>
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
