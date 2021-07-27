import BookList from "./components/BookList";
import { useQuery } from "@apollo/react-hooks";
import React,{useState,useEffect} from 'react'
import AddBook from "./components/AddBook";
import {GET_BOOKS,GET_AUTHORS } from "./graphql/queries"
function App() {
  const [bookList,setBookList] = useState([]);
  const { loading, data ,refetch} = useQuery(GET_BOOKS);
  const authorResponse =  useQuery(GET_AUTHORS);
  const {loading:loadingResponse,data:authorData} = authorResponse;
  if (loading || loadingResponse) {
    return <div> Loading..</div>;
  }
  const{authors} = authorData;
  const {books} = data;


  return (
    <div id="main">
     <h1> My Reading List</h1>
     <BookList books={books}/>
     <AddBook refetch={refetch} authors={authors}/>
    </div>
  );
}

export default App;
