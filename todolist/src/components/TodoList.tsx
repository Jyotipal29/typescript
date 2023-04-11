import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div>
      {todo?.map((todos) => (
        <SingleTodo
          todos={todos}
          key={todos.id}
          todo={todo}
          setTodo={setTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
