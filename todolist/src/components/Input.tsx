import React from "react";

const Input = () => {
  return (
    <div className="todo__container">
      <input className="input" placeholder="type something" />
      <button type="submit" className="submit__btn">
        add
      </button>
    </div>
  );
};

export default Input;
