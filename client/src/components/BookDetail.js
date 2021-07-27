import React from 'react'

const BookDetail = ({bookDetail}) => {
    console.log(bookDetail,'book')
    const {name,author : {name:authorName,books},genre} = bookDetail;
    return (
        <div id="book-details">
            <h2>{name} </h2>
            <p>{genre} </p>
            <p>{authorName}</p>
            <p>All Books by this author:</p>
            <ul className="other-books">
                {books.map(book=>{
                    return<li key={book.id}>{book.name}</li>
                })}
            </ul>

        </div>
    )
}

export default BookDetail
