import React from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Library from "./components/Library";

function App() {
	return (
		<div className="App bg-blue-500 text-zinc-50">
			<header className="container mx-auto p-4">
				<h1 className="text-3xl font-bold">React Library</h1>
			</header>
			<div className="mx-auto w-full h-screen bg-slate-900 p-8">
				{/* Add book button */}
				<AddBook />

				{/* List all books */}
				<Library />
			</div>
		</div>
	);
}

export default App;
