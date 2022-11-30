import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { FORM_PROPS, TODO_FORM_INITIAL_STATE } from "./helpers";

let id = 0;

const App = () => {
  const [todoForm, setTodoForm] = useState(TODO_FORM_INITIAL_STATE);
  const [todos, setTodos] = useState([]);

  const createTodo = (title, observations) => {
    return {
      id: ++id,
      title,
      observations,
    };
  };

  const addTodo = () => {
    if (todoForm[FORM_PROPS.TITLE]?.trim?.() !== "") {
      const todo = createTodo(
        todoForm[FORM_PROPS.TITLE],
        todoForm[FORM_PROPS.OBSERVATIONS]
      );
      setTodos([...todos, todo]);
      setTodoForm(TODO_FORM_INITIAL_STATE);
    }
  };

  const removeTodo = (todoId) => {
    const filtered = todos.filter((todo) => todo.id !== todoId);
    setTodos(filtered);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="my-8 card">
        <TodoForm todoForm={todoForm} addTodo={addTodo} setTodoForm={setTodoForm}></TodoForm>
      </div>

      <div className="card">
        <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
      </div>
    </div>
  );
};

export default App;
