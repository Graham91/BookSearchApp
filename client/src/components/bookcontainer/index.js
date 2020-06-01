import React, { useState } from "react";
import BookComponent from "../BookComponent";
import axios from "axios";

function BookContainer(props) {
  const BookList = props.booklist;

  const savebook = (event) => {
    let value = event.target.value;
    let index = parseInt(value);

    let book = BookList[index];
    let databaseobj = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors[0],
      body: book.volumeInfo.description,
      imgUrl: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    };
    axios
      .put("/api/add", databaseobj)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="card">
      {BookList.map((book, index) => (
        <BookComponent
          key={index}
          value={index}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          body={book.volumeInfo.description}
          imgUrl={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.infoLink}
          savebook={savebook}
        />
      ))}
    </div>
  );
}

export default BookContainer;
