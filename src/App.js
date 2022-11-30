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

  const removeTodo = (todoText) => {
    const filtered = todos.filter((todo) => todo !== todoText);
    setTodos(filtered);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-bold underline text-3xl text-center">
        React Todo App
      </h1>

      <div className="my-8 card flex gap-4 items-center">
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
          className="button-layout text-white bg-indigo-500 hover:bg-indigo-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <div className="card">
        {!todos?.length ? (
          <div className="w-full text-center">
            <div className="text-[100px]">&#128076;</div>
            <div className="font-bold text-2xl text-indigo-900">No tasks</div>
          </div>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="border p-4 rounded-md mb-2 last:mb-0">
                <div className="flex items-center">
                  <span className="flex-1 text-indigo-900 font-bold text-lg">
                    {todo}
                  </span>
                  <button
                    className="button-layout text-white bg-red-700"
                    onClick={() => removeTodo(todo)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
