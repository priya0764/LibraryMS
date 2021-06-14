import React, { Component } from "react";
import {Link} from "react-router-dom";
import LoginNavbar from "./loginNavbar";
import Footer from "./footer";

class ContactPage extends Component{
    render() {
        return(
            <React.Fragment>
            <LoginNavbar />

            <section class="main-contactus">
    <div class="container">
        <div class="contact-form">
            <div class="contact-image">
                <img src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/images/contact.png" alt="" style={{marginLeft : "500px" }}/>
            </div>
            <form method="POST">
                <h3>Drop Us a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control " required placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control " placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" class="form-control " placeholder="Your Subject *" value="" />
                        </div>
                        <div class="form-group">
                        <Link to="/thankyou-Page"> 
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message"  />
                            </Link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="message" class="form-control " rows="6" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
            <Footer />
            </React.Fragment>
        )
    }
}

export default ContactPage;
