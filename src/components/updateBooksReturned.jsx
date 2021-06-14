import React, { Component } from 'react';
import BooksReturnedService from '../services/booksReturnedService';
import DashboardNav from './dashboardnav';

class UpdateBooksReturned extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            returnedDate: '',
            delayedDays: '',
            penalty: '',
            penalty_Status: ''

        }
        this.changeReturnedDateHandler = this.changeReturnedDateHandler.bind(this);
        this.changeDelayedDaysHandler = this.changeDelayedDaysHandler.bind(this);
        this.changePenaltyHandler = this.changePenaltyHandler.bind(this);
        this.changePenalty_StatusHandler = this.changePenalty_StatusHandler.bind(this);
        this.updateBooksReturned = this.updateBooksReturned.bind(this);

    }

    componentDidMount() {
        BooksReturnedService.getById(this.state.id).then((res) => {
            let returned = res.data;
            this.setState({
                returnedDate: returned.returnedDate,
                delayedDays: returned.delayedDays,
                penalty: returned.penalty,
                penalty_Status: returned.penalty_Status

            });
        });
    }

    updateBooksReturned = (e) => {
        e.preventDefault();
        let returned = { returnedDate: this.state.returnedDate, delayedDays: this.state.delayedDays, penalty: this.state.penalty, penalty_Status: this.state.penalty_Status };
        console.log('returned => ' + JSON.stringify(returned));

        BooksReturnedService.updateReturnedBooks(this.state.id, returned).then((res) => {
            this.props.history.push(`/booksReturned`);
        });

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
                <DashboardNav />
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Returned Books</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.id}</h1>
                                    <div className="form-group">
                                        <label>returnedDate:</label>
                                        <input placeholder="returnedDate" name="returnedDate" className="form-control" value={this.state.returnedDate} onChange={this.changeReturnedDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>DelayedDays:</label>
                                        <input placeholder="DelayedDays" name="DelayedDays" className="form-control" value={this.state.delayedDays} onChange={this.changeDelayedDaysHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Penalty:</label>
                                        <input placeholder="Penalty" name="Penalty" className="form-control" value={this.state.penalty} onChange={this.changePenaltyHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Penalty_Status:</label>
                                        <input placeholder="Penalty_Status" name="Penalty_Status" className="form-control" value={this.state.penalty_Status} onChange={this.changePenalty_StatusHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateBooksReturned}> Save</button>
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

export default UpdateBooksReturned;