import React, { Component } from "react";
import BooksReturnedService from "../services/booksReturnedService";

class SearchReturnedBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnedBooks: [],
      delayedDays: this.props.match.params.delayedDays,
      returned: {},
    };
  }

  componentDidMount(){
    BooksReturnedService.getByDelayedDaysGreaterThanEqual(this.state.delayedDays).then((res) => {
      this.setState({ returnedBooks: res.data });
      console.log(this.state.returnedBooks);
    });
    // const books = this.state.books.filter(
    //   (book) => book.subject === this.state.search
    // )
    // this.setState({books})

  }
  render() {
    return (
      <div className="w-75 mt-5 mx-auto">
        <h2>{this.props.match.params.delayedDays}</h2>
        <div className="row mt-3">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Returned Date</th>
                <th>Delayed days</th>
                <th>Penalty</th>
                <th>Penalty Status</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.returnedBooks.map((returned) => (
                <tr key={returned.id}>
                  <td>{returned.returnedDate}</td>
                  <td>{returned.delayedDays}</td>
                  <td>{returned.penalty}</td>
                  <td>{returned.penalty_Status}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default SearchReturnedBook;