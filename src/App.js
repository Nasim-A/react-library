import React, { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Library from "./components/Library";

function App() {
	const [books, setBooks] = useState([]);

	return (
		<div className="App text-zinc-50">
			<header className="mx-auto p-4 bg-rose-600">
				<h1 className="text-3xl font-bold text-center">React Library</h1>
			</header>
			<div className="mx-auto w-full h-screen p-8">
				<AddBook books={books} setBooks={setBooks} />
				<Library books={books} setBooks={setBooks} />
			</div>
		</div>
	);
}

export default App;
