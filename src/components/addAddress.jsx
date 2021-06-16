import React, { Component } from "react";
import AddressService from "../services/addressService";
import DashboardNav from "./dashboardnav";

class AddAddress extends Component {
  state = {
    address: {
      addressIdId: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    AddressService.createAddress(this.state.address).then((res) => {
      this.props.history.push("address");
    });
  };
  handleChange = (event) => {
    const address = { ...this.state.address };
    address[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ address });
  };
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
      <div className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="address1" className="form-label">
              Address1
            </label>
            <input
              type="text"
              className="form-control"
              minLength="5"
              id="address1"
              name="address1"
              value={this.state.address.address1}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="address2" className="form-label">
              Address2
            </label>
            <input
              type="text"
              className="form-control"
              minLength="5"
              id="address2"
              name="address2"
              value={this.state.address.address2}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              minLength="5"
              id="city"
              name="city"
              value={this.state.address.city}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              minLength="5"
              id="state"
              name="state"
              value={this.state.address.state}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              minLength="6"
              id="pincode"
              name="pincode"
              value={this.state.address.pincode}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default AddAddress;
