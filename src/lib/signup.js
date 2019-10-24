import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, BrowserRouter } from "react-router-dom";
import {ThroughProvider} from 'react-through';
import {withRouter} from 'react-router-dom';

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            show_signup : true
        }
    }

    signup(e){
        e.preventDefault();
        const url =
          'http://13.232.5.188/api/register/'

          $.ajax({
          url: url,
          dataType: 'json',
          //cache: false,
          type:'POST',
          contentType: 'application/json',
          data: JSON.stringify( { "email": $("#email").val(), "password": $("#password").val(), "name": $("#name").val(), "phone_no":$("#phone_no").val() }),
          success: function(data) {
            //this.setState({data: data});
            //this.setState({loggedin: true});
            //this.onlogin(data);
            console.log(data);
            this.props.onsignup(data)
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            //console.log(status);
            //console.log(err.toString());
          }.bind(this)
        });
    }

    render(){
        const {data} = this.state;
        var signup_form = <form>

              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Your name here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-6">
                  <input type="email" className="form-control" id="email" placeholder="someone@somewhere.com"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-6">
                  <input type="password" className="form-control" id="password" placeholder="******"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="phone_no" placeholder="0145866684"/>
                </div>
              </div>
              <button className="btn btn-primary" onClick={(e) => this.signup(e)} type="submit">Sign Up</button>
            </form>;
        return (
        <div>
             <p>Click signup button to create account if you have no account yet. It's free.</p>
        {signup_form}
        </div>
        );
    }
}

export default SignUp;