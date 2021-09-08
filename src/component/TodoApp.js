import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // const addTodoHandler = (input) => {
  //   //console.log(input);
  //   const newTodo = {
  //     id: Math.floor(Math.random() * 1000),
  //     text: input,
  //     isComplete: false,
  //   };

  //   setTodos([...todos, newTodo]);
  // };

  return (
    <div className="container">
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
