import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookReducer from '../features/counter/bookSlice'

export const store = configureStore({
  reducer: {
    bookSlice: bookReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
