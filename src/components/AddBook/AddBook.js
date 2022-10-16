import React from "react";
import "./AddBook.css";
import { useState } from "react";

const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd({ title });
    setTitle("");
  };
  return (
    <div>
      <form className="add-book" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add a Book..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn-add">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddBook;
