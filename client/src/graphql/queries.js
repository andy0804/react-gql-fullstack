import { gql } from "apollo-boost";

 export  const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
      author{
        id  
        name
      }
    }
  }
`;

export const GET_AUTHORS = gql`
{
  authors {
    id
    name
   
  }
}
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre ,authorId:$authorId) {
        id
        name
      }
    
  }
`;

export  const GET_BOOK_BY_ID = gql`
query GetBook($id: ID){
    book(id: $id) {
        id
        name
        genre
        author {
            id
            name
            age
            books {
                id
                name
            }
        }
    }
}
`;

