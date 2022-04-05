import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [todoList, setToList] = useState([]);
	const [listItem, setListItem] = useState([]);

	const addItem = (newItem) => {
		let newlist = [...todoList, { label: newItem, done: false }];
	};
	fetch("LIHK", {
		method: "PUT",
		headers: {},
	});

	return (
		<div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
