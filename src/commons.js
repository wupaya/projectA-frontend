import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { withRouter} from "react-router-dom";
//import {Page} from './page';
import {Dashboard} from './dashboard';

export class Layout extends Component {

    render(){
      const Page = React.lazy(() => import('./institute/'+ 'ins_page'));
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

export class NavBar_org extends Component{
  constructor(props){
    super(props);
    this.login_button_handler = this.login_button_handler.bind(this);
  }
  state={};
  componentDidMount() {
      //check if cookie available
      let {isLoggedIn} = this.props;
      if(isLoggedIn){
        this.setState({isLoggedIn:true});
      }
      var session_token = Cookies.get('token')

      if(session_token!=null)
      {
          this.setState({
              isLoggedIn:true
          });

      }else{
          this.setState({
              isLoggedIn:false
          });
      }
  }

  gotodashborad(){
      this.props.history.push("/private");
  }

  login_button_handler(){
    if(!this.state.isLoggedIn){
      this.setState({isLoggedIn:false});
      this.props.history.push("/");
    }else{
      this.setState({isLoggedIn:false});
      Cookies.remove('token');
      this.props.onLogOut();
    }
  }
    render(){

        var logoutButtonText = "Logout";
        var dashboard_button = <button class="btn btn-outline-light my-2 my-sm-0" onClick={()=>{this.gotodashborad();}}>Console</button>;
        if(!this.state.isLoggedIn){
          logoutButtonText = "Login";
          dashboard_button = "";
        }
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary nav-tabs">
    <Link class="navbar-brand active" to="#">IMS</Link>
    <ul class="nav nav-pills">
  <li class="active"><a href="#tab-1" data-toggle="tab">Tab 1</a></li>
  </ul>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">

      <form class="form-inline mx-auto">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      {dashboard_button}
      <button class="btn btn-outline-light my-2 my-sm-0" onClick={()=>{this.login_button_handler();}}>{logoutButtonText}</button>
    </div>
  </nav>
        );
    }
}

export const NavBar = withRouter(NavBar_org);

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

export class RecentlyVisited extends Component{
    render(){
         return (
            <div>
            <p>Recently Visited</p>
            <ol>
            <li><Link to="/public/begum_rokey_univ">Begum Rokeya University</Link></li>
            <li><a href="#">BUET</a></li>
            <li><a href="#">Dhaka University</a></li>
            <li><a href="#">Rangpur Govt. College</a></li>
            </ol>
            </div>
         );
    }
}


class BottonNavigation extends Component{
    constructor(props){
       super(props);
       this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack(){
        this.props.history.go(-1);
    }


       render(){
           var message = "Go Back";
           return(
                <button onClick={this.goBack} className="">Go Back</button>
           );
       }
}
//export default withRouter(BottonNavigation);
const ShowTheLocationWithRouter = withRouter(BottonNavigation);
