import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    //console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    //item => findIndex =>clone
    const index = todos.findIndex((todo) => todo.id === id);
    //clone : do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    //clone : todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp;
