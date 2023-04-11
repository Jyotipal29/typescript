import React, { useState } from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo;
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todos, todo, setTodo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todos.text);

  const handleDone = (id: number) => {
    setTodo(
      todo.map((todos) =>
        todos.id === id ? { ...todos, isDone: !todos.isDone } : todos
      )
    );
  };

  const deleteHandler = (id: number) => {
    setTodo(todo.filter((it) => it.id !== id));
  };

  const editHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodo(
      todo.map((it) => (it.id === id ? { ...todos, text: editedTodo } : it))
    );
    setEdit(false);
    console.log(todos, "todos");
  };
  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      <form onSubmit={(e) => editHandler(e, todos.id)}>
        {edit ? (
          <input
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : todos.isDone ? (
          <span style={{ textDecoration: "line-through" }}>{todos.text}</span>
        ) : (
          <span style={{ color: "red", margin: "20px" }}>{todos.text}</span>
        )}

        <span>
          <span
            style={{ margin: "20px" }}
            onClick={() => {
              if (!edit && !todos.isDone) {
                setEdit(!edit);
              }
            }}
          >
            edit
          </span>
          <span
            style={{ margin: "20px" }}
            onClick={() => deleteHandler(todos.id)}
          >
            delete
          </span>
          <span onClick={() => handleDone(todos.id)}>done</span>
        </span>
      </form>
    </div>
  );
};

export default SingleTodo;
