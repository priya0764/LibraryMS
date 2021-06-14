import React, { Component } from 'react'
import BooksReturnedService from '../services/booksReturnedService';
import {Link} from "react-router-dom";


class BooksReturned extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booksReturned: [],
            search:""


        }

        this.updateReturnedBooks = this.updateReturnedBooks.bind(this);
        this.addReturnedBooks = this.addReturnedBooks.bind(this);
        this.deleteReturnedBooks = this.deleteReturnedBooks.bind(this);
        this.viewReturnedBooks = this.viewReturnedBooks.bind(this);
        // this.updateReturnedBooks = this.updateReturnedBooks.bind(this);

    }

    addReturnedBooks() {
        this.props.history.push('/add-returned');
    }


    viewReturnedBooks(id) {
        this.props.history.push(`/view-returned/${id}`);
    }


    updateReturnedBooks(id) {
        this.props.history.push(`/update-returned/${id}`);
    }

    getReturnedBooksByDelayedDays=(delayedDays) => {
        this.props.history.push(`returnedBooks-delayed/${delayedDays}`)
    }

    /*
    deleteReturnedBooks(id) {
        BooksReturnedService.deleteReturnedBooks(id).then(res => {
            this.setState({ authors: this.state.authors.filter(author => author.authorId !== authorId) });
        });
    }
*/
    deleteReturnedBooks(id) {
        BooksReturnedService.deleteReturnedBooks(id).then(res => {
            this.setState({ booksReturned: this.state.booksReturned.filter(returned => returned.id !== id) });
        });
    }

    componentDidMount() {
        BooksReturnedService.getAllReturnedBooks().then((res) => {

            this.setState({ booksReturned: res.data });
        });
    }
    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };

    render() {
        return (
            <div>
                <h2 className="text-center">ReturnedBooks List</h2>
                {/* <div className="row">
                    <button c
                    lassName="btn btn-success mb-2" onClick={this.addReturnedBooks}>Add</button>
                </div> */}

<div className="d-flex justify-content-between">
            <Link to="/add-returned" className="btn btn-success btn-large mb-1">
              Add
            </Link>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                name="delayedDays"
                placeholder="Search by days"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button
                className="btn btn-warning my-2 my-sm-0"
                type="button"
                onClick={() => this.getReturnedBooksByDelayedDays(this.state.search)}
              >
                Search
              </button>
            </form>
          </div>
                <div className="row">
                    <table className="table table-sm table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Returned Date</th>
                                <th>Delayed Days</th>
                                <th>Penalty</th>
                                <th>Penalty Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.booksReturned.map(
                                    returnedBooks =>
                                        <tr key={returnedBooks.id}>
                                            <td>{returnedBooks.returnedDate}</td>
                                            <td>{returnedBooks.delayedDays}</td>
                                            <td>{returnedBooks.penalty}</td>
                                            <td>{returnedBooks.penalty_Status}</td>

                                            <td>
                                                <button onClick={() => this.deleteReturnedBooks(returnedBooks.id)} className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewReturnedBooks(returnedBooks.id)} className="btn btn-primary">View</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.updateReturnedBooks(returnedBooks.id)} className="btn btn-secondary">Update</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BooksReturned;