import React from 'react'

const BookList = ({books}) => {
    return (
        <div>
           <ul id="book-list">
               {books.map(book=> {
                   return <li key={book.id}>{book.name}</li>
               })}
               </ul> 
        </div>
    )
}

export default BookList
