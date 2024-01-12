import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useSnackbar } from 'notistack';

export const CreateBook = () => {

  const [eBookData, setEbookData] = useState({
    title: '',
    description: '',
    author: '',
    publicationYear: '',
    rating: '',
    ISBNs: '',
    genre: '',
    publisher: '',
    language: '',
    pages: '',
  })

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleInput = (e) => {
    const { name, value } = e.target;
    setEbookData({...eBookData,[name]:value})
  }

  console.log(eBookData.title)
  const handleSaveBook = () => {
    setLoading(true);
    axios
      .post(`http://localhost:5555/ebooks`, eBookData)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar('Book Record Created successfully', { variant: 'success' });
        navigate('/books');
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('Something went wrong: ' + err, { variant: 'error' });
        console.error('Some error', err);
      });
  };


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Title
          </label>
          <input
            type='text'
            name='title'
            value={eBookData.title}
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Description
          </label>
          <input
            type='text'
            name='description'
            value={eBookData.description}
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Author
          </label>
          <input
            type='text'
            name='author'
            value={eBookData.author}
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Publish Year
          </label>
          <input
            type='number'
            name='publicationYear'
            value={eBookData.publicationYear}
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
      
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Rating
          </label>
          <input
            type='number'
            name='rating'
            value={eBookData.rating}
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
      
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            ISBNs
          </label>
          <input
            type='text'
            value={eBookData.ISBNs}
            name='ISBNs'
            onChange={handleInput}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        {/* Genre */}
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Genre
          </label>
          <input
            type='text'
            value={eBookData.genre}
            name="genre"
            onChange={handleInput}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        {/* Publisher */}
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Publisher
          </label>
          <input
            type='text'
            name='publisher'
            value={eBookData.publisher}
            onChange={handleInput }
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        {/* Language */}
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Language
          </label>
          <input
            type='text'
            name='language'
            value={eBookData.language}
            onChange={handleInput}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        {/* Pages */}
        <div className='my-4'>
          <label htmlFor='' className='text-xl mr-4 text-gray-500'>
            Pages
          </label>
          <input
            type='number'
            name='pages'
            value={eBookData.pages}
            onChange={handleInput}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
