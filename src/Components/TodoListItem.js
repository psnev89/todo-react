const TodoListItem = ({ todo, removeTodo, toggleCompleteTodo }) => {
  return (
    <li
      className={`group/item border p-4 rounded-md mb-2 last:mb-0 ${
        todo.completed ? "bg-indigo-50 opacity-60" : ""
      }`}
    >
      <div className="flex gap-4 items-center">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value={todo.completed}
            className="sr-only peer"
            onChange={() => toggleCompleteTodo(todo.id)}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-300"></div>
        </label>
        <div className="flex-1">
          <div className="text-indigo-900 font-bold text-lg">{todo.title}</div>
          <p className="m-0 text-sm text-gray-500">{todo.observations}</p>
        </div>

        <button
          className={`invisible group-hover/item:visible rounded-full  p-1 ${
            todo.completed ? "text-indigo-500 bg-white hover:text-indigo-900" : "text-red-700 hover:text-red-800"
          }`}
          onClick={() => removeTodo(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
