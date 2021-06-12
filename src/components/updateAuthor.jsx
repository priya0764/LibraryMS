import React, { Component } from 'react';
import AuthorService from '../services/authorService';

class UpdateAuthor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.match.params.authorId,
            firstName: '',
            lastName: '',
            emailId: '',
            mobileNumber: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);

    }

    componentDidMount() {
        AuthorService.getAuthorById(this.state.authorId).then((res) => {
            let author = res.data;
            this.setState({
                firstName: author.firstName,
                lastName: author.lastName,
                email: author.email,
                contactno: author.contactno

            });
        });
    }

    updateAuthor = (e) => {
        e.preventDefault();
        let author = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, contactno: this.state.contactno };
        console.log('author => ' + JSON.stringify(author));

        AuthorService.updateAuthor(author, this.state.authorId).then((res) => {
            this.props.history.push(`/author`);
        });

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changeMobileHandler = (event) => {
        this.setState({ contactno: event.target.value })
    }

    cancel() {
        this.props.history.push('/author');
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Author</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.authorId}</h1>
                                    <div className="form-group">
                                        <label>FirstName:</label>
                                        <input placeholder="firstname" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>LastName:</label>
                                        <input placeholder="lastname" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="Mobile" className="form-control" value={this.state.contactno} onChange={this.changeMobileHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateAuthor}> Save</button>
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

export default UpdateAuthor;