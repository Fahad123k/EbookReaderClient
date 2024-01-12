import { createContext ,useState,useEffect} from "react";
import axios from "axios";
import BookData from "./Book"
const BookContext= createContext();
const BookProvider=({children})=>{
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [noMoreData, setNoMoreData] = useState(false);
    const [totalPage, setToatlPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    // console.log("currentPage=",currentPage);


    const handleSearch = async() => {
  
      if(searchTerm!=null){
      setLoading(true)
      axios.get(`http://localhost:5555/ebooks/?search=${searchTerm}`)
        .then((res) => {
          if(res.status===404){
            setNoMoreData(true)
          }
          else{
  
            setBooks(res.data.eBooks);
            setToatlPage(res.data.totalPage)
            // console.log("ghjghghhfh",res.data)
          }
          setLoading(false)
        })
        .catch((err) => {
          console.log("some error", err.message);
          setLoading(false);
        })
      }
      else{
        fetchBooks()
      }
      
    };

    const fetchBooks=()=>{

      setLoading(true)
      axios.get(`http://localhost:5555/ebooks?page=${currentPage}`)
        .then((res) => {
          if(res.status===404){
            setNoMoreData(true)
          }
          else{

            setBooks(res.data.eBooks);
            setToatlPage(res.data.totalPage)
            console.log("ghjghghhfh",res.data)
          }
          setLoading(false)
        })
        .catch((err) => {
          console.log("some error", err.message);
          setLoading(false);
        })
      // console.log(books)
    }

    useEffect(() => {
      console.log("runnig")
      fetchBooks();
       
      },
       [currentPage]
       )


    const data={
      books,
      setBooks,
      loading,
      setLoading,
      currentPage,
      setCurrentPage,
      noMoreData,
      setNoMoreData,
      totalPage,
      searchTerm,
      setSearchTerm,
      handleSearch
    
    };
    return (
        <BookContext.Provider
        value={data}
        >{children}</BookContext.Provider>
    )
}


export {BookContext,BookProvider};