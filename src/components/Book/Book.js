import React from "react";
import "./Book.css";

const Book = ({ book, onDelete }) => {
  return (
    <div className="book-list">
      <div>{book.title}</div>
      <div>
        <button className="btn-delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;
