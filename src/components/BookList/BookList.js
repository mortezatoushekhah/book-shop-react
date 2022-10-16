import React from "react";

import Book from "../Book/Book";

const BookList = ({ books, onDelete }) => {
  return (
    
      books.map((item) => {
        return <Book key={item.id} book={item} onDelete={onDelete} />;
      })
    
  );
};

export default BookList;
