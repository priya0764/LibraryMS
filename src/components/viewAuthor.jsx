import React, { Component } from 'react';
import AuthorService from '../services/authorService';
import DashboardNav from './dashboardnav';
import download from './pictures/download.png';



class ViewAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.match.params.authorId,
            author: {}
        }
    }

    componentDidMount() {
        AuthorService.getAuthorById(this.state.authorId).then(res => {
            this.setState({ author: res.data });
        })
    }
    render() {
        return (
            <React.Fragment>
                <DashboardNav />
            <div className="card col-md-6 offset-md-3">
                
                <h3 className="text-center"> View Author Details</h3>
                <div className="card text-dark" class="co">
                    <div className="card-body">
                        <h1>{this.props.match.params.authorId}</h1>
                        <div className="row">
                            <label><b>Author First Name: </b></label>
                            <div>{this.state.author.firstName}</div>
                        </div>
                        <div className="row">
                            <label><b>Author Last Name:</b> </label>
                            <div>{this.state.author.lastName}</div>
                        </div>
                        <div className="row">
                            <label><b>Author emailId: </b></label>
                            <div>{this.state.author.email}</div>
                        </div>
                        <div className="row">
                            <label><b>Author Mobile No: </b></label>
                            <div>{this.state.author.contactno}</div>
                        </div>
                    </div>
                </div>
                
                <p> The information includes the author's unique identifier number,full name and contact details such
                as emailId and moblineNumber.</p>
                <img src={download} width="150px" alt="bye" class="center"></img>
                
<div><a class="btn btn-primary" href="\author" role="button">Back</a></div>

            </div>
            </React.Fragment>
            
        )
    }
}

export default ViewAuthor;