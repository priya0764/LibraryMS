import React, { Component } from 'react';
import PublisherService from '../services/publisherService';
class AddPublisher extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publisherId: '',
            publisherName: '',
            contactno: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            pincode: ''

        }
        this.changePublisherNameHandler = this.changePublisherNameHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddress1Handler = this.changeAddress1Handler.bind(this);
        this.changeAddress2Handler = this.changeAddress2Handler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
        this.savePublisher = this.savePublisher.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }

    savePublisher = (e) => {
        e.preventDefault();
        let publishers = { publisherId: this.state.publisherId, publisherName: this.state.publisherName, contactno: this.state.contactno, email: this.state.email, address1: this.state.address1, address2: this.state.address2, city: this.state.city, state: this.state.state, pincode: this.state.pincode };
        console.log('publishers => ' + JSON.stringify(publishers));

        PublisherService.addPublisher(publishers).then(res => {
            this.props.history.push(`/publisher`);
        });

    }

    changeIdHandler = (event) => {
        this.setState({ publisherId: event.target.value })
    }

    changePublisherNameHandler = (event) => {
        this.setState({ publisherName: event.target.value })
    }

    changeContactNoHandler = (event) => {
        this.setState({ contactno: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    changeAddress1Handler = (event) => {
        this.setState({ address1: event.target.value })
    }
    changeAddress2Handler = (event) => {
        this.setState({ address2: event.target.value })
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value })
    }
    changeStateHandler = (event) => {
        this.setState({ state: event.target.value })
    }
    changePincodeHandler = (event) => {
        this.setState({ pincode: event.target.value })
    }

    cancel() {
        this.props.history.push('/publisher');
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Publisher</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>PublisherId:</label>
                                        <input placeholder="Id" name="PublisherId" className="form-control" value={this.state.publisherId} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>PublisherName:</label>
                                        <input placeholder="publishername" name="publisherName" className="form-control" value={this.state.publisherName} onChange={this.changePublisherNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>ContactNo:</label>
                                        <input placeholder="contactno" name="contactno" className="form-control" value={this.state.contactno} onChange={this.changeContactNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="email" name="Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address1:</label>
                                        <input placeholder="address1" name="address1" className="form-control" value={this.state.address1} onChange={this.changeAddress1Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address2:</label>
                                        <input placeholder="address2" name="address2" className="form-control" value={this.state.address2} onChange={this.changeAddress2Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label>City:</label>
                                        <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>State:</label>
                                        <input placeholder="state" name="state" className="form-control" value={this.state.state} onChange={this.changeStateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode:</label>
                                        <input placeholder="pincode" name="pincode" className="form-control" value={this.state.pincode} onChange={this.changePincodeHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.savePublisher}> Save</button>
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

export default AddPublisher;