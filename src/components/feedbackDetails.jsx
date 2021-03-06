import React, { Component } from "react";
import FeedbackService from "../services/feedbackService";
import DashboardNav from "./dashboardnav";

class FeedbackDetails extends Component {
  state = {
    feedback: {
      id: "",
      feedbackDate: "",
      description: "",
      rating: "",
      comments: "",
    },
  };
  componentDidMount() {
    FeedbackService.viewFeedbackById(this.props.match.params.id).then((res) =>
      this.setState({ feedback: res.data })
    );
  }
  handleChange = (event) => {
    event.preventDefault();
    const feedback = this.state.feedback;
    feedback[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ feedback });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.feedback);
    FeedbackService.updateFeedback(
      this.props.match.params.id,
      this.state.feedback
    ).then((res) => {
      this.props.history.push("/feedback");
    });
  };
  render() {
    return (
      <React.Fragment>
        <DashboardNav/>
        <div style={{ fontFamily: "revert", marginLeft:300 }}>
          <form
            onSubmit={this.handleSubmit}
            className="w-50 ml-5 mt-5"
            style={{ textAlign: "left" }}
          >
            <h1>{this.props.match.params.id}</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Feedback_Date
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control"
                id="feedbackDate"
                name="feedbackDate"
                value={this.state.feedback.feedbackDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Description
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={this.state.feedback.description}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                Rating
              </label>
              <span className="text-red">*</span>
              <input
                type="number"
                className="form-control"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={this.state.feedback.rating}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Comments
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control"
                id="comments"
                name="comments"
                value={this.state.feedback.comments}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary float-right mt-3">
              Save
            </button>
            <button
              className="btn btn-secondary mr-2 float-right mt-3"
              onClick={() => {
                this.props.history.push("/feedback");
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
export default FeedbackDetails;
