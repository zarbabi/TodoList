import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const ChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("enter input!");
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    };

    props.setTodos([...props.todos, newTodo]);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={ChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
