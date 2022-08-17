import React, { useState } from 'react';
import { Grid, GridItem, useToast } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { bookList, booksNoEachMonth } from './store';
import { Header } from './Header';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';
import Books from './components/Library/Books';
import AddItems from './components/AddItems/AddItems';
import Dashboard from './components/Dashboard/Dashboard';
import Whoops404 from './components/Whoops404';
import './App.css';

function App() {
  const [books, setBooks] = useState(bookList);
  const [searchField, setSearchField] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const addItemHandler = newItem => {
    console.log(newItem, 'newItem');
    setBooks(prevBooks => {
      return [newItem, ...prevBooks];
    });

    setTimeout(() => {
      navigate('/library');
    }, 1000);
  };

  const editItemHandler = item => {
    console.log(item, 'item edithandler lolu');
    const updatedBooks = [...books];
    const itemIndex = updatedBooks.findIndex(el => el.id === item.id);
    updatedBooks[itemIndex] = item;

    setBooks(updatedBooks);
  };

  // delete function
  const deleteItemHandler = itemId => {
    console.log(itemId, 'itemId to be deleted');

    // setBooks(prevBooks => {
    //   const updatedBooks = prevBooks.filter(item => item.id !== itemId);

    //   return updatedBooks;
    // });

    const updatedBooks = [...books].filter(item => item.id !== itemId);

    setBooks(updatedBooks);

    toast({
      title: 'Success!',
      description: 'This book item has been deleted.',
      position: 'top-right',
      variant: 'subtle',
      status: 'success',
      duration: 9000,
      isClosable: true,
      color: 'white',
    });
  };

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
          <Route path="/" element={<Home />} />
          <Route
            path="/library"
            element={
              <Books
                items={filteredBooks}
                handleChange={handleChange}
                books={books}
                editItemHandler={editItemHandler}
                deleteItemHandler={deleteItemHandler}
              />
            }
          />
          <Route
            path="/library/additems"
            element={<AddItems onAddBookItem={addItemHandler} />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                noOfItems={books.length}
                booksNoEachMonth={booksNoEachMonth}
              />
            }
          />
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
