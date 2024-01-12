import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export const EditBook = () => {
  const [title,setTilte]=useState('')
  const [author,setAuthor]=useState('')
  const [publishYear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  const {enqueueSnackbar}=useSnackbar();

  const navigate=useNavigate();
// console.log("loading...")
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      setTilte(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false);

    })
    .catch((err)=>{
      console.log("some error occured",err)
      setLoading(false);
      alert("An error happend");
    })
  },[])
  const HandleEditBook=()=>{
    const data={
      title,author,publishYear
    }
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`,data)
    .then((res)=>{
      setLoading(false);
      navigate('/books')
      enqueueSnackbar("Book with id:"+id+" Successfully Updated",{variant:'success'})

    })
    .catch((err)=>{
      setLoading(false)
      console.log("some error",err);
      enqueueSnackbar("Book can not updated"+err,{variant:'error'})

    })
    
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my4'>Edit Book</h1>
      {loading?<Spinner/>:""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my4">
        <label htmlFor="" className="text-xl mr-4 text-gray-500">Title</label>
        <input
        type='text'
        value={title}
        onChange={(e)=>setTilte(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
        </div>
        <div className="my4">
        <label htmlFor="" className="text-xl mr-4 text-gray-500">Author</label>
        <input
        type='text'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
        </div>
        <div className="my4">
        <label htmlFor="" className="text-xl mr-4 text-gray-500">Publsh Year</label>
        <input
        type='number  '
        value={publishYear}
        onChange={(e)=>setPublishYear(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full'
        />
        </div>
        <button
        className='p-2 bg-sky-300 m-8'
        onClick={HandleEditBook}
        >Save</button>
      
      </div>
    </div>
  )
}
