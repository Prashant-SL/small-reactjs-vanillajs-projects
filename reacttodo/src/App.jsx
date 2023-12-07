import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState('');

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, todoInput]);
		setTodoInput('');
	};

	const deleteEntry = (index) => {
		setTodos(todos.filter((todo, ind) => ind != index));
	};

	const deleteAll = () => {
		setTodos([]);
	};

	return (
		<div>
			<input
				onChange={(e) => {
					setTodoInput(e.target.value);
				}}
				value={todoInput}
			/>
			<button onClick={addTodo}>Submit</button>
			<div id='list'>
				{todos.length != 0 ? (
					<div>
						{todos.map((todo, index) => (
							<div
								key={index}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									border: '1px solid black',
								}}
							>
								<p>{todo}</p>
								<button onClick={() => deleteEntry(index)}>Delete {index}</button>
							</div>
						))}
						<button onClick={deleteAll}>Remove All</button>
					</div>
				) : (
					<p>Add todos</p>
				)}
			</div>
		</div>
	);
}

export default App;
