import React from "react";
import "./BookComponent.css";

function BookComponent(props) {
  console.log("inside:" + props);

  const savebook2 = (event) => {
    props.savebook(event);
  };
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
        <button value={props.value} onClick={savebook2}>
          Save
        </button>
      </div>
    </div>
  );
}

export default BookComponent;
