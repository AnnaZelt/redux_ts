import React, { useState } from 'react';
import Waga from '../../Display';
import { IBook } from './BookSlice';
import { JSX } from 'react/jsx-runtime';

export function addBook() {
  const [name, setname] = useState("")
  const [author, setauthor] = useState("")
  const [yearPublished, setyearPublished] = useState(0)
  const [books, setbooks] = useState<IBook[]>([])

  function dispatch(arg0: JSX.Element): void {
    throw new Error('Function not implemented.');
  }

  return (
      <div>
      Name: <input type="text" onChange={(e) => setname(e.target.value)}/>
      Auhtor: <input type="text" onChange={(e) => setauthor(e.target.value)}/>
      Year Published: <input onChange={(e) => setyearPublished(Number(e.target.value))}/><br/>
      <button onClick={() => dispatch(addBook(books))}>Add book</button>
      <hr/>
      <h1>Books</h1>
      {books.map((book,ind) => <Waga key={ind} name={book.name} author={book.author} yearPublished={book.yearPublished}/>)}
       </div>
  );
}
export { IBook };

