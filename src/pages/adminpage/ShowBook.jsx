import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'
import axios from 'axios'


export const ShowBook = () => {
  const [book,setBook]=useState({})
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  // console.log("id=",id);
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      setBook(res.data);
      setLoading(false)
    })
    .catch((err)=>{
      console.log("some error",err);
      setLoading(false);
    })
    // console.log("book details",book)
  },[])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Book Details</h1>
      {
        loading?(<Spinner/>):(
          <div className='flex-flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">ID</span>
                <span>{book._id}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Title</span>
                <span>{book.title}</span>
              </div>
                <div className="my-4">
                  <span className="text-xl mr-4 text-gray-500">Author</span>
                  <span>{book.author}</span>
                </div>
                <div className="my-4">
                  <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                  <span>{book.PublishYear }</span>
                </div>
                <div className="my-4">
                  <span className="text-xl mr-4 text-gray-500">Created Time</span>
                  <span>{new Date(book.createdAt).toString() }</span>
                </div>
                <div className="my-4">
                  <span className="text-xl mr-4 text-gray-500">Last Update</span>
                  <span>{new Date(book.updatedAt).toString() }</span>
                </div>
          </div>
        )
      }
    </div>
  )
}