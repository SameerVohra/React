import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
import { useState } from "react";
function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit"> ADD </button>
    </form>
  );
}

export default AddTodo;
