import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { saveBooks } from './bookAPI';

export interface BookState {
  status: 'idle' | 'loading' | 'failed';
  books: IBook[];
}

export interface IBook {
  name: string;
  author: string;
  yearPublished: number;
}

const initialState: BookState = {
  status: 'idle',
  books: [],
};

export const saveAsync = createAsyncThunk(
  'book/save',
  async (books: IBook[]) => {
    const response = await saveBooks(books);
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveAsync.fulfilled, (state) => {
        state.status = 'idle';
        // You might update the state if needed after saving books
      })
      .addCase(saveAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addBook } = bookSlice.actions;
export const selectBooks = (state: RootState) => state.bookSlice.books;
export const selectStatus = (state: RootState) => state.bookSlice.status;

export default bookSlice.reducer;
