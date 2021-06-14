import React, { Component } from "react";
import PublisherService from "../services/publisherService";
import DashboardNav from './dashboardnav';

class AddPublisher extends Component {
  state = {
    publisher: {
            publisherId: '',
            publisherName: '',
            contactno: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            pincode: ''
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    PublisherService.addPublisher(this.state.publisher).then((res) => {
      this.props.history.push("/publisher");
    });
  };

  handleChange = (event) => {
    const publisher = { ...this.state.publisher };
    publisher[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ publisher });
  };

  render() {
    return (
      <React.Fragment>
          <DashboardNav />
        <div className="content-wrapper" style={{minHeight: 757.08, textAlign:"left"}}>
          <section className="content">
            <div className="box box-mytheme">
            <h3 className="text-center">Add Publisher</h3>
              <div className="row">
                <div className="col-md-6">
                  <form onSubmit={this.handleSubmit}>
                    <div className="box-body">
                      <div className="form-group ">
                        <label htmlFor="publisherId"> Publisher Id</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="number"
                          className="form-control"
                          id="publisherId"
                          name="publisherId"
                          value={this.state.publisher.publisherId}
                          onChange={this.handleChange}
                          placeholder="Enter id"
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="publisherName">Publisher Name</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="publisherName"
                          name="publisherName"
                          value={this.state.publisher.publisherName}
                          onChange={this.handleChange}
                          placeholder="Enter Publisher Name"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="contactno">Contact No</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="contactno"
                          name="contactno"
                          value={this.state.publisher.contactno}
                          onChange={this.handleChange}
                          placeholder="Enter Subject"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="email">Email Id</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={this.state.publisher.email}
                          onChange={this.handleChange}
                          placeholder="Enter Email Id"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="address1">Address 1</label>{" "}
                         <input
                          type="text"
                          className="form-control"
                          id="address1"
                          name="address1"
                          value={this.state.publisher.address1}
                          onChange={this.handleChange}
                          placeholder="Enter Address1"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="address2">Address 2</label>{" "}
                        <span className="text-red">*</span>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          value={this.state.publisher.address2}
                          onChange={this.handleChange}
                          placeholder="Enter Address 2"
                          required
                        />
                      </div>

                      <div className="form-group ">
                        <label htmlFor="city">City</label>
                        <input
                          name="city"
                          id="city"
                          className="form-control"
                          value={this.state.publisher.city}
                          onChange={this.handleChange}
                          placeholder="Enter the City"
                          required
                        />                                              
                       
                      </div> 
                      
                      <div className="form-group ">
                        <label htmlFor="state">State</label>
                        <input
                          name="state"
                          id="state"
                          className="form-control"
                          value={this.state.publisher.state}
                          onChange={this.handleChange}
                          placeholder="Enter the State"
                          required
                        />                                              
                       
                      </div>  
                      <div className="form-group ">
                        <label htmlFor="pincode">Pincode</label>
                        <input
                          name="pincode"
                          id="pincode"
                          className="form-control"
                          value={this.state.publisher.pincode}
                          onChange={this.handleChange}
                          placeholder="Enter the Pincode"
                          required
                        />                                              
                       
                      </div>                               
                      
                    </div>
                    <div className="box-footer">
                    <button className="btn btn-success" onClick={this.handleSubmit}> Save </button>
                    <button className="btn btn-danger" onClick={()=>{this.props.history.push("/publisher")}} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default AddPublisher;
