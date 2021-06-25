import React, { Component } from "react";
import SuggestedBooksService from "../services/suggestedBooksService";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboardnav";
import "./style.css";

class SuggestedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedBooks: [],
      search: "",
    };
    this.addSuggestedBooks = this.addSuggestedBooks.bind(this);
    this.deleteSuggestedBooks = this.deleteSuggestedBooks.bind(this);
    this.viewSuggestedBooks = this.viewSuggestedBooks.bind(this);
    this.updateSuggestedBooks = this.updateSuggestedBooks.bind(this);
  }
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };
  addSuggestedBooks() {
    this.props.history.push("/add-suggestedbooks");
  }

  viewSuggestedBooks(id) {
    this.props.history.push(`/view-suggestedbooks/${id}`);
  }

  updateSuggestedBooks(id) {
    this.props.history.push(`/update-suggestedbooks/${id}`);
  }

  getSuggestedBooksByTitle = (title) => {
    this.props.history.push(`/suggestedbooks-title/${title}`);
  };

  deleteSuggestedBooks(id) {
    SuggestedBooksService.deleteSuggestedBooks(id).then((res) => {
      this.setState({
        suggestedBooks: this.state.suggestedBooks.filter(
          (suggestedBooks) => suggestedBooks.id !== id
        ),
      });
    });
  }
  componentDidMount() {
    SuggestedBooksService.getAllSuggestedBooks().then((res) => {
      this.setState({ suggestedBooks: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <h2 className="text-center" style={{ paddingLeft: 200 }}>
          Suggested Books List{" "}
        </h2>

        <div className="d-flex justify-content-between float-right" style={{ marginRight: 170, marginTop:50 }}>
          <form
            className="form-inline my-2 my-lg-0"
           
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              name="title"
              placeholder="Search by title"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-success my-2 my-sm-0"
              type="button"
              onClick={() => this.getSuggestedBooksByTitle(this.state.search)}
            >
              Search
            </button>
          </form>
        </div>
        <div className="row" style={{ marginLeft: 250 }}>
          <table
            className="table table-sm table-striped table-bordered "
            style={{ marginLeft: 280, marginTop: 100, width: 1050 }}
          >
            <thead class="thead-dark">
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.suggestedBooks.map((suggestedBooks) => (
                <tr key={suggestedBooks.id}>
                  <td> {suggestedBooks.title}</td>
                  <td> {suggestedBooks.subject}</td>
                  <td> {suggestedBooks.author}</td>
                  {/*<td> {suggestedBooks.publications}</td>
                                    <td> {suggestedBooks.description}</td>
                                <td> {suggestedBooks.suggested_date}</td>*/}
                  <td> {suggestedBooks.status} </td>

                  <td>
                    <button
                      onClick={() =>
                        this.deleteSuggestedBooks(suggestedBooks.id)
                      }
                      className="btn btn-danger mt-1 ml-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewSuggestedBooks(suggestedBooks.id)}
                      className="btn btn-primary mt-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="View"
                    >
                      <i class="bi bi-eye-fill"></i>
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.updateSuggestedBooks(suggestedBooks.id)
                      }
                      className="btn btn-warning mt-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Update"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default SuggestedBooks;
