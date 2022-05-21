import React from "react";
import Book from "./Book";

const Library = ({ books, setBooks }) => {
	return (
		<div className="rounded m-4 flex flex-wrap flex-row">
			{books.map((book) => (
				<Book
					title={book.title}
					author={book.author}
					pages={book.pages}
					read={book.read}
					id={book.id}
					key={book.id}
					books={books}
					setBooks={setBooks}
					book={book}
				/>
			))}
		</div>
	);
};

export default Library;
