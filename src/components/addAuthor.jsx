import React, { Component } from "react";
import AuthorService from "../services/authorService";
class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: "",
      firstName: "",
      lastName: "",
      emailId: "",
      mobileNumber: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.changeIdHandler = this.changeIdHandler.bind(this);
  }

  saveAuthor = (e) => {
    e.preventDefault();
    let author = {
      authorId: this.state.authorId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      contactno: this.state.contactno,
    };
    console.log("author => " + JSON.stringify(author));

    AuthorService.addAuthor(author).then((res) => {
      this.props.history.push(`/author`);
    });
  };

  changeIdHandler = (event) => {
    this.setState({ authorId: event.target.value });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeMobileHandler = (event) => {
    this.setState({ contactno: event.target.value });
  };

  cancel() {
    this.props.history.push("/author");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Author</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>AuthorId:</label>
                    <input
                    type="number"
                      placeholder="Id"
                      name="AuthorId"
                      className="form-control"
                      value={this.state.authorId}
                      onChange={this.changeIdHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">FirstName:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                      placeholder="firstname"
                     
                      
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>LastName:</label>
                    <input
                    type="text"
                      placeholder="lastname"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                    type="email"
                      placeholder="Email"
                      name="Email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number:</label>
                    <input
                    type="number"
                      placeholder="Mobile Number"
                      id="contactno"
                      name="contactno"
                      required
                      className="form-control"
                      value={this.state.contactno}
                      onChange={this.changeMobileHandler}
                      
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveAuthor}>
                    {" "}
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAuthor;
