import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, removeTodo, toggleCompleteTodo }) => {
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
              <TodoListItem
                key={index}
                todo={todo}
                removeTodo={removeTodo}
                toggleCompleteTodo={toggleCompleteTodo}
              ></TodoListItem>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
