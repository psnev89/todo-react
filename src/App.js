import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { TODO_FORM_INITIAL_STATE } from "./helpers";
import useTodos from "./Hooks/useTodos";

const App = () => {
  const [todoForm, setTodoForm] = useState(TODO_FORM_INITIAL_STATE);
  const {
    addTodo,
    removeTodo,
    toggleCompleteTodo,
    filterTodos,
    activeTodosFilter,
    getTodos,
    clearCompletedTodos
  } = useTodos();

  const add = () => {
    addTodo(todoForm);
    setTodoForm(TODO_FORM_INITIAL_STATE);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="my-8 card">
        <TodoForm
          todoForm={todoForm}
          addTodo={add}
          setTodoForm={setTodoForm}
        ></TodoForm>
      </div>

      <div className="card">
        <TodoList
          todos={getTodos()}
          removeTodo={removeTodo}
          toggleCompleteTodo={toggleCompleteTodo}
          filterTodos={filterTodos}
          activeTodosFilter={activeTodosFilter}
          clearCompletedTodos={clearCompletedTodos}
        ></TodoList>
      </div>
    </div>
  );
};

export default App;
