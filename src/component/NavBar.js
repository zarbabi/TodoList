import React from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompleteTodo, onChange, selectedOption }) => {
  if (!unCompleteTodo) return <h2> set yours today todos !</h2>;

  return (
    <header>
      <span>{unCompleteTodo}</span> <h2>Are Not Completed</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />
    </header>
  );
};

export default NavBar;
