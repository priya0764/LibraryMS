import React, { Component }from "react";
import BooksIssuedService from "../services/booksIssuedService";
import DashboardNav from "./dashboardnav";

class BooksIssuedDetails extends Component{
    state = {
        booksIssuedList: {
            issueId:"",
            issueDate:"",
            quantity:"",
            dueDate:"",
        
        },
     };
    componentDidMount(){
        BooksIssuedService.getById(this.props.match.params.id).then((res)=>
         this.setState({booksIssuedList:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const booksIssuedList=this.state.booksIssuedList;
        booksIssuedList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ booksIssuedList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.booksIssuedList);
        BooksIssuedService.updateBooks(
            this.props.match.params.id,
            this.state.booksIssuedList
            
        ).then((res)=>{
            this.props.history.push("/booksIssued");
        });
    };
    render(){
        return(
            <React.Fragment>
              <DashboardNav/>  
            <div>
              <form onSubmit={this.handleSubmit} className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>
                  <h1>{this.props.match.params.id}</h1>
                  
                  <div className="mb-3">
                   <label htmlFor="issueId" className="form-label">
                          IssueId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="issueId"
                        name="issueId"
                        value={this.state.booksIssuedList.issueId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="issueDate" className="form-label">
                          IssueDate
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="issueDate"
                        name="issueDate"
                        value={this.state.booksIssuedList.issueDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="quantity" className="form-label">
                          Quantity
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={this.state.booksIssuedList.quantity}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="dueDate" className="form-label">
                          Due Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        name="dueDate"
                        value={this.state.booksIssuedList.dueDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button type="submit" className="btn btn-primary float-right" >
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/booksIssued");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        </React.Fragment> 
        );
    }
}

export default BooksIssuedDetails;

