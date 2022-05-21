import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddBook = ({ books, setBooks }) => {
	const [book, setBook] = useState({
		title: "",
		author: "",
		pages: "",
		read: false,
		id: "",
	});

	const handleChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
	};

	const submitForm = (e) => {
		e.preventDefault();
		setBooks([
			...books,
			{
				title: book.title,
				author: book.author,
				pages: book.pages,
				read: book.read,
				id: uuid(),
			},
		]);
		e.target.reset();
	};

	return (
		<div className="rounded overflow-hidden shadow-lg bg-slate-100 text-gray-700 p-4 w-1/2 mx-auto">
			<form onSubmit={submitForm}>
				<input
					type="text"
					name="title"
					placeholder="Book Title"
					required
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="author"
					placeholder="Author"
					required
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="pages"
					placeholder="Pages"
					required
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				<button
					type="submit"
					// onClick={submitForm}
					className="w-full bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded"
				>
					+ Add book
				</button>
			</form>
		</div>
	);
};

export default AddBook;
