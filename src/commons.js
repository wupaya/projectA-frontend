import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {Page} from './page';
import {Dashboard} from './dashboard';

export class Layout extends Component {
    
    render(){
        var service = this.props.match.params.id
        var view = <Page />;
        if(service == "dashboard"){
           var view = <Dashboard />;
        }
        
        return(
        <div className="container">
            <NavBar/>
            {view}
            <div className="row">
                <Footer />
            </div>
        </div>
        );
    }
}

export class NavBar extends Component{

    render(){
        
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link class="navbar-brand" to="#">IMS</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button class="btn btn-outline-light my-2 my-sm-0" onClick={()=>{this.props.onLogOut();console.log("logout");}}>Logout</button>
    </div>
  </nav>
        );
    }
}


export class Footer extends Component{
    render(){
         return (
            <div class="container text-center fixed-bottom">
            <a href="#">About IMS Inc.</a><span> | </span>
            <a href="#">Contact</a><span> | </span>
            <a href="#">Career</a><span> | </span>
            <a href="#">Policy</a>
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
                 
                  <input type="text" className="form-control mb-2" id="keyword" placeholder="Enter keyword here"  />
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
