import { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

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
      {props.edit ? (
        <>
          <input
            type="text"
            value={input}
            onChange={ChangeHandler}
            placeholder="Update Todo ..."
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            onChange={ChangeHandler}
            placeholder="Add Todo ..."
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
