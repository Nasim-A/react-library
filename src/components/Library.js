import React from "react";

const Library = () => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 text-gray-700 m-4 w-64">
			<div className="p-4">
				<div className="font-bold text-xl mb-2">Book title</div>
				<p>Author Name</p>
				<p>Number of pages</p>
				<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4">
					Read
				</button>
				<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
					Remove
				</button>
			</div>
		</div>
	);
};

export default Library;
