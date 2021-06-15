import React, { Component } from "react";
import BooksIssuedService from "../services/booksIssuedService";
import DashboardNav from "./dashboardnav";

class AddBooksIssued extends Component{
    state={
        booksIssued:{
            userId:"",
            issueId:"",
            issueDate:"",
            quantity:"",
            dueDate:"",
        
        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        BooksIssuedService.createBooks(this.state.booksIssuedlist).then((res)=>{
            this.props.history.push("booksIssued");

        });
    };
    handleChange=(event)=>{
        const booksIssued={...this.state.booksIssued};
        booksIssued[event.currentTarget.name]=event.currentTarget.value;
        this.setState({booksIssued});
    };
    render(){
        return(
        <React.Fragment>
           <DashboardNav/> 
            <div className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                    

                       <label htmlFor="issueDate" className="form-label">
                            IssueDate
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="yyyy-mm-dd"
                          minLength="0000-00-00"
                          id="issueDate"
                          name="issueDate"
                          value={this.state.booksIssued.issueDate}
                          onChange={this.handleChange}
                          required
                        />
                       <label htmlFor="quantity" className="form-label">
                            Quantity
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="yyyy-mm-dd"
                          minLength="0000-00-00"
                          id="quantity"
                          name="quantity"
                          value={this.state.booksIssued.quantity}
                          onChange={this.handleChange}
                          required
                        /> 
                        <label htmlFor="dueDate" className="form-label">
                            Due Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="yyyy-mm-dd"
                          minLength="0000-00-00"
                          id="dueDate"
                          name="dueDate"
                          value={this.state.booksIssued.dueDate}
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

export default AddBooksIssued;