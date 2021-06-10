import React, { Component } from 'react';
import SuggestedBooksService from '../services/suggestedBooksService';


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
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View SuggestedBooks Details</h3>
                <div className="card bg-info text-dark">
                    <div className="card-body">
                        <h1>{this.props.match.params.id}</h1>
                        <div className="row">
                            <label><b>Title: </b></label>
                            <div>{this.state.suggestedBooks.title}</div>
                        </div>
                        <div className="row">
                            <label><b>Subject:</b> </label>
                            <div>{this.state.suggestedBooks.subject}</div>
                        </div>
                        <div className="row">
                            <label><b>Author: </b></label>
                            <div>{this.state.suggestedBooks.author}</div>
                        </div>
                        <div className="row">
                            <label><b>Publications: </b></label>
                            <div>{this.state.suggestedBooks.publications}</div>
                        </div>
                        <div className="row">
                            <label><b>Description: </b></label>
                            <div>{this.state.suggestedBooks.description}</div>
                        </div>
                        <div className="row">
                            <label><b>Suggested Date: </b></label>
                            <div>{this.state.suggestedBooks.suggested_date}</div>
                        </div>
                        <div className="row">
                            <label><b>Status: </b></label>
                            <div>{this.state.suggestedBooks.status}</div>
                        </div>
                      

                    </div>

                </div>
                </div>
            
        )
        
    }
}

export default ViewSuggestedBooks;