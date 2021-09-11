const NavBar = ({ unCompleteTodo }) => {
  return (
    <header>
      {" "}
      {unCompleteTodo ? (
        <>
          <span>{unCompleteTodo}</span> <h2>Are Not Completed</h2>
        </>
      ) : (
        <h2> set yours today todos !</h2>
      )} 
    </header>
  );
};

export default NavBar;
