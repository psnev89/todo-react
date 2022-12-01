import { useState } from "react";
import { FORM_PROPS, TODO_STATUS_FILTER } from "../helpers";

let id = 0;

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [todoListFilter, setTodoListFilter] = useState(null);

  const getTodos = () => {
    if (todoListFilter === TODO_STATUS_FILTER.ACTIVE)
      return todos.filter((todo) => !todo.completed);
    if (todoListFilter === TODO_STATUS_FILTER.COMPLETED)
      return todos.filter((todo) => !!todo.completed);
    return todos;
  };

  const filterTodos = (status) => {
    setTodoListFilter(status);
  };

  const createTodo = (title, observations) => {
    return {
      id: ++id,
      title,
      observations,
      completed: false,
    };
  };

  const addTodo = (todoForm) => {
    if (todoForm[FORM_PROPS.TITLE]?.trim?.() !== "") {
      const todo = createTodo(
        todoForm[FORM_PROPS.TITLE],
        todoForm[FORM_PROPS.OBSERVATIONS]
      );
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (todoId) => {
    const filtered = todos.filter((todo) => todo.id !== todoId);
    setTodos(filtered);
  };

  const clearCompletedTodos = () => {
    const filtered = todos.filter((todo) => !todo.completed);
    setTodos(filtered);
  };

  const toggleCompleteTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleCompleteTodo,
    getTodos,
    filterTodos,
    activeTodosFilter: todoListFilter,
    clearCompletedTodos,
  };
};

export default useTodos;
