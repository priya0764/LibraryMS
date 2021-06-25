import React, { Component } from "react";
import FeedbackService from "../services/feedbackService";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboardnav";

class Feedback extends Component {
  state = {
    feedbacks: [],
    feedback: {
      userId: "",
      id: "",
      feedbackDate: "",
      description: "",
      rating: "",
      comments: "",
      users: 0,
    },
  };

  componentDidMount() {
    FeedbackService.getAllFeedback().then((res) => {
      this.setState({ feedbacks: res.data });
    });
  }
  deleteFeedback = (id) => {
    console.log("Delete feedback with id: " + id);
    const feedbacks = this.state.feedbacks.filter(
      (feedback) => feedback.id !== id
    );
    this.setState({ feedbacks });
    FeedbackService.deleteFeedbackById(id);
  };

  viewFeedback = () => {
    let feedbacks = [];
    FeedbackService.viewFeedbackByRating(this.state.search).then((res) => {
      feedbacks = res.data;
      this.setState({ feedbacks });
      console.log(this.state.feedbacks);
    });
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <section
          className="content "
          style={{ fontFamily: "revert", marginLeft: 300 }}
        >
          <div className="box-head">
            <div
              className="d-flex justify-content-between "
              style={{ width: "auto" }}
            >
              <form className="form-inline my-2 my-lg-0 mr-0">
                <input
                  className="form-control  "
                  type="search"
                  placeholder="Search by Rating"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0  ml-2 mr-5"
                  type="button"
                  onClick={this.viewFeedback}
                >
                  Search
                </button>
              </form>
            </div>
            <div className="box-body">
              <div id="hide-table">
                <table
                  id="example1"
                  className="table table-bordered table-striped mr-5"
                  style={{ marginTop: 50, marginLeft: 330, width: 810 }}
                >
                  <thead>
                    <tr>
                      <th>UserId</th>
                      <th>Feedback_Date</th>
                      <th>Description</th>
                      <th>Rating</th>
                      <th>Comments</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.feedbacks.map((feedback) => (
                      <tr key={feedback.id}>
                        <td>{feedback.userId}</td>
                        <td>{feedback.feedbackDate}</td>
                        <td>{feedback.description}</td>
                        <td>{feedback.rating}</td>
                        <td>{feedback.comments}</td>
                        <td>
                          <Link to={`/feedback/update/${feedback.id}`}>
                            <button
                              type="button"
                              className="btn btn-warning btn-xs"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              {" "}
                              <i className="fa fa-edit"></i>
                            </button>{" "}
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger btn-xs"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Delete"
                            onClick={() => this.deleteFeedback(feedback.id)}
                          >
                            <i className="fa fa-trash-o"></i>
                          </button>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feedback;
