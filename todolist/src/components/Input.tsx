import React from "react";

interface Props{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  submit:(e: React.FormEvent) => void
}


const Input: React.FC<Props> = ({ text, setText,submit }) => {
  return (
    <div className="todo__container">
      <input
        className="input"
        value={text}
        placeholder="type something"
        onChange={(e)=>setText(e.target.value)}
      />
      <button type="submit" className="submit__btn" onClick={submit}>
        add
      </button>
    </div>
  );
};

export default Input;
