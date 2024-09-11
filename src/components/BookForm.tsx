import { ChangeEvent, EventForm } from "react"
import { useParams } from "react-router-dom"

import Book from "../types/BookType"

type Props = {
	formSubmitHandler: (e: EventForm) => Promise<void>,
	inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
	book: Book
}

function BookForm({formSubmitHandler, inputChangeHandler, book}: Props) {
	const { id } = useParams<{id: string}>()

	return (
		<div>
			<form onSubmit={formSubmitHandler}>
				<div className="inputDiv">
					<label className="inputLabel" htmlFor="bookTitleInput">Book Title:</label>
					<input
						id="bookTitleInput"
						name="title"
						{...id && {value: book.title}}
						type="text"
						placeholder="Pride and Prejudice"
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className="inputDiv">
					<label className="inputLabel" htmlFor="bookAuthorInput">Author:</label>
					<input
						id="bookAuthorInput"
						name="author"
						{...id && {value: book.author}}
						type="text"
						placeholder="Jane Austen"
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className="inputDiv">
					<label className="inputLabel" htmlFor="bookPublishYearInput">Publish Year:</label>
					<input
						id="bookPublishYearInput"
						name="publishYear"
						{...id && {value: book.publishYear}}
						type="number"
						placeholder="1813"
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className="inputDiv">
					<label className="inputLabel" htmlFor="bookGenreInput">Genre: (separated by comma)</label>
					<input
						id="bookGenreInput"
						name="genre"
						{...id && {value: book.genre.join(",")}}
						type="text"
						placeholder="Classic Regency novel, Romance novel"
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<div className="inputDiv">
					<label className="inputLabel" htmlFor="bookPagesInput">Pages Number:</label>
					<input
						id="bookPagesInput"
						name="pagesNumber"
						{...id && {value: book.pagesNumber}}
						type="number"
						placeholder="448"
						onChange={inputChangeHandler}
						required
					/>
				</div>
				<button id="registerButton" type="submit">Register</button>
			</form>
		</div>
	)
}

export default BookForm