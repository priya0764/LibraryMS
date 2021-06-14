import React, { Component } from "react";
import SuggestedBooksService from "../services/suggestedBooksService";
import DashboardNav from "./dashboardnav";

class SearchTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedbooks: [],
      title: this.props.match.params.title,
      suggestedbook: {},
    };
  }

  componentDidMount(){
    SuggestedBooksService.getSuggestedBooksByTitle(this.state.title).then((res) => {
      this.setState({ suggestedbooks: res.data });
      console.log(this.state.suggestedbooks);
    });
    // const books = this.state.books.filter(
    //   (book) => book.subject === this.state.search
    // )
    // this.setState({books})

  }
  render() {
    return (
      <React.Fragment>
        <DashboardNav />
      <div className=" w-75 mt-5 mx-auto">
        <h2>{this.props.match.params.title}</h2>
        <div className="row mt-1">
          <table className="table table-sm table-striped table-bordered" style={{marginLeft:260,marginTop:60,width:1000}}>
            <thead class="thead-dark">
              <tr>
             
              <th>Title</th>
                <th>Subject</th>
                <th>Author</th>
                <th>Status</th>
                
              </tr>
            </thead>
            <tbody>
            {this.state.suggestedbooks.map((suggestedbook) => (
                <tr key={suggestedbook.id} >
                  <td> {suggestedbook.title}</td>
                  <td> {suggestedbook.subject}</td>
                  <td> {suggestedbook.author}</td>
                  <td> {suggestedbook.status} </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div><a class="btn btn-primary" href="\suggestedbooks" role="button" style={{marginTop:280}}> Back</a></div>
      </div>
      </React.Fragment>
    );
  }
}


export default SearchTitle;