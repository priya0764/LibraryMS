import React, { Component } from "react";
import _ from "lodash";
import UsersService from "../services/usersService";
import {Link} from "react-router-dom";
import DashboardNav from "./dashboardnav";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn:{path:"title",order:"asc"},
      search:"",
      userList: [],
      user:{}
    };
  }
  componentDidMount() {
    UsersService.getAllUsers().then((res) => {
      console.log("data: ", res.data);
      this.setState({ userList: res.data });
    });
    console.log("userDetails: "+ this.state.userList);
  }

  deleteUser=(id)=>{
    console.log("Delete user with id: " + id);
    const userList=this.state.userList.filter(
    (user)=>user.userId !==id
    );
    this.setState({ userList });
    UsersService.deleteUser(id);
  
  };
  viewUser=()=>{
    let userList=[];
    UsersService.getUserById(this.state.serach).then((res)=>{
      console.log("**data: ", res.data);
      userList=res.data;
    });
    this.setState({ userList });
    console.log("**viewUser"+this.state.userList);
  };
    handleSort=(path)=>{
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc"}});
  };

  onChange=(event)=>{
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, userList }=this.state;
    var sorted=[];
    if(search){
      sorted=userList.filter((user)=>user.userId==search);
    }else{
      sorted=_.orderBy(
        this.state.userList,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.userList);
    console.log("Sorted..",sorted);
    return (
      <React.Fragment>
        <DashboardNav/>
        <h2 className="text-center mt-2">Users List</h2>
        <div className="w-75 mt-5 mx-auto">

         <div className="d-flex justify-content-between" style={{marginLeft:230}}>
           <Link to="/user/add" className="btn btn-success btn-large mb-1">

             Add User
           </Link>
           <form class="form-inline my-2 my-lg-0">
             <input
              classNAme="form-control ml-auto"
              type="search"
              placeholder="search"
              aria-label="search"
              onChange={this.onChange}
             />
           </form>
         </div>
        </div>
        <div className="row">

          <table className="table table-stripped table-bordered " style={{marginLeft:280, marginTop:100, width:1000}}>

            <thead>
              <tr>
                <th onClick={()=>this.handleSort("email")}>Email</th>
                <th onClick={()=>this.handleSort("firstname")}>FirstName</th>
                <th onClick={()=>this.handleSort("lastname")}>LastName</th>
                <th onClick={()=>this.handleSort("mobileNumber")}>MobileNumber</th>
                <th onClick={()=>this.handleSort("dateOfBirth")}>DateOFBirth</th>
                <th colSpan="2">Action</th>
             </tr>
            </thead>
            <tbody>
              {sorted.map((user) => (
                <tr key={user.userId}>
                  <td>{user.email}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>
                     <Link to={`/user/update/${user.userId}`}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>

                    <button
                     className="btn btn-danger ml-2"
                     onClick={()=> this.deleteUser(user.userId)}
                     > 
                       Delete
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

export default Users;