import React, { Component }from "react";
import AddressService from "../services/addressService";
import DashboardNav from "./dashboardnav";

class AddressDetails extends Component{
    state = {
        addressList: {
            addressId:"",
            address1:"",
            address2:"",
            city:"",
            state:"",
            pincode:"",
        },
     };
    componentDidMount(){
        AddressService.getAddressById(this.props.match.params.id).then((res)=>
         this.setState({addressList:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const addressList=this.state.addressList;
        addressList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ addressList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.addressList);
        AddressService.updateAddress(
            this.props.match.params.id,
            this.state.addressList
            
        ).then((res)=>{
            this.props.history.push("/address");
        });
    };
    render(){
        return(
           <React.Fragment>
           <DashboardNav/>
            <div>

              <form onSubmit={this.handleSubmit} className="w-50 mx-auto" style={{minHeight:757.08, textAlign:"left"}}>

                  <h1>{this.props.match.params.id}</h1>
                   <div className="mb-3">
                     <label htmlFor="addressId" className="form-label">
                          AddressId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressId"
                        name="addressId"
                        value={this.state.addressList.addressId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="address1" className="form-label">
                          Address1
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        name="address1"
                        value={this.state.addressList.address1}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="address2" className="form-label">
                          Address2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        name="address2"
                        value={this.state.addressList.address2}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="city" className="form-label">
                          City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={this.state.addressList.city}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="state" className="form-label">
                          State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        value={this.state.addressList.state}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="pincode" className="form-label">
                          Pincode
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        value={this.state.addressList.pincode}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button type="submit" className="btn btn-primary float-right" onClick={this.handleSubmit}>
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/address");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        </React.Fragment>   
        );
    }
}

export default AddressDetails;

