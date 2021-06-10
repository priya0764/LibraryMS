import React, { Component } from 'react';
import DamagedBooksService from '../services/damagedBooksService'
import { Link } from "react-router-dom";

class DamagedBooks extends Component {
    state = { 
        damagedBooks : [],
        damagedBook : {
            id : '',
            quantity: '',
            description : '',
        }
     }
     componentDidMount(){
         DamagedBooksService.getAllDamagedBooks().then((res) => {
             this.setState({damagedBooks: res.data});
             console.log(this.state.damagedBooks)
         })
         console.log("Damaged Books:",this.state.damagedBooks);
     }

     viewDamagedBookById = () =>{
      let damagedBooks = [];
      DamagedBooksService.getDamagedBookById(this.state.search).then((res) => {
        damagedBooks = res.data;
      })
      this.setState({damagedBooks})
      console.log("Damaged Books: "+ this.state.damagedBook);
    }
  
    handleUpdate = (id) => {
      this.props.history.push(`/damagedbook/update/${id}`);
    }
  
      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
  
    render() { 
        return ( 
            <div>
        <h2 className="text-center mt-5">Damaged Books List</h2>
        <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
            <Link to="/damagedbook/add" className="btn btn-success btn-large mb-1">
              Add
            </Link>
            <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewDamagedBookById}
            >Search</button>
            </form>
          </div>
          <div className="row mt-3">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.damagedBooks.map((damagedBook) => (
                      <tr key={damagedBook.id}>
                          <td  onClick={() => this.handleUpdate(damagedBook.id)}>{damagedBook.quantity}</td>
                          <td>{damagedBook.description}</td>
                      </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
         );
    }
}
 
export default DamagedBooks;