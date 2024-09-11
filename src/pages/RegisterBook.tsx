import { useState, ChangeEvent, FormEvent } from 'react';
import { insertBook } from '../services/api';
import { useNavigate } from 'react-router-dom';

import Book from '../types/BookType';
import BookForm from '../components/BookForm';
	
import '../styles/RegisterBook.css';

function RegisterBook() {
	const [book, setBook] = useState<Book>({
		title: "",
		author: "",
		publishYear: 0,
		pagesNumber: 0,
		genre: [""]
	});

	const navigate = useNavigate();

	function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		if(e.target.name === "genre") {
			const genreValue = e.target.value.split(',').map((genre) => genre.trim());

			setBook({
				...book,
				[e.target.name]: genreValue
			});

			return;
		}

		setBook({
			...book,
			[e.target.name]: e.target.value
		});
	}

	async function formSubmitHandler(e: FormEvent) {
		e.preventDefault();

		try {
			await insertBook(book);
		} catch (error) {
			console.log(`An error occurred when registering the book. Error: ${error}`);
		}

		navigate("/");
	}

	return (
		<div>
			<h2>Register a Book</h2>
			<BookForm formSubmitHandler={formSubmitHandler} inputChangeHandler={inputChangeHandler} book={book} />
		</div>
	)
}

export default RegisterBook