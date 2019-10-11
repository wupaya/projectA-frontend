import React, {Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';

class Welcome extends Component{
    state ={show_page_create_form:false, message:"Create a page",isLoggedIn:true}

    toggle_page_create(){
        this.setState({show_page_create_form:true, message: "Enter the required information."});
    }
    onCancelHandle(){
        this.setState({show_page_create_form:false});
    }

    onPageCreateHandler(data){
        this.setState({pageCreateResponse:data});
    }

    onCreatePageHandle(data){
        this.setState({show_page_create_form:false,
        message:"Page Created successfully"});
    }
    render(){
        var button_text = this.state.show_page_create_form ? "" : <button  onClick={this.toggle_page_create.bind(this)}>Create Page</button>;
        var page_create_form = this.state.show_page_create_form ? <CreateInstitutePageForm onCancel={this.onCancelHandle.bind(this)} onCreatePage={this.onCreatePageHandle.bind(this)}/> : "";
        let {associated} =  this.props;
        console.log(associated);
        var welcome = <div>
            <p>You are not associated with any institute yet.</p>
            <hr />
            <p>If you are invited please enter the code in the following box.</p>
            <Search />
            <hr />
            <p>Be the first to send join request to your institute</p>
                <Search />
                <hr />
            <p>If you don't find your institute be the first to create.</p>

            {button_text}
            {page_create_form}
        </div>;

        var welcome_back = <div>
            <p>Your associated institutes</p>
            <hr />
            <ul>
            {
             associated.map((entry, index) => {
                return <li key={index}><Link to={{ pathname: "/private/service/eduman/"+entry}}>{entry}</Link></li>
             })
            }
            </ul>
        </div>;


        var view = associated.length > 0 ? welcome_back : welcome;

        return(
        <div>{view}</div>
        );
    }
}

export default Welcome;
class ServiceShortcut extends Component{
    render(){
        return(
            <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                <h5 class="card-title">EDUMAN</h5>
                <h6 class="card-subtitle mb-2 text-muted">Educational Institute Manager</h6>
                <p class="card-text">If you are associated with any educational institute, this tool will help you to manage your operations.</p>
                <Link to="/private/service/eduman" class="card-link">Get started</Link>
              </div>
            </div>
        );
    }
}



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
class Search extends Component{

    baz(e){
         e.preventDefault();
	  }
    constructor(props){

        super(props);
        //his.onlogin_demo = this.onlogin_demo.bind(this);
        this.state = {
            value:"some arbitary value",
        };
        this.state = {
            data: {},
            login_in_progress:false
        };

    }

    // onlogin_demo(data){
        // this.props.onlogin(data);
    // }

    render(){
        const { data } = this.state
        const { login_in_progress } = this.state

        var login_form =             <form>
              <div className="form-row align-items-center">
                <div className="col-auto">

                  <input type="text" className="form-control mb-2" id="key" placeholder="Enter your institute name"  />
                </div>


                <div className="col-auto">
                  <button onClick={(e) => this.baz(e)} type="submit" className="btn btn-primary mb-2">Find</button>

                </div>
              </div>
            </form>
        var loader_text = login_in_progress ? "Loading..." : ""
        return (
            <div>
            {login_form}
            {loader_text}
            </div>
        );
    }
}
