import React,{useState} from 'react'
import Spinner from '../../components/Spinner'
import BackButton from '../../components/BackButton'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'notistack';


export const DeleteBook = () => {
  const[loading,setLoading]=useState(false);
  const{id}=useParams();
  const {enqueueSnackbar}=useSnackbar();
  const navigate=useNavigate();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/ebooks/${id}`)
    .then((res)=>{
      setLoading(false);
      console.log(res)
      enqueueSnackbar("Book Successfully deleted",{variant:'success'})
      navigate('/books')
    })
    .catch((err)=>{
      console.log("some error occured",err)
      setLoading(false);
      enqueueSnackbar("Book can not deleted"+err,{variant:'error'})
      // alert("An error happend");
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading?<Spinner/>:""}
      <div className="flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-2xl'>Are You sure want to delete this Book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteBook}>
      Yes ,Delete it
        </button>

      </div>
    </div>
  )
}
