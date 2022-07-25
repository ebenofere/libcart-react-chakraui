import React from 'react';
import { Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';
import { bookList } from './store';
import Books from './Books';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>Welcome to Canada</Text>
          <Books items={bookList} />
        </VStack>
      </Grid>
    </Box>
  );
}

export default App;
