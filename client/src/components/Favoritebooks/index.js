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
      console.log(this.state);
    });
  }

  delete = (event) => {
    let removetitle = event.target.value;

    axios
      .put("/api/delete", {
        name: removetitle,
      })
      .then(function (response) {
        window.location.reload(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="card">
        {this.state.Favoritelist.map((book, index) => (
          <BookComponentFav
            key={index}
            value={book.id}
            title={book.title}
            authors={book.authors}
            body={book.body}
            imgUrl={book.imgUrl}
            link={book.link}
            delete={this.delete}
          />
        ))}
      </div>
    );
  }
}
export default Favoritebooks;
