import React, { Component } from 'react';
import SuggestedBooksService from '../services/suggestedBooksService';
import DashboardNav from "./dashboardnav";


class ViewSuggestedBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            suggestedBooks: {}
        }
    }

    componentDidMount() {
        SuggestedBooksService.getSuggestedBooksById(this.state.id).then(res => {
            this.setState({ suggestedBooks: res.data });
        })
    }
    render() {
        return (
            <React.Fragment>
                <DashboardNav />
            <div className="card col-md-6 offset-md-3" style={{marginTop:50}}>
                <h3 className="text-center" > View SuggestedBooks Details</h3>
                <div className="card bg-dark text-white">
                    <div className="card-body" >
                        <h1>{this.props.match.params.id}</h1>
                      
                        <div className="row">
                            <label><b>Title: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.title}</div>
                        </div>
                        <div className="row">
                            <label><b>Subject:</b> </label>
                            <div>&nbsp;{this.state.suggestedBooks.subject}</div>
                        </div>
                        <div className="row">
                            <label><b>Author: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.author}</div>
                        </div>
                        <div className="row">
                            <label><b>Publications: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.publications}</div>
                        </div>
                        <div className="row">
                            <label><b>Description: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.description}</div>
                        </div>
                        <div className="row">
                            <label><b>Suggested Date: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.suggested_date}</div>
                        </div>
                        <div className="row">
                            <label><b>Status: </b></label>
                            <div>&nbsp;{this.state.suggestedBooks.status}</div>
                        </div>                                     
                    </div>
                </div>
                <div><a class="btn btn-primary" href="\suggestedbooks" role="button">Back</a></div>
                </div>
                </React.Fragment>
            
        )
        
    }
}

export default ViewSuggestedBooks;