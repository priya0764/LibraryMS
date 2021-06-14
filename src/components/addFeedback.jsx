import React, { Component } from "react";
import FeedbackService from "../services/feedbackService";
import feedback3 from "../images/feedback3.jpg"

class AddFeedback extends Component {
  state = {
    feedback: {
      userId:'',
      id: "",
      feedbackDate: "",
      description: "",
      rating: "",
      comments: "",
      userId:"",
    },
  };
  // to handle sumbit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    FeedbackService.writeFeedback(this.state.feedback).then(
      (res) => {
        this.props.history.push("/feedback");
      }
    );
  };
  handleChange = (event) => {
    const feedback = { ...this.state.feedback };
    // dynamically handling event changes
    feedback[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ feedback });
  };
  render() {
    return (
      <React.Fragment>
      <div className="mt-5">
        <h4 className="ml-5 mt-2 pl-5" style={{ color: "GrayText" }}>
          Give your valuable feedback
        </h4>
        <table>
          <tr>
            <td width='900'>
        <form className="w-50 ml-5 pl-5"  onSubmit={this.handleSubmit} style={{textAlign:'left'}}>
          <div className="mb-0 mt-1">
            <label htmlFor="user_id" className="form-label">
              UserId
            </label>
            <span className="text-red">*</span>
            <input
              type="text"
              className="form-control"
              id="users"
              name="userId"
              value={this.state.feedback.userId}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-0">
            <label htmlFor="FeedbackDate" className="form-label">
              Feedback_Date
            </label>
            <span className="text-red">*</span>
            <input
              type="text"
              className="form-control"
              id="feedbackDate"
              placeholder="yyyy-mm-dd"
              minLength="0000-00-00"
              name="feedbackDate"
              value={this.state.feedback.feedbackDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-0">
            <label htmlFor="Description" className="form-label">
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
          <div className="mb-0">
            <label htmlFor="Rating" className="form-label">
              Rating
            </label>
            <span className="text-red">*</span>
            <input
              type="number"
              className="form-control"
              id="rating"
              min="1"
              max="5"
              name="rating"
              value={this.state.feedback.rating}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-0">
            <label htmlFor="comments" className="form-label">
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

          <button 
            type="submit"
            className="btn btn-primary mt-3"           
          >
            Submit
          </button>
        </form>
        </td>
        <td width='520' style={{backgroundImage:`url(${feedback3})`}}>
          
        </td>
        </tr>
        </table>
      </div>
      </React.Fragment>
    );
  }
}
export default AddFeedback;
