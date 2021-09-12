import { useState } from "react";

const NavBar = ({ unCompleteTodo, filterTodos }) => {
  const [status, setStatus] = useState(["ALL"]);
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  if (!unCompleteTodo) return <h2> set yours today todos !</h2>;

  return (
    <header>
      <span>{unCompleteTodo}</span> <h2>Are Not Completed</h2>
      <select onChange={changeHandler}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
