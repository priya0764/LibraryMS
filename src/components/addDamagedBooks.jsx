import React, { Component } from "react";
import DamagedBooksService from "../services/damagedBooksService";

class AddDamagedBooks extends Component {
  state = {
    damagedBook: {
      quantity: "",
      description: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    DamagedBooksService.addDamagedBook(this.state.damagedBook).then((res) => {
      this.props.history.push("/damagedbook");
    });
  };

  handleChange = (event) => {
    const damagedBook = { ...this.state.damagedBook };
    damagedBook[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ damagedBook });
  };

  render() {
    return (
      <div className="w-25 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={this.state.damagedBook.id}
              onChange={this.handleChange}
              autoFocus
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
              value={this.state.damagedBook.quantity}
              onChange={this.handleChange}
              required
            />
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
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
          <button
              type="submit"
              className="btn btn-danger ml-3"
              onClick={() => {
                this.props.history.push("/damangedbook");
              }}
            >
              Cancel
            </button>
        </form>
      </div>
    );
  }
}

export default AddDamagedBooks;
