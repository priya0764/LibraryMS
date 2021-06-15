import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./loginNavbar";
import Footer from "./footer";

class ContactPage extends Component {
  state={
    contact:{
        name:'',
        email:'',
        subject:'',
    }
}
handleChange=(event)=>{
    event.preventDefault();
    const contact=this.state.contact;
    contact[event.currentTarget.name]=event.currentTarget.value;
    this.setState({contact});
}
handleSubmit=()=>{
    this.props.history.push("/thankyou-Page");
}

  render() {
    return (
      <React.Fragment>
        <LoginNavbar />

        <section class="main-contactus">
          <div class="container">
            <div class="contact-form">
              <div class="contact-image">
                <img
                  src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/images/contact.png"
                  alt=""
                  style={{ marginLeft: "500px" }}
                />
              </div>
              <form onSubmit={this.handleSubmit}>
                <h3>Drop Us a Message</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control "
                        placeholder="Your Name *"
                        value={this.state.contact.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="email"
                        class="form-control "
                        placeholder="Your Email *"
                        value={this.state.contact.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        class="form-control "
                        placeholder="Your Subject *"
                        value={this.state.contact.subject}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div class="form-group">
                     
                        <input
                          type="submit"
                          name="btnSubmit"
                          class="btnContact"
                          value="Send Message"
                        />
                      
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control "
                        rows="6"
                        placeholder="Your Message *"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;
