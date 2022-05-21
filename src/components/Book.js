import React from "react";

const Book = ({ title, author, pages, read, books, setBooks, book }) => {
	const deleteBook = () => {
		setBooks(books.filter((el) => el.id !== book.id));
	};

	const readBook = () => {
		setBooks(
			books.map((item) => {
				if (item.id === book.id) {
					return {
						...item,
						read: !item.read,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="bg-slate-100 text-gray-700 shadow-lg mx-auto h-56 p-8 m-4 text-center">
			<div className="font-bold text-xl mb-2">{title}</div>
			<p>{author}</p>
			<p>{pages}</p>
			{read ? (
				<button
					onClick={readBook}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
				>
					Read
				</button>
			) : (
				<button
					onClick={readBook}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4"
				>
					Not Read
				</button>
			)}
			<button
				onClick={deleteBook}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			>
				Remove
			</button>
		</div>
	);
};

export default Book;
