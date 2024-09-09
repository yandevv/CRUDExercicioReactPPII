import axios from 'axios';

import Book from '../types/BookType';

const api = axios.create({
	baseURL: 'http://localhost:3001'
})

export const getBooks = () => api.get('/books');
export const getBookById = (id: number) => api.get(`/books/${id}`);
export const insertBook = (book: Book) => api.post('/books', book);
export const updateBook = (id: number, book: Book) => api.put(`/books/${id}`, book);
export const deleteBook = (id: number) => api.delete(`/books/${id}`);