import React, { Component } from "react";
import BooksReturnedService from "../services/booksReturnedService";
import DashboardNav from "./dashboardnav";

class AddBooksReturned extends Component {
  state = {
    returned: {
      returnedDate: "",
      delayedDays: "",
      penalty: "",
      penalty_Status: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    BooksReturnedService.addReturnedBooks(this.state.returned).then((res) => {
      this.props.history.push("/booksReturned");
    });
  };

  handleChange = (event) => {
    const returned = { ...this.state.returned };
    returned[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ returned });
  };

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <div
          className="content-wrapper"
          style={{ minHeight: 757.08, textAlign: "left" }}
        >
          <section className="content">
            <div className="box box-mytheme">
              <h3 className="text-center">Add Returned Books</h3>
              <div className="row">
                <div className="col-md-6">
                  <form onSubmit={this.handleSubmit}>
                    <div className="box-body">
                      <div className="form-group ">
                        <label htmlFor="id">Id</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="id"
                          name="id"
                          value={this.state.returned.id}
                          onChange={this.handleChange}
                          placeholder="Enter book id"
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="returnedDate">Returned Date</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="date"
                          className="form-control"
                          id="returnedDate"
                          name="returnedDate"
                          value={this.state.returned.returnedDate}
                          onChange={this.handleChange}
                          placeholder="dd-mm-yyyy"
                          required="true"
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="delayedDays">Delayed Days</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="delayedDays"
                          name="delayedDays"
                          value={this.state.returned.delayedDays}
                          onChange={this.handleChange}
                          placeholder="Enter DelayedDays"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="penalty">Penalty Amount</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="penalty"
                          name="penalty"
                          value={this.state.returned.penalty}
                          onChange={this.handleChange}
                          placeholder="Enter Penalty Amount"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="penalty_Status">Penalty Status</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          id="penalty_Status"
                          name="penalty_Status"
                          value={this.state.returned.penalty_Status}
                          onChange={this.handleChange}
                          placeholder="Enter Penalty Status"
                          required
                        />
                      </div>
                    </div>

                    <div className="box-footer">
                      <button
                        className="btn btn-success"
                        onClick={this.handleSubmit}
                      >
                        {" "}
                        Save{" "}
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.history.push("/booksReturned");
                        }}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBooksReturned;
