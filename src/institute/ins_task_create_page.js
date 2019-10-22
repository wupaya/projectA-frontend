
import React, {Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

class CreateInstitutePageForm extends Component{

    cancel(e){
        e.preventDefault();
        this.props.onCancel();
    }

    create_page(e){
          e.preventDefault();
          var auth_token = Cookies.get("token");
           const url = 'http://13.232.5.188/api/public_page/';
          //const url ='http://localhost:8000/public_page/';

          $.ajax({
          url: url,
          beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Token " + auth_token);
            },
          dataType: 'json',
          //cache: false,
          type:'POST',
          contentType: 'application/json',
          data: JSON.stringify({ "page_title":"begum rokeya university, rangpur 2", "type_of_institute": "university", "founding_date":"2008", "address_district":"rangpur", "address_upozila":"sadar", "no_of_stakeholder":"20", "description":"this is a test page" }),
          success: function(data) {
            //this.setState({data: data});
            //this.setState({loggedin: true});
            //this.onlogin(data);
            console.log("on log in");
            this.props.onCreatePage(data);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            this.props.onCreatePage(err);
            //console.log(status);
            //console.log(err.toString());
          }.bind(this)
        });
	  }

    render(){
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/t/" +"ins_task_create_page"}>Create Page</BreadcrumbsItem>
            <form>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Institute Name</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Your institute name here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="institute address here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Founded Year</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="When it is founded."/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Institute description here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Your Designation</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Commettee Member/Teacher/Student/Stuff"/>
                </div>
              </div>
              <button className="btn btn-primary"  type="submit" onClick={(e)=> this.create_page(e)}>Create Page</button> <span></span>
              <button className="btn btn-primary"  type="submit" onClick={(e)=>this.cancel(e)}>Cancel</button>
                </form>
            </div>
        );
    }
}


export default CreateInstitutePageForm;