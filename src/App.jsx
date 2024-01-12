// App.jsx
import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import { CreateBook } from './pages/adminpage/CreateBook';
import { ShowBook } from './pages/adminpage/ShowBook';
import {EditBook}  from "./pages/adminpage/EditBook"
import { DeleteBook } from './pages/adminpage/DeleteBook';
import BookHome from './pages/adminpage/BookHome';
import Navbar from './components/Navbar';
import EDashboard from './pages/ReaderDashboard/EDashboard';

const App = () => {
  return(
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/book-categories' element={<EDashboard/>}/>
    <Route path='/books' element={<BookHome/>}/>
    <Route path='/books/create' element={<CreateBook/>}/>
    <Route path='/books/details/:id' element={<ShowBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
  </Routes>
  </>)
};  

export default App;
