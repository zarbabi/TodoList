import Todo from "./Todo";

const TodoList = ({ todos, onComplete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
        />
      );
    });
  };
  return <div>{renderTodos()}</div>;
};

export default TodoList;
