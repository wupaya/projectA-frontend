import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { Dashboard } from './dashboard';
import { ThroughProvider } from 'react-through';
import { withRouter } from 'react-router-dom';
import { NavBar, Footer, RecentlyVisited } from './lib/commons';


const DEBUG = true;

class App extends Component {
  render() {
    return (
      <ThroughProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Switch>
              <Route path="/:pageid?" component={Home} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThroughProvider>
    );
  }
}

class Home extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: [
    ],
    show_login_form: true,
    show_signup_form: false,
    show_signup_button: true,
    show_login_button: false
  };
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    //check if cookie available
    var session_token = Cookies.get('token')

    if (session_token != null) {
      this.setState({
        isLoggedIn: true
      });

    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  signup_toggle() {
    if (this.state.show_signup_form)
      this.setState({
        show_login_form: true,
        show_signup_form: false,
        show_signup_button: true,
        show_login_button: false
      });
    else
      this.setState({
        show_login_form: false,
        show_signup_form: true,
        show_signup_button: false,
        show_login_button: true
      });
  }

  onLoginOrSignup(data) {
    Cookies.set('token', data.data.token, { expires: 1 });
    this.setState({
      show_login_form: false,
      show_signup_form: false,
      show_signup_button: false,
      show_login_button: false,
      data: data,
      isLoggedIn: true
    });
  }

  //handle logout from dashborad
  onLogoutHandler(data) {
    this.setState({ isLoggedIn: false });
  }

  if(DEBUG) {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const Search = React.lazy(() => import('./lib/' + 'search'));
    const SignUp = React.lazy(() => import('./lib/' + 'signup'));
    
    var notLoggedIn = !this.state.isLoggedIn;
    var login_form = this.state.show_login_form && notLoggedIn ? <Login value="some value" onlogin={this.onLoginOrSignup.bind(this)} /> : "";
    var signup_form = this.state.show_signup_form && notLoggedIn ? <SignUp onsignup={this.onLoginOrSignup.bind(this)} /> : "";

    var sign_login_button_text = this.state.show_login_form ? "Join IMS" : "Log in";
    var login_signup_button = this.state.isLoggedIn ? "" : <a href="#" onClick={(e) => this.signup_toggle(e)} >{sign_login_button_text}</a>;

    let { pageid } = this.props.match.params;

    if (pageid == null && !this.state.isLoggedIn) {
      return (
        <div>
          <div className="jumbotron">
            <h1>Welcome to IMS</h1>
            <p>IMS helps to find and manage your information</p>
          </div>
          <div className="row row-no-gutters">
            <div className="col-sm-4">
              <RecentlyVisited />
              <p>To find information enter keyword below</p>
              {<Search />}
            </div>
            <div className="col-sm-8">
              
              {login_form}
              {signup_form}
              <hr />
              {login_signup_button}
            </div>
          </div>
          <Footer />
      </div>
      );
    }

    const DashboradWithRouter = withRouter(Dashboard);
    return (
      <div className="container">
        <NavBar onLogOut={this.onLogoutHandler.bind(this)} isLoggedIn={this.state.isLoggedIn} />
        <DashboradWithRouter onLogOut={this.onLogoutHandler.bind(this)} />
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}


class Login extends Component {

  baz(e) {
    e.preventDefault();
    this.setState({ login_in_progress: true });
    console.log($("#email").val());
    const url = 'http://13.232.5.188/api/login/';
    //const url = 'http://localhost:8000/login/';

    $.ajax({
      url: url,
      dataType: 'json',
      //cache: false,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ "email": $("#email").val(), "password": $("#password").val() }),
      success: function (data) {
        //this.setState({data: data});
        //this.setState({loggedin: true});
        //this.onlogin(data);
        console.log("on log in");
        this.props.onlogin(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        //console.log(status);
        //console.log(err.toString());
      }.bind(this)
    });
  }
  constructor(props) {

    super(props);
    //his.onlogin_demo = this.onlogin_demo.bind(this);
    this.state = {
      value: "some arbitary value",
    };
    this.state = {
      data: {},
      login_in_progress: false
    };

  }

  // onlogin_demo(data){
  // this.props.onlogin(data);
  // }

  render() {
    const { data } = this.state
    const { login_in_progress } = this.state

    var login_form = <form>
      <div className="form-row align-items-center">
        <div className="col-auto">

          <input type="email" className="form-control mb-2" id="email" placeholder="someone@somewhere.com" />
        </div>
        <div className="col-auto">

          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">**</div>
            </div>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
        </div>
        <div className="col-auto">
          <button onClick={(e) => this.baz(e)} type="submit" className="btn btn-primary mb-2">Login</button>

        </div>
      </div>
    </form>
    var loader_text = login_in_progress ? "Loading..." : ""
    return (
      <div>
        <p>To manage information login to your account</p>
        {login_form}
        {loader_text}
      </div>
    );
  }
}

export default App;
