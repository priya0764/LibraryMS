import React, { Component } from "react";
import DamagedBooksService from "../services/damagedBooksService";
import DashboardNav from './dashboardnav';

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
      <React.Fragment>
        <DashboardNav/>
        <section className="content-header" style={{marginLeft:230}}>
          <h2 style={{ textAlign: "left" }}>Damaged Book</h2>
          <hr/>
        </section>
      <div className="w-25" style={{textAlign:"left", marginLeft:250}}>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id"><b>Id </b>*</label>
            <input
              type="text"
              className="form-control mb-2"
              id="id"
              name="id"
              value={this.state.damagedBook.id}
              onChange={this.handleChange}
              autoFocus
            />
            <label htmlFor="quantity"><b>Quantity </b>*</label>
            <input
              type="text"
              className="form-control mb-2"
              id="quantity"
              name="quantity"
              value={this.state.damagedBook.quantity}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="description" className="form-label">
            <b>Description </b>*
            </label>
            <input
              type="text"
              className="form-control mb-1"
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
                this.props.history.push("/damagedbook");
              }}
            >
              Cancel
            </button>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default AddDamagedBooks;
