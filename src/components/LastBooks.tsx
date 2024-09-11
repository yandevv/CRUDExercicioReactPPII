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
		setBooks(response.data.slice(response.data.length - 5, response.data.length));
	}

	return (
		<div className="mainDiv">
			<h3>Last Books Added:</h3>
			{books.length === 0 ? (
				<p>Loading...</p>
			) : books.map(((book) => (
				<p key={book.id}>{book.title} - {book.author} ({book.publishYear})</p>
			)))}
		</div>
	)
}

export default LastBooks;