import BookList from "./components/BookList";
import { useQuery ,useLazyQuery} from "@apollo/react-hooks";
import React,{useState,useEffect} from 'react'
import AddBook from "./components/AddBook";
import {GET_BOOKS,GET_AUTHORS,GET_BOOK_BY_ID } from "./graphql/queries"
import BookDetail from "./components/BookDetail";
function App() {
  const [bookDetail,setBookDetail] = useState(null);
  const [loadBookById, { called, loading:loadBookDetailData, data:bookDetailData }] = useLazyQuery(
    GET_BOOK_BY_ID,
  );

  useEffect(() => {
    if(!loadBookDetailData && bookDetailData ){
      const {book} = bookDetailData;
      setBookDetail(book);
    }
  }, [bookDetailData])
  
  const { loading, data ,refetch} = useQuery(GET_BOOKS);
  const authorResponse =  useQuery(GET_AUTHORS);
  const {loading:loadingResponse,data:authorData} = authorResponse;
  if (loading || loadingResponse) {
    return <div> Loading..</div>;
  }
  const{authors} = authorData;
  const {books} = data;

   const onBookClick = (id) =>{
    loadBookById( { variables: { id }});
  
   }
  return (
    <div id="main">
     <h1> My Reading List</h1>
     <BookList onBookClick={onBookClick} books={books}/>
     <AddBook setBookDetail={setBookDetail} refetch={refetch} authors={authors}/>
    {bookDetail &&<BookDetail bookDetail={bookDetail}/> } 
    </div>
  );
}

export default App;
