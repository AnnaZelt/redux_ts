import axios from "axios" 
import { IBook } from "./bookSlice"

// A mock function to mimic making an async request for data
export function saveBooks(books:IBook[]) {
  const MY_SERVER = 'http://localhost:3005'
  console.log("sent");
  return axios.post(MY_SERVER, books)
}
