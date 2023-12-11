import { IBook } from "./Book";
import axios from "axios" 

// A mock function to mimic making an async request for data
export function saveBooks(books:IBook[]) {
  const MY_SERVER = 'http://localhost:3005'
  return axios.post(MY_SERVER, books)
}
