import React from "react";
import "./BookComponentFav.css";
import htmlToImage from "html-to-image";

function BookComponentFav(props) {
  const deletebook = (event) => {
    props.delete(event);
  };
  const getimage = () => {
    var htmlToImage = require("html-to-image");
    var node = document.getElementById("bookimage");

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div className="bookcard" id="bookimage">
      <div>
        <img
          src={props.imgUrl}
          alt="image failed to load"
          className="picture"
        ></img>
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>description:{props.body}</p>
      </div>
      <a href={props.link}>read more</a>
      <div>
        <button value={props.title} onClick={deletebook}>
          Delete
        </button>
        {/* <button onClick={getimage}>getimg</button> */}
      </div>
    </div>
  );
}

export default BookComponentFav;
