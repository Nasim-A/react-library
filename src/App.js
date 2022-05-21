import React, { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Library from "./components/Library";

function App() {
	const [book, setBook] = useState({
		title: "",
		author: "",
		pages: "",
		read: false,
	});
	return (
		<div className="App bg-rose-600 text-zinc-50">
			<header className="container mx-auto p-4">
				<h1 className="text-3xl font-bold text-center">React Library</h1>
			</header>
			<div className="mx-auto w-full h-screen bg-zinc-800 p-8">
				{/* Add book form */}
				<AddBook book={book} setBook={setBook} />

				{/* List all books */}
				<Library />
			</div>
		</div>
	);
}

export default App;
