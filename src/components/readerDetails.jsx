import React, { Component } from "react";
import ReaderService from '../services/readerService'
import DashboardNav from "./dashboardnav";

class ReaderDetails extends Component {
  state = {
    reader: {
      id: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
      password: "",
    },
  };
  componentDidMount(){
      ReaderService.getReaderById(this.props.match.params.id).then((res)=>
      this.setState({reader:res.data})
      );
  }
  handleChange=(event)=>{
      event.preventDefault();
      const reader=this.state.reader;
      reader[event.currentTarget.name]=event.currentTarget.value;
      this.setState({reader});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.reader);
    ReaderService.updateReader(this.props.match.params.id,this.state.reader).then((res) => {
      this.props.history.push("/reader");
    });
  };
  render() {
    return (
      <React.Fragment>
        <DashboardNav/>
      <div className='mt-4'  style={{ fontFamily: "revert", marginLeft:300 }}>
        <form onSubmit={this.handleSubmit} className='w-75 mx-auto' style={{textAlign:'left'}}>
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              FirstName
            </label>
            <span className="text-red">*</span>
            <input
              type="text"
              className="form-control"
              id="name"
              name="firstName"
              minLength="3"
              value={this.state.reader.firstName}
              onChange={this.handleChange}
              required
            />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                LastName
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                minLength="1"
                value={this.state.reader.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                MobileNo
              </label>
              <span className="text-red">*</span>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                minLength='10'
                maxLength='10'
                value={this.state.reader.mobileNo}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <span className="text-red">*</span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.reader.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <span className="text-red">*</span>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                minLength='5'
                value={this.state.reader.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Save
            </button>
            <button
              className="btn btn-secondary mr-2 float-right"
              onClick={() => {
                this.props.history.push("/reader");
              }}
            >
              Cancel
            </button>
        </form>
      </div>        </React.Fragment>
    );
  }
}
export default ReaderDetails
