import React from 'react'
import { IBook } from './features/counter/Book'

const Waga = (book: IBook) => {
  return (
    <div>
        Name: {book.name} |{" "}
        Author: {book.author} |{" "}
        Year-Published: {book.yearPublished.toString()}
    </div>
  )
}

export default Waga