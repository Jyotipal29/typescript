import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      setTodo([...todo, { id: Date.now(), text, isDone: false }]);
      setText("");
    }
  };
  return (
    <div className="App">
      <Input text={text} setText={setText} submit={handleSubmit} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
