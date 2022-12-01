import TodoListItem from "./TodoListItem";
import { TODO_STATUS_FILTER } from "../helpers";

const TodoList = ({
  todos,
  removeTodo,
  toggleCompleteTodo,
  filterTodos,
  activeTodosFilter,
  clearCompletedTodos,
}) => {
  const filter = (status) => {
    filterTodos(status);
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <div>
          <button
            type="button"
            className={`p-3 font-medium ${
              activeTodosFilter === TODO_STATUS_FILTER.ALL
                ? "text-indigo-500 border-b-4 border-indigo-500"
                : "text-gray-400 hover:text-indigo-500"
            }`}
            onClick={() => filter(TODO_STATUS_FILTER.ALL)}
          >
            All
          </button>
          <button
            type="button"
            className={`p-3 font-medium ${
              activeTodosFilter === TODO_STATUS_FILTER.ACTIVE
                ? "text-indigo-500 border-b-4 border-indigo-500"
                : "text-gray-400 hover:text-indigo-500"
            }`}
            onClick={() => filter(TODO_STATUS_FILTER.ACTIVE)}
          >
            Active
          </button>
          <button
            type="button"
            className={`p-3 font-medium ${
              activeTodosFilter === TODO_STATUS_FILTER.COMPLETED
                ? "text-indigo-500 border-b-4 border-indigo-500"
                : "text-gray-400 hover:text-indigo-500"
            }`}
            onClick={() => filter(TODO_STATUS_FILTER.COMPLETED)}
          >
            Completed
          </button>
        </div>
        <button
          type="button"
          className={`font-medium text-gray-400 hover:text-indigo-500`}
          onClick={clearCompletedTodos}
        >
          Remove Completed
        </button>
      </div>
      {!todos?.length ? (
        <div className="w-full text-center">
          <div className="text-[100px]">&#128076;</div>
          <div className="font-bold text-2xl text-indigo-900">No tasks</div>
        </div>
      ) : (
        <>
          <ul>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleCompleteTodo={toggleCompleteTodo}
              ></TodoListItem>
            ))}
          </ul>
          <div className="flex justify-end mt-2">
            <small>
              {todos.length} {todos.length > 1 ? "tasks" : "task"}
            </small>
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
