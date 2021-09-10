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

    props.submitTodo(input);
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
