import React, { useState } from 'react';
import { IBook } from './bookSlice';
import { useAppDispatch } from '../../app/hooks';
import { addBook, saveAsync } from './bookSlice';

const Book = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [yearPublished, setYearPublished] = useState(0);
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useAppDispatch();

  const handleAddBook = () => {
    const newBook: IBook = {
      name: name,
      author: author,
      yearPublished: yearPublished,
    };
    setBooks([...books, newBook]);
    dispatch(addBook(newBook));
    dispatch(saveAsync(books));
    // Clear input fields after adding book
    setName('');
    setAuthor('');
    setYearPublished(0);
  };

  return (
    <div>
      <h1>Add Book</h1>
      Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      Author: <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      Year Published: <input type="number" value={yearPublished} onChange={(e) => setYearPublished(Number(e.target.value))} />
      <br />
      <button onClick={handleAddBook}>Add book</button>
      <hr />
      <h1>Books</h1>
      {books.map((book, ind) => (
        <div key={ind}>
          <p>Name: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>Year Published: {book.yearPublished}</p>
        </div>
      ))}
    </div>
  );
};

export default Book;
