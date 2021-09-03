import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState();

  const ChangeHandler = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    return e.PrevDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todo} onChange={ChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
