import React, { Component } from "react";
import "./Favoritebook.css";
import BookComponentFav from "../BookComponentFav";
import axios from "axios";

class Favoritebooks extends Component {
  state = {
    Favoritelist: [],
  };
  componentDidMount() {
    console.log("hi");

    axios.get("/api/sendData").then((res) => {
      this.setState({ Favoritelist: res.data });
    });
  }

  render() {
    return (
      <div className="card">
        {this.state.Favoritelist.map((book, index) => (
          <BookComponentFav
            key={index}
            value={index}
            title={book.title}
            authors={book.authors}
            body={book.body}
            imgUrl={book.imgUrl}
            link={book.link}
          />
        ))}
      </div>
    );
  }
}
export default Favoritebooks;
