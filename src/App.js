import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-bold underline text-3xl text-center">
        React Todo App
      </h1>

      <div className="my-8 card flex gap-4">
        <input
          className="bg-gray-50 border border-gray-300 rounded-md p-2 hover:bg-indigo-50 focus:outline-indigo-500 flex-1"
          type="text"
          name="newTodo"
          value={todo}
          placeholder="Ex.: Do laundry"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="button"
          className="px-8 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <div className="card">
        <div>todo: {todo}</div>
        <div>
          todos:
          <pre>{todos}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
