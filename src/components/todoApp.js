import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
	const [title, setTitle] = useState("");
	const [todos, setTodos] = useState([]);

	function handleClick(e) {
		e.preventDefault();
		setTitle(e.target.value);
	}

	function handleChange(e) {
		setTitle(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newTodo = {
			id: crypto.randomUUID(),
			title,
			completed: false,
		};

		setTodos([...todos, newTodo]);

		setTitle("");
	}

	function handleUpdate(id, newValue) {
		const temp = [...todos];
		const item = temp.find((x) => x.id === id);
		item.title = newValue;
		setTodos(temp);
	}

	return (
		<div className="todoContainer">
			<form className="todoCreateForm" onSubmit={handleSubmit}>
				<input onChange={handleChange} className="todoInput" value={title} />
				<input
					className="buttonCreate"
					onClick={handleSubmit}
					type="submit"
					value="Add"
				/>

				{title}
			</form>

			<div className="todosContainer">
				{todos.map((todo) => (
					<Todo key={todo.id} item={todo} onUpdate={handleUpdate} />
				))}
			</div>
		</div>
	);
}
