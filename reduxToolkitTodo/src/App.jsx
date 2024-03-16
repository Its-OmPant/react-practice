import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
	return (
		<>
			<h1 className="text-center text-2xl text-pink-700 font-bold m-2">
				My Todo
			</h1>
			<div className=" text-center w-1/2 mx-auto">
				<AddTodo />
				<Todos />
			</div>
		</>
	);
}

export default App;
