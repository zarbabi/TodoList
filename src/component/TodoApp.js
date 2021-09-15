import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [status, setStatus] = useState("ALL");

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodo = (input) => {
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

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      case "Completed":
        setfilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setfilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setfilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <div className="container">
      <NavBar
        unCompleteTodo={todos.filter((todo) => !todo.isCompleted).length}
        status={status}
        onSelect={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
