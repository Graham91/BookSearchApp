import React, { Component } from "react";
import "./BooksSearch.css";
import BookContainer from "../bookcontainer";
import Searchbar from "../Searchbar";
import googleBooksApiRoutes from "../../utils/googlebooks";

class BookSearch extends Component {
  state = {
    booklist: [],
  };

  search = (searchterm) => {
    this.Findbooks(searchterm);
  };

  Findbooks = (searchterm) => {
    googleBooksApiRoutes(searchterm).then((result) => {
      const searchresult = result.data.items;
      console.log(searchresult);
      this.setState({ booklist: searchresult });
    });
  };

  render() {
    return (
      <div className="card">
        <Searchbar search={this.search} />
        <BookContainer booklist={this.state.booklist} />
        <button onClick={this.Findbooks}>passbooks</button>
      </div>
    );
  }
}

export default BookSearch;
