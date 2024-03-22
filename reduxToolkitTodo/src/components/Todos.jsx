import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice.js";

function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {todo.text && (
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
