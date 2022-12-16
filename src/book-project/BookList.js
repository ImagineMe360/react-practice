import React from "react";

// SETUP
import { books } from "./bookdata";

const BookList = () => {
  //   books.map((book) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        // const { title, author, image } = book;
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
  //   });
};

const Book = (props) => {
  function click() {
    console.log(title);
  }
  const { title, author, image } = props;
  //   console.log(props);
  return (
    <div className="book">
      <img src={image} alt="Book" className="book-image" />
      <h1 className="book-title">{title}</h1>
      <h4 className="book-author">{author.toUpperCase()}</h4>
      <button onClick={click}>Show Title</button>
    </div>
  );
};

export default BookList;
