const NavBar = ({ unCompleteTodo, onSelect, status }) => {
  if (!unCompleteTodo) return <h2> set yours today todos !</h2>;

  return (
    <header>
      <span>{unCompleteTodo}</span> <h2>Are Not Completed</h2>
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
