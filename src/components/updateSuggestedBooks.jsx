import React, { Component } from 'react';
import SuggestedBooksService from '../services/suggestedBooksService';
import DashboardNav from './dashboardnav';

class UpdateSuggestedBooks extends Component {
        constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            subject: '',
            author: '',
            publications: '',
            description: '',
            suggested_date: '',
            status: ''

        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changePublicationsHandler = this.changePublicationsHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeSuggested_DateHandler = this.changeSuggested_DateHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateSuggestedBooks = this.updateSuggestedBooks.bind(this);
       

    }
    componentDidMount() {
        SuggestedBooksService.getSuggestedBooksById(this.state.id).then((res) => {
            let suggestedBooks = res.data;
            this.setState({
                title: suggestedBooks.title,
                subject:  suggestedBooks.subject,
                author:  suggestedBooks.author,
                publications:  suggestedBooks.publications,
                description:  suggestedBooks.description,
                suggested_date:  suggestedBooks.suggested_date,
                status:  suggestedBooks.status
               

            });
        });
    }

    updateSuggestedBooks = (e) => {
        e.preventDefault();
        let suggestedBooks = { id: this.state.id, title: this.state.title, subject: this.state.subject, author: this.state.author, publications: this.state.publications, description: this.state.description, suggested_date: this.state.suggested_date, status: this.state.status };
        console.log('suggestedBooks => ' + JSON.stringify(suggestedBooks));

        SuggestedBooksService.updateSuggestedBooks(suggestedBooks,this.state.id).then(res => {
            this.props.history.push(`/suggestedbooks`);
        });

    }
   
    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value })
    }

    changeSubjectHandler = (event) => {
        this.setState({ subject: event.target.value })
    }

    changeAuthorHandler = (event) => {
        this.setState({ author: event.target.value })
    }
    changePublicationsHandler = (event) => {
        this.setState({ publications: event.target.value })
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value })
    }
    changeSuggested_DateHandler = (event) => {
        this.setState({ suggested_date: event.target.value })
    }
    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value })
    }

    cancel() {
        this.props.history.push('/suggestedbooks');
    }



    render() {
        return (
            <div>
                <DashboardNav />
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Suggested Books</h3>
                            <div className="card-body">
                                <form>
                                <h1>{this.props.match.params.id}</h1>
                                    <div className="form-group">
                                        <label>Id:</label>
                                        <input placeholder="Id" name="Id" className="form-control" value={this.state.id} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Title:</label>
                                        <input placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject:</label>
                                        <input placeholder="subject" name="subject" className="form-control" value={this.state.subject} onChange={this.changeSubjectHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Author:</label>
                                        <input placeholder="author" name="author" className="form-control" value={this.state.author} onChange={this.changeAuthorHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Publications:</label>
                                        <input placeholder="publications" name="publications" className="form-control" value={this.state.publications} onChange={this.changePublicationsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Suggested Date:</label>
                                        <input placeholder="suggested date" name="" className="form-control" value={this.state.suggested_date} onChange={this.changeSuggested_DateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Status:</label>
                                        <input placeholder="status" name="status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>
                                    
                                    <button className="btn btn-success" onClick={this.updateSuggestedBooks}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UpdateSuggestedBooks;