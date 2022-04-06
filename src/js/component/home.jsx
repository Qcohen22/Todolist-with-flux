import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [todoList, setToList] = useState([]);
	const [listItem, setListItem] = useState("");
	console.log(todoList);
	const Delete = (fill) => {
		const del = todoList.filter((item, i) => fill !== i);
		setToList(del);
	};
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
						}
					}}>
					add
				</a>
			</div>
			<ul>
				{todoList.map((item, index) => {
					return (
						<li key={index}>
							{item}
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
