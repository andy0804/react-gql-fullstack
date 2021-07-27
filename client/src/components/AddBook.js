import React,{useState,useEffect} from 'react'
import { ADD_BOOK } from '../graphql/queries';
import { useMutation } from "@apollo/react-hooks";

const intialState = {
    name:null,
    genre:null,
    author:null
}
const AddBook = ({authors,refetch}) => {
    const [currentAuthorId,setCurrentAuthorId] = useState(null);
    const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
        onCompleted: (data) => {
         console.log(data);
         refetch();
        },
      });

 
    const [state,setState] = useState(intialState)
    const addBooks = (e)=>{
    e.preventDefault();
    const {name,genre,author } = state;
    const authorId = authors.find(aut=>aut.name === author).id
    setCurrentAuthorId(authorId);
     addBook({ variables: { name,genre,authorId } });
    }
    const onChange = (e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input onChange={onChange} name="name" type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input  onChange={onChange} name="genre" type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select  onChange={onChange} name="author">
                        <option>Select author</option>
                        { authors.map((author,index)=>{
                            return <option key={index}>{author.name}</option>
                        }) }
                    </select>
                </div>
                <button onClick={addBooks}>+</button>

            </form>
        </div>
    )
}

export default AddBook
