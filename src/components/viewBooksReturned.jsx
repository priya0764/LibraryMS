import React, { Component } from 'react';
import BooksReturnedService from '../services/booksReturnedService';
import "./raghu.css";
import images from './pictures/images.jpg';


class ViewBooksReturned extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            returned: {}
        }
    }

    componentDidMount() {
        BooksReturnedService.getById(this.state.id).then(res => {
            this.setState({ returned: res.data });
        })
    }
    render() {
        return (

            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Returned Books Details</h3>

                <div className="card  text-dark" class="co">
                    <div className="card-body">
                        <h1>{this.props.match.params.id}</h1>
                        <div className="row">
                            <label><b>Returned Date: </b></label>
                            <div>{this.state.returned.returnedDate}</div>
                        </div>
                        <div className="row">
                            <label><b>Delayed Days:</b> </label>
                            <div>{this.state.returned.delayedDays}</div>
                        </div>
                        <div className="row">
                            <label><b>Penalty </b></label>
                            <div>{this.state.returned.penalty}</div>
                        </div>
                        <div className="row">
                            <label><b>Penalty Status</b></label>
                            <div>{this.state.returned.penalty_Status}</div>
                        </div>

                    </div>

                </div>
                <p> The information includes the identification number of the returnedBook, number of delayed days,
                    the date in which it has been returned,penalty amount to be paid and penalty status.</p>
                <img src={images} alt="hi" width="150px" class="center"></img>


            </div>
        )
    }
}

export default ViewBooksReturned;