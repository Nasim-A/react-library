import React, { useState } from "react";

const AddBook = ({ book, setBook }) => {
	const handleChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
	};

	const submitForm = (e) => {
		e.preventDefault();
		console.log(book);
		e.target.reset();
	};

	return (
		<div className="rounded overflow-hidden shadow-lg bg-slate-100 text-gray-700 p-4 w-1/2 mx-auto">
			<form onSubmit={submitForm}>
				<input
					type="text"
					name="title"
					placeholder="Book Title"
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="author"
					placeholder="Author"
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="pages"
					placeholder="Pages"
					className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
					onChange={handleChange}
				/>
				{/* <div className="text-center form-control block w-full my-4 px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded">
					{`Read? `}
					<input type="checkbox" onChange={handleChange} />
				</div> */}
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
