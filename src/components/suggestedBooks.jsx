import React, { Component } from "react";
import SuggestedBooksService from "../services/suggestedBooksService";

class SuggestedBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestedBooks: []
        }
        this.addSuggestedBooks = this.addSuggestedBooks.bind(this);
        this.deleteSuggestedBooks= this.deleteSuggestedBooks.bind(this);
        this.viewSuggestedBooks = this.viewSuggestedBooks.bind(this);
        this.updateSuggestedBooks = this.updateSuggestedBooks.bind(this);


    }
    addSuggestedBooks() {
        this.props.history.push('/add-suggestedbooks');
    }

    viewSuggestedBooks(id) {
        this.props.history.push(`/view-suggestedbooks/${id}`);
    }

    updateSuggestedBooks(id) {
        this.props.history.push(`/update-suggestedbooks/${id}`);
    }

    deleteSuggestedBooks(id) {
        SuggestedBooksService.deleteSuggestedBooks(id).then(res => {
            this.setState({ suggestedBooks: this.state.suggestedBooks.filter(suggestedBooks =>suggestedBooks.id !== id) });
        });
    }
    componentDidMount() {
        SuggestedBooksService.getAllSuggestedBooks().then((res) => {
            this.setState({ suggestedBooks: res.data });
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Suggested Books List </h2>
                <div className="row">
                <button className="btn btn-info btn-large mb-2 ml-3" onClick={this.addSuggestedBooks}><i class="bi bi-plus-square"></i> Add</button>
                </div>
                <div className="row">
                    <table className="table table-sm table-striped table-bordered ">
                        <thead class="thead-dark">
                            <tr>
                            <th>Title</th>
                                <th>Subject</th>
                                <th>Author</th>
                                {/*<th>Publications</th>
                                <th>Description</th>
                                <th>Suggested Date</th>*/}
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.suggestedBooks.map(
                                    suggestedBooks =>
                                    <tr key={suggestedBooks.id}>
                                    <td> {suggestedBooks.title}</td>
                                    <td> {suggestedBooks.subject}</td>
                                    <td> {suggestedBooks.author}</td>
                                    {/*<td> {suggestedBooks.publications}</td>
                                    <td> {suggestedBooks.description}</td>
                                <td> {suggestedBooks.suggested_date}</td>*/}
                                    <td> {suggestedBooks.status} </td>
                                  

                                            <td>
                                                <button onClick={() => this.deleteSuggestedBooks(suggestedBooks.id)} className="btn btn-danger mt-1 ml-2" data-toggle="tooltip" data-placement="top" title="Delete"><i class="bi bi-trash-fill"></i></button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewSuggestedBooks(suggestedBooks.id)} className="btn btn-primary mt-1"data-toggle="tooltip" data-placement="top" title="View"><i class="bi bi-eye-fill"></i></button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.updateSuggestedBooks(suggestedBooks.id)} className="btn btn-warning mt-1" data-toggle="tooltip" data-placement="top" title="Update"><i class="bi bi-pencil-square"></i></button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SuggestedBooks;
