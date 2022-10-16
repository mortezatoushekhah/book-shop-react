import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import AddBook from "./components/AddBook/AddBook";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account/Account";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/books/${id}`).then((response) => {
      setBooks(books.filter((item) => item.id !== id));
    });
  };

  const filterHandler = (e) => {
    console.log(e);
  };

  const addProduct = (title) => {
    axios.post("http://localhost:8000/books", title).then((response) => {
      console.log(response.data);
      setBooks([...books, response.data]);
    });
  };

  return (
    <>
      <Navbar onFilter={filterHandler} />
      <Routes>
        <Route
          path="/"
          element={[
            <BookList
              books={books}
              onDelete={deleteHandler}
            />,
            <AddBook onAdd={addProduct} />
          ]}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
