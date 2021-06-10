import React, { Component } from "react";
import PublisherService from "../services/publisherService";
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
      <div>
        <h2 className="text-center"> Publisher List </h2>
        <div className="row">
          <button
            className="btn btn-info btn-large mb-2 ml-3"
            onClick={this.addPublisher}
          >
            <i class="bi bi-plus-square"></i> Add
          </button>
        </div>
        <form class="form-inline ">
          <input
            className="form-control ml-auto"
            type="search"
            placeholder="search by Id"
            aria-label="search"
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-success mb-5"
            type="button"
            onClick={this.viewPublisher}
          >
            Search
          </button>
        </form>

        <div className="row">
          <table
            class="table"
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
                  {/*<td> {publishers.address1}</td>
                                            <td> {publishers.address2}</td>                                           
                                            <td> {publishers.state}</td>
                                <td> {publishers.pincode}</td>*/}

                  <td>
                    <button
                      onClick={() =>
                        this.deletePublisher(publishers.publisherId)
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
      </div>
    );
  }
}

export default Publishers;
