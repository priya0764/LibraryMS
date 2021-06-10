import React, { Component } from "react";
import DamagedBooksService from "../services/damagedBooksService";

class DamagedBooksDetails extends Component {
  state = {
    damagedBooks : [],
    damagedBook: {
      id: "",
      quantity: "",
      description: "",
    },
  };

  componentDidMount() {
    DamagedBooksService.getDamagedBookById(this.props.match.params.id).then(
      (res) => {
        this.setState({ damagedBook: res.data });
      }
    );
    console.log("Damaged Books: ", this.state.damagedBook);
  }

    deleteDamagedBook = (id) => {
      const damagedBooks = this.state.damagedBooks.filter(
        (damagedBook) => damagedBook.id !== id
      );
      this.setState({ damagedBooks });
      DamagedBooksService.deleteDamagedBook(id).then(
        (res) => this.props.history.push("/damagedbook")
        );
    };

  handleChange = (event) => {
    event.preventDefault();
    const damagedBook = this.state.damagedBook;
    damagedBook[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ damagedBook });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.damagedBook);
    DamagedBooksService.updateDamagedBook(
      this.props.match.params.id,
      this.state.damagedBook
    ).then((res) => this.props.history.push("/damagedbook"));
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <h2>{this.state.damagedBook.id}</h2>
          <div className="mb-3">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={this.state.damagedBook.quantity}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={this.state.damagedBook.description}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Update
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => this.deleteDamagedBook(this.state.damagedBook.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary ml-2 float-right"
            onClick={() => {
              this.props.history.push("/damagedbook");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default DamagedBooksDetails;
