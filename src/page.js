import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {NavBar, Footer} from './commons'

export class Page extends Component{
    
    render(){
        //{this.props.match.params.id}
        return(
        <div className="container">
            <NavBar/>
            
            <div class="row">
              <div class="col-lg-2">
                  <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
                  
                  <h4>Title goes here</h4>
                  <SideBar />
                </div>
                <div class="col-lg-10">
                <h2>Title goes here</h2>
                <p>short description goes here</p>
              
              statistics
              </div>
              
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
        );
    }
}

class SideBar extends Component{
    
    render(){
        return(
                          <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Notices</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Gallery</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Allumni</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Suppliers</a>
  </li>
</ul>
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
                 
                  <input type="text" className="form-control mb-2" id="email" placeholder="Enter keyword here"  />
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

