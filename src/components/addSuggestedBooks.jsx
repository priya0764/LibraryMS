import React, { Component } from 'react';
import SuggestedBooksService from '../services/suggestedBooksService';
class AddSuggestedBooks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
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
        this.saveSuggestedBooks = this.saveSuggestedBooks.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);

    }

    saveSuggestedBooks = (e) => {
        e.preventDefault();
        let suggestedBooks = { id: this.state.id, title: this.state.title, subject: this.state.subject, author: this.state.author, publications: this.state.publications, description: this.state.description, suggested_date: this.state.suggested_date, status: this.state.status };
        console.log('suggestedBooks => ' + JSON.stringify(suggestedBooks));

        SuggestedBooksService.addSuggestedBooks(suggestedBooks).then(res => {
            this.props.history.push(`/suggestedbooks`);
        });

    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value })
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
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Suggested Books</h3>
                            <div className="card-body">
                                <form>
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
                                        <input placeholder="yyyy-mm-dd" name="" className="form-control" value={this.state.suggested_date} onChange={this.changeSuggested_DateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Status:</label>
                                        <input placeholder="status" name="status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveSuggestedBooks}> Save</button>
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

export default AddSuggestedBooks;