import React, { Component } from "react";
import SuggestedBooksService from "../services/suggestedBooksService";
import UserNavbar from "./userNavbar";

class UserSuggestedBooks extends Component {
  state = {
    suggestedbook: {
      id: "",
      title: "",
      subject: "",
      author: "",
      publications: "",
      description: "",
      suggested_date: "",
      status: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    SuggestedBooksService.addSuggestedBooks(this.state.suggestedbook).then(
      (res) => {
        this.props.history.push("/userPage");
      }
    );
  };

  handleChange = (event) => {
    const suggestedbook = { ...this.state.suggestedbook };
    suggestedbook[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ suggestedbook });
  };

  render() {
    return (
      <React.Fragment>
          <UserNavbar/>
        <div
          className="content-wrapper"
          style={{ minHeight: 757.08, textAlign: "left" }}
        >
          <section className="content">
            <div className="box box-mytheme">
              <h3 className="text-center">Add Suggested Books</h3>
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
                          value={this.state.suggestedbook.id}
                          onChange={this.handleChange}
                          placeholder="Enter id"
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="title">Title</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={this.state.suggestedbook.title}
                          onChange={this.handleChange}
                          placeholder="Enter title"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="subject">Subject</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={this.state.suggestedbook.subject}
                          onChange={this.handleChange}
                          placeholder="Enter Subject"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="author">Author</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="author"
                          name="author"
                          value={this.state.suggestedbook.author}
                          onChange={this.handleChange}
                          placeholder="Enter Author"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="publications">Publications</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          id="publications"
                          name="publications"
                          value={this.state.suggestedbook.publications}
                          onChange={this.handleChange}
                          placeholder="Enter Publications"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="description">Description</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="description"
                          value={this.state.suggestedbook.description}
                          onChange={this.handleChange}
                          placeholder="Enter Description"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="suggested_date">Suggested Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="suggested_date"
                          name="suggested_date"
                          value={this.state.suggestedbook.suggested_date}
                          onChange={this.handleChange}
                          placeholder="yyyy-mm-dd"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="status">Status</label>
                        <input
                          name="status"
                          id="status"
                          className="form-control"
                          value={this.state.suggestedbook.status}
                          onChange={this.handleChange}
                          placeholder="Enter the Status"
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
                          this.props.history.push("/userPage");
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

export default UserSuggestedBooks;
