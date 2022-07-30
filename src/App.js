import React, { useState } from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
  GridItem,
  Input,
  Button,
  Flex,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

import { bookList } from './store';
import { Header } from './Header';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Books from './components/Library/Books';
import AddItems from './components/AddItems/AddItems';
import Dashboard from './components/Dashboard/Dashboard';
import Whoops404 from './components/Whoops404';
import './App.css';

function App() {
  const [books, setBooks] = useState(bookList);
  const [searchField, setSearchField] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setSearchField(e.target.value);
  };

  const filteredBooks = books.filter(
    x =>
      x.itemName.toLowerCase().includes(searchField.toLowerCase()) ||
      x.itemAuthor.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Grid
      templateAreas={`"nav main" "nav main" "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'1fr 5fr'}
      // h="500px"
      gap="1"
      className="body-wrapper"
    >
      {/* <GridItem bg="white" area={'header'} boxShadow="lg">
        <Header />
      </GridItem> */}
      <GridItem bg="#f6f6f6" area={'nav'}>
        <Navbar />
      </GridItem>
      <GridItem bg="white" area={'main'} p={10}>
        <Routes>
          <Route
            path="/"
            element={
              <Books items={filteredBooks} handleChange={handleChange} />
            }
          />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </GridItem>
      <GridItem bg="teal.500" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
