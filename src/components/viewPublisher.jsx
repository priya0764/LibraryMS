import React, { Component } from "react";
import PublisherService from "../services/publisherService";
import DashboardNav from "./dashboardnav";

class ViewPublisher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisherId: this.props.match.params.publisherId,
      publishers: {},
    };
  }

  componentDidMount() {
    PublisherService.getPublisherById(this.state.publisherId).then((res) => {
      this.setState({ publishers: res.data });
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
      <div className="card col-md-6 offset-md-3">
        
        <h3 className="text-center"> View Publisher Details</h3>
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h1>{this.props.match.params.publisherId}</h1>
            <div className="row">
              <label>
                <b>Publisher Name : </b>
              </label>
              <div> &nbsp;{this.state.publishers.publisherName}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher Contact No :</b>
              </label>
              <div> &nbsp;{this.state.publishers.contactno}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher EmailId : </b>
              </label>
              <div>&nbsp;{this.state.publishers.email}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher Address1 : </b>
              </label>
              <div>&nbsp;{this.state.publishers.address1}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher Address2 : </b>
              </label>
              <div>&nbsp;{this.state.publishers.address2}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher City : </b>
              </label>
              <div>&nbsp;{this.state.publishers.city}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher State : </b>
              </label>
              <div>&nbsp;{this.state.publishers.state}</div>
            </div>
            <div className="row">
              <label>
                <b>Publisher Pincode : </b>
              </label>
              <div>&nbsp;{this.state.publishers.pincode}</div>
            </div>
          </div>
        </div>
        <div><a class="btn btn-primary" href="\publisher" role="button">Back</a></div>
      </div>
      </React.Fragment>
    );
  }
}

export default ViewPublisher;
