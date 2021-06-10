import React,{Component} from 'react'
import ReaderService from '../services/readerService'
import { Joi } from 'joi-browser';


class AddReader extends Component{
    state={
        reader:{
            id:'',
            firstName:'',
            lastName:'',
            mobileNo:'',
            email:'',
            password:'',
        },
  };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        ReaderService.register(this.state.reader).then((res) => {
          this.props.history.push("/reader");
        });
      };
      handleChange = (event) => {
        const reader = {...this.state.reader };
        // dynamically handling event changes
        reader[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ reader });
      };
    render(){
        return(
            <div className='w-50 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                <div className='mb-1'>
                        <label htmlFor='Id' className='form-label'>Id</label>
                        <input type='text' className='form-control'  id='id' name='id' value={this.state.reader.id} onChange={this.handleChange} required  />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='FirstName' className='form-label'>First Name</label>
                        <input type='text' className='form-control' minLength='3' id='firstName' name='firstName' value={this.state.reader.firstName} onChange={this.handleChange} required />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='LastName' className='form-label'>Last Name</label>
                        <input type='text' className='form-control' minLength='1' id='lastName' name='lastName' value={this.state.reader.lastName} onChange={this.handleChange} required />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='MobileNo' className='form-label'>Mobile No</label>
                        <input type='text' className='form-control' minLength='10' maxLength='10' id='mobileNo' name='mobileNo' value={this.state.reader.mobileNo} onChange={this.handleChange}required  />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type='text' className='form-control'  id='email' name='email' value={this.state.reader.email} onChange={this.handleChange} required />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor='Password' className='form-label'>Password</label>
                        <input type='password' className='form-control'minLength='5'  id='password' name='password' value={this.state.reader.password} onChange={this.handleChange} required  />
                    </div>
                    <button type="submit" className="btn btn-primary ">
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default AddReader