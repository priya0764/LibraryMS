import React, { Component } from "react";
import AuthorService from "../services/authorService";
import DashboardNav from "./dashboardnav";

class SearchAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      firstName: this.props.match.params.firstName,
      author: {},
    };
  }

  componentDidMount() {
    AuthorService.getAuthorByName(this.state.firstName).then((res) => {
      this.setState({ authors: res.data });
      console.log(this.state.authors);
    });
  }
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <div className="w-75 mt-5 mx-auto">
          <h2>{this.props.match.params.firstName}</h2>
          <div className="row mt-3">
            <table
              className="table table-sm table-striped table-bordered"
              style={{ marginLeft: 300, width: 1200, marginTop: 50 }}
            >
              <thead class="thead-dark">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>EmailId</th>
                  <th>Mobile no</th>
                </tr>
              </thead>
              <tbody>
                {this.state.authors.map((author) => (
                  <tr key={author.authorId}>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                    <td>{author.email}</td>
                    <td>{author.contactno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchAuthor;
