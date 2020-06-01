import React from "react";
import "./BookComponentFav.css";

function BookComponentFav(props) {
  const deletebook = (event) => {};
  return (
    <div className="bookcard">
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
        <button value={props.value} onClick={deletebook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookComponentFav;
