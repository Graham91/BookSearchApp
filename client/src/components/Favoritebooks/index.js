import React, { Component } from "react";
import "./Favoritebook.css";
import BookComponentFav from "../BookComponentFav";
import axios from "axios";
import htmlToImage from "html-to-image";

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

  // getimage = () => {
  //   var htmlToImage = require("html-to-image");
  //   var node = document.getElementById("bookimage");

  //   htmlToImage
  //     .toPng(node)
  //     .then(function (dataUrl) {
  //       var img = new Image();
  //       img.src = dataUrl;
  //       document.body.appendChild(img);
  //     })
  //     .catch(function (error) {
  //       console.error("oops, something went wrong!", error);
  //     });
  // };

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
      <div className="card" id="bookimage">
        {/* <button onClick={this.getimage}>getimg</button> */}
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
