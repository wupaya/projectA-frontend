import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter} from "react-router-dom";
import {NavBar, Footer} from './commons'

class Page1 extends Component{

    onLogOutHangle(){
      Cookies.remove("token");
    }

    render(){
        //{this.props.match.params.id}
        return(
        <div className="container">
            <NavBar onLogOut={this.onLogOutHangle.bind(this)} />

            <div class="row">
              <div class="col-lg-2">
                  <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
                  <SideBar />
                </div>
                <div class="col-lg-10">
                <h2>Department of Computer Science and Engineering</h2>
                <p>One of the Departments at Begum Rokeya University, Rangpur</p>
                <hr />
                <h5>Quick Overview</h5>
                <p>It is founded in 2008. At present 250 students are enrolled in this discipline. There are 10 world class faculty memebers.</p>
                <hr />
                <h5>Latest Events</h5>
                <ul>
                  <li>News: CSE BRUR started using IMS system.</li>
                  <li>Event: Inter batch programming contest on sunday, 9th oct.</li>
                  <li>Circular: Admission is open</li>
                  <li>Notice: New Policy for Scholarship.</li>
                </ul>
                <hr />
                <h5>Our Achivements</h5>
              </div>

            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
        );
    }
}

const Page = withRouter(Page1);
export {Page};
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
