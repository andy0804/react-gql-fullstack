import BookList from "./components/BookList";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import {useEffect} from "react";
function App() {
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            books {
              id
              name
              genre
              author{
                name
              }
            }
          }
        `,
      })
      .then((data) => {
        console.log(data, "data called again");
      });
    return () => {};
  }, [client]);
  const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
      author{
        name
      }
    }
  }
`;

  const { loading, data, refetch } = useQuery(GET_BOOKS, {
    fetchPolicy: "network-only",
  });
  if (loading) {
    return <div> Loading..</div>;
  }

  const {books} = data;
  return (
    <div id="main">
     <h1> My Reading List</h1>
     <BookList books={books}/>
    </div>
  );
}

export default App;
