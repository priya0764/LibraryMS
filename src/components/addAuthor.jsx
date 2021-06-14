import React, { Component } from "react";
import AuthorService from "../services/authorService";
import { Link } from "react-router-dom";
import DashboardNav from './dashboardnav';

class AddAuthor extends Component {
  state = {
    author: {
        authorId: '',
        firstName: '',
        lastName: '',
        email: '',
        contactno: ''
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    AuthorService.addAuthor(this.state.author).then((res) => {
      this.props.history.push("/author");
    });
  };

  handleChange = (event) => {
    const author = { ...this.state.author };
    author[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ author });
  };

  render() {
    return (
      <React.Fragment>
          <DashboardNav />
        <div className="content-wrapper" style={{minHeight: 757.08, textAlign:"left"}}>
          <section className="content">
            <div className="box box-mytheme">
            <h3 className="text-center">Add Author</h3>
              <div className="row">
                <div className="col-md-6">
                  <form onSubmit={this.handleSubmit}>
                    <div className="box-body">
                      <div className="form-group ">

                        <label htmlFor="authorId">AuthorId</label>{" "}
                      
                        <input
                          type="number"
                          className="form-control"
                          id="authorId"
                          name="authorId"
                          value={this.state.author.authorId}
                          onChange={this.handleChange}
                          placeholder="Enter Author id"
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="firstName">First Name</label>{" "}
                        
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={this.state.author.firstName}
                          onChange={this.handleChange}
                          placeholder="Enter firstName"
                          required="true"
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="lastName">Last Name</label>{" "}
                        
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={this.state.author.lastName}
                          onChange={this.handleChange}
                          placeholder="Enter lastName"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="email">Email Id</label>{" "}
                  
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={this.state.author.email}
                          onChange={this.handleChange}
                          placeholder="Enter Email Id"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="contactno">Contact Number</label>{" "}
                         <input
                          type="text"
                          className="form-control"
                          id="contactno"
                          name="contactno"
                          value={this.state.author.contactno}
                          onChange={this.handleChange}
                          placeholder="Enter Contact Number"
                          required
                        />
                      </div>                                 
                      
                    </div>
                    <div className="box-footer">
                    <button className="btn btn-success" onClick={this.handleSubmit}> Save </button>
                    <button className="btn btn-danger" onClick={()=>{this.props.history.push("/author")}} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default AddAuthor;