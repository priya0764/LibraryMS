import React, { Component } from "react";
import ReaderService from "../services/readerService";
import { Link } from "react-router-dom";
import DashboardNav from "./dashboardnav";

class Readers extends Component {
  state = {
    readers: [],
    search: "",
    reader: {
      id: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
    },
  };

  componentDidMount() {
    ReaderService.getAllReaders().then((res) => {
      this.setState({ readers: res.data });
    });
  }
  deleteReader = (id) => {
    console.log("Delete reader with id: " + id);
    const readers = this.state.readers.filter(
      (reader) => reader.id !== id
    );
    this.setState({ readers });
    ReaderService.deleteReaderById(id);
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  viewReader = () => {
    let readers=[];
    ReaderService.getReaderByFirstName(this.state.search).then((res)=>{
     readers=res.data;
     this.setState({readers});
     console.log(this.state.readers);
    });
    }
  render() {
    return (
      <React.Fragment>
      <DashboardNav/>
      <section className="content " style={{ fontFamily: "revert", marginLeft:300 }}>
          <div className="box-head">
    
        <div className="d-flex justify-content-between " style={{width:'auto'}}>
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/reader/add" className="btn btn-dark">
          <i className="fa fa-plus"></i>
            Add Reader
          </Link>
          <form class="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search by FirstName"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewReader}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <div className="row">
            <table className="table table-striped table-bordered mt-2">
              <thead>
                <tr>
                  <th>Reader FirstName</th>
                  <th>Reader LastName</th>
                  <th>Reader MobileNo</th>
                  <th>Reader Email</th>
                  <th colSpan="2"> Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.readers.map((reader) => (
                  <tr key={reader.id}>
                    
                    <td>{reader.firstName}</td>
                    <td>{reader.lastName}</td>
                    <td>{reader.mobileNo}</td>
                    <td>{reader.email}</td>
                    <td>
                      <Link to={`/reader/update/${reader.id}`}>
                        <button 
                        type="button"
                  
                        className="btn btn-warning btn-xs"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                       >  <i className="fa fa-edit"></i></button>{" "}
                </Link>

                      <button
                       type="button"
                        className="btn btn-danger btn-xs"
                        onClick={() => this.deleteReader(reader.id)}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
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
                  </div>
                  </div>
      </section>
      </React.Fragment>

    );
  }
}

export default Readers;
