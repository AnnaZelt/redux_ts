import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { saveBooks } from './bookAPI';
import { useState } from 'react';

export interface BookState {
  status: 'idle' | 'loading' | 'failed';
}

export interface IBook {
    name: String;
    author: String;
    yearPublished: Number;
}

const initialState: BookState = {
  status: 'idle',
};

export const saveAsync = createAsyncThunk(
  'Book/save',
  async (books: IBook[]) => {
    const response = await saveBooks(books);
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state,books:IBook[]) => {
      const [name, setname] = useState("")
      const [author, setauthor] = useState("")
      const [yearPublished, setyearPublished] = useState(0)
      const [books, setbooks] = useState<IBook[]>([])
      const newBook = () =>{
        const newBook:IBook = {
          name: name,
          author: author,
          yearPublished: yearPublished
        }
        setbooks([...books, newBook])
      }
    },
    extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const { increment} = bookSlice.actions;
export const selectCount = (state: RootState) => state.book.value;
export default bookSlice.reducer;
