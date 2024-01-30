import React from 'react'

const FormComponent = () => {
  return (
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
      {/* <input
        type='text'
        value={eBookData.genre}
        name="genre"
        onChange={handleInput}
      className='border-2 border-gray-500 px-4 py-2 w-full'
      /> */}

      <select
        value={eBookData.genre}
        name="genre"
        onChange={handleInput}
        className='border-2 border-gray-500 px-4 py-2 w-full'>
        <option value="" disabled>Select Genere</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
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
        onChange={handleInput}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    {/* Language */}
    <div className='my-4'>
      <label htmlFor='' className='text-xl mr-4 text-gray-500'>
        Language
      </label>
      <select

        name='language'
        value={eBookData.language}
        onChange={handleInput}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      >
        <option value='' disabled>Select Language</option>
        {Languages.map((language) => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>

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
    <div className='my-4'>
      <label htmlFor='' className='text-xl mr-4 text-gray-500'>
        Cover Image
      </label>
      <input
        type='file'
        name='cover_image'
        value={eBookData.pages}
        onChange={handleInput}
        className='border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
      Save
    </button>
  </div>
  )
}

export default FormComponent