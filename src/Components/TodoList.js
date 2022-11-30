const TodoList = ({ todos, removeTodo }) => {
  return (
    <>
      {!todos?.length ? (
        <div className="w-full text-center">
          <div className="text-[100px]">&#128076;</div>
          <div className="font-bold text-2xl text-indigo-900">No tasks</div>
        </div>
      ) : (
        <>
          <div className="flex justify-end mb-2">
            <small>
              {todos.length} {todos.length > 1 ? "tasks" : "task"}
            </small>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="border p-4 rounded-md mb-2 last:mb-0">
                <div className="flex gap-4 items-center">
                  <div className="flex-1">
                    <div className="text-indigo-900 font-bold text-lg">
                      {todo.title}
                    </div>
                    <p className="m-0 text-sm text-gray-500">
                      {todo.observations}
                    </p>
                  </div>

                  <button
                    className="button-layout text-white bg-red-700"
                    onClick={() => removeTodo(todo.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
