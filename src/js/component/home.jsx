import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [todoList, setToList] = useState([]);
	const [listItem, setListItem] = useState("");

	const addItem = (list) => {
		const addList = [...todoList, { label: list, done: false }];

		fetch("https://assets.breatheco.de/apis/fake/todos/user/astronaut", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(addList),
			redirect: "follow",
		})
			.then((response) => {
				response.status === 200 ? setToList(addList) : "";
			})
			.catch((error) => console.log("error", error));
	};
	console.log(todoList);
	const Delete = (fill) => {
		const del = todoList.filter((item, i) => fill !== i);
		setToList(del);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/astronaut", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(del),
			redirect: "follow",
		})
			.then((response) => {
				response.status === 200 ? setToList(del) : "";
			})
			.catch((error) => console.log("error", error));
	};
	var requestOptions = {
		method: "GET",
		redirect: "follow",
	};

	fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/astronaut",
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
	return (
		<>
			<div>
				<h1>todoList</h1>
				<input
					type="text"
					onChange={(e) => setListItem(e.target.value)}
					value={listItem}
				/>
				<a
					className="btn btn-primary"
					onClick={() => {
						if (listItem !== "") {
							setToList([...todoList, listItem]);
							setListItem("");
							addItem(listItem);
						}
					}}>
					add
				</a>
			</div>
			<ul>
				{todoList.map((item, index) => {
					return (
						<li key={index}>
							{item.label}
							<a
								className="btn btn-danger"
								onClick={() => {
									if (todoList !== "") {
									}
									Delete(index);
								}}>
								x
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
