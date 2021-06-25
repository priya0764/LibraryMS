import React, { Component } from "react";
import PublisherService from "../services/publisherService";
import DashboardNav from "./dashboardnav";
import "./style.css";

class Publishers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publishers: [],
    };

    this.addPublisher = this.addPublisher.bind(this);
    this.deletePublisher = this.deletePublisher.bind(this);
    this.viewPublisher = this.viewPublisher.bind(this);
    this.updatePublisher = this.updatePublisher.bind(this);
  }
  addPublisher() {
    this.props.history.push("/add-publisher");
  }

  viewPublisher(publisherId) {
    this.props.history.push(`/view-publisher/${publisherId}`);
  }

  updatePublisher(publisherId) {
    this.props.history.push(`/update-publisher/${publisherId}`);
  }

  deletePublisher(publisherId) {
    PublisherService.deletePublisher(publisherId).then((res) => {
      this.setState({
        publishers: this.state.publishers.filter(
          (publishers) => publishers.publisherId !== publisherId
        ),
      });
    });
  }
  componentDidMount() {
    PublisherService.getAllPublishers().then((res) => {
      this.setState({ publishers: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <DashboardNav />
        <h2 className="text-center" style={{paddingLeft:200}} >  Publisher List </h2>
        <div className="row" style={{marginLeft:250}}>
          <button
            className="btn btn-info btn-large mb-2 ml-3"
            onClick={this.addPublisher}
          >
            <i class="bi bi-plus-square"></i> Add
          </button>
        </div>
                <div className="row">
          <table
            class="table"
            style={{marginLeft:280,marginTop:80,width:1050}}
            className="table table-sm table-bordered table-striped"
          >
            <thead class="thead-dark">
              <tr>
                <th>PublisherName</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.publishers.map((publishers) => (
                <tr key={publishers.publisherId}>
                  <td> {publishers.publisherName}</td>
                  <td> {publishers.contactno}</td>
                  <td> {publishers.email}</td>
                  <td> {publishers.city}</td>
                   <td>
                    <button
                      onClick={() =>
                        this.deletePublisher(publishers.publisherId)
                      }
                      className="btn btn-danger btn-xs mt-1 ml-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewPublisher(publishers.publisherId)}
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
                        this.updatePublisher(publishers.publisherId)
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

export default Publishers;
