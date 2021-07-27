import React from 'react'

const BookList = ({books,onBookClick}) => {
    return (
        <div>
           <ul id="book-list">
               {books.map(book=> {
                   return <li onClick={()=> onBookClick(book.id)} key={book.id}>{book.name}</li>
               })}
               </ul> 
        </div>
    )
}

export default BookList
