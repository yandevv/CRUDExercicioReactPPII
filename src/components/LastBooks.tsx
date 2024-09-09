import { useState, useEffect } from 'react';

import Book from '../types/BookType';

import { getBooks } from '../services/api';

import '../styles/LastBooks.css';

function LastBooks() {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		loadLastBooks();
	}, [books]);

	async function loadLastBooks() {
		const response = await getBooks();
		response.data.sort((bookA: Book, bookB: Book) => bookB.id - bookA.id);
		setBooks(response.data.slice(0, 5));
	}

	return (
		<div className="mainDiv">
			<h3>Last Books Added:</h3>
			{books.length === 0 ? (
				<p>Loading...</p>
			) : books.map(((book) => (
				<p>{book.title} - {book.author} ({book.publishYear})</p>
			)))}
		</div>
	)
}

export default LastBooks;