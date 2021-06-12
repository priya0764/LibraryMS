import React, { Component } from 'react';
import BooksReturnedService from '../services/booksReturnedService';
class AddBooksReturned extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            returnedDate: '',
            delayedDays: '',
            penalty: '',
            penalty_Status: ''

        }
        this.changeReturnedDateHandler = this.changeReturnedDateHandler.bind(this);
        this.changeDelayedDaysHandler = this.changeDelayedDaysHandler.bind(this);
        this.changePenaltyHandler = this.changePenaltyHandler.bind(this);
        this.changePenalty_StatusHandler = this.changePenalty_StatusHandler.bind(this);
        this.saveBooksReturned = this.saveBooksReturned.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }

    saveBooksReturned = (e) => {
        e.preventDefault();
        let returned = { id: this.state.id, returnedDate: this.state.returnedDate, delayedDays: this.state.delayedDays, penalty: this.state.penalty, penalty_Status: this.state.penalty_Status };
        console.log('returnedBooks => ' + JSON.stringify(returned));

        BooksReturnedService.addReturnedBooks(returned).then(res => {
            this.props.history.push(`/booksReturned`);
        });

    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value })
    }

    changeReturnedDateHandler = (event) => {
        this.setState({ returnedDate: event.target.value })
    }

    changeDelayedDaysHandler = (event) => {
        this.setState({ delayedDays: event.target.value })
    }

    changePenaltyHandler = (event) => {
        this.setState({ penalty: event.target.value })
    }

    changePenalty_StatusHandler = (event) => {
        this.setState({ penalty_Status: event.target.value })
    }

    cancel() {
        this.props.history.push('/booksReturned');
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add ReturnedBooks</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>id:</label>
                                        <input placeholder="Id" name="id" className="form-control" value={this.state.id} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Returned Date:</label>
                                        <input placeholder="returnedDate" name="returnedDate" className="form-control" value={this.state.returnedDate} onChange={this.changeReturnedDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Delayed Days:</label>
                                        <input placeholder="DelayedDays" name="DelayedDays" className="form-control" value={this.state.delayedDays} onChange={this.changeDelayedDaysHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Penalty:</label>
                                        <input placeholder="Penalty" name="Penalty" className="form-control" value={this.state.penalty} onChange={this.changePenaltyHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Penalty Status:</label>
                                        <input placeholder="penalty_Status" name="penalty_Status" className="form-control" value={this.state.penalty_Status} onChange={this.changePenalty_StatusHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveBooksReturned}> Save</button>
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

export default AddBooksReturned;