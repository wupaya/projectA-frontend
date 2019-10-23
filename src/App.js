import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, BrowserRouter } from "react-router-dom";
import {Footer, RecentlyVisited} from './lib/commons';
import {Dashboard} from './dashboard';
import {ThroughProvider} from 'react-through';
import {withRouter} from 'react-router-dom';

const DEBUG = true;

class App extends Component {
    render(){
      return(
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

    constructor(props){
        super(props);
    }

    state = {
			data: [
			],
      show_login_form:true,
      show_signup_form:false,
      show_signup_button: true,
      show_login_button:false
		};
	    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        //check if cookie available
        var session_token = Cookies.get('token')

        if(session_token!=null)
        {
            this.setState({
                isLoggedIn:true
            });

        }else{
            this.setState({
                isLoggedIn:true
            });
        }
    }

    signup_toggle(){
        if(this.state.show_signup_form)
            this.setState({show_login_form:true,
            show_signup_form:false,
            show_signup_button: true,
            show_login_button:false});
        else
            this.setState({show_login_form:false,
            show_signup_form:true,
            show_signup_button: false,
            show_login_button:true});
    }

    onLoginOrSignup(data){
        Cookies.set('token', data.data.token, { expires: 1 });
        this.setState({show_login_form:false,
        show_signup_form:false,
        show_signup_button: false,
        show_login_button:false,
        data:data,
        isLoggedIn:true});
    }

    //handle logout from dashborad
    onLogoutHandler(data){
        this.setState({isLoggedIn:false});
    }


    if(DEBUG){
      this.setState({isLoggedIn:true});
    }



	render() {
        const { data } = this.state;
        const { pageCreateResponse } = this.state;
        var notLoggedIn = !this.state.isLoggedIn;
        var login_form = this.state.show_login_form && notLoggedIn ? <Login value="some value" onlogin={this.onLoginOrSignup.bind(this)}/>    : "";

        var signup_form = this.state.show_signup_form && notLoggedIn ? <SignUp onsignup={this.onLoginOrSignup.bind(this)}/> : "";

        var sign_login_button_text = this.state.show_login_form ? "Sign up": "Log in";
        var login_signup_button = this.state.isLoggedIn ? "" : <button onClick={() => this.signup_toggle()} className="btn btn-primary mb-2">{sign_login_button_text}</button>;

        var message = JSON.stringify(pageCreateResponse);

        let{pageid} = this.props.match.params;

        //Load public page
        if(pageid != null && pageid.length>5){
          const Institute_page = React.lazy(() => import('./public_page_loader'));
          return(<Institute_page pageid={pageid}/>);
        }
       
        if(this.state.isLoggedIn){
          const DashboradWithRouter = withRouter(Dashboard);
          return( <DashboradWithRouter onLogOut={this.onLogoutHandler.bind(this)} />);
        }



        return (

        <div>

			<div className="jumbotron">
				<h1>Welcome to IMS</h1>
				<p>IMS helps to find and manage your information</p>
			</div>
      <p>{message}</p>
      <div className="row row-no-gutters">
      <div className="col-sm-4">
      <RecentlyVisited/>
      </div>
      <div className="col-sm-8">
      <p>To find information enter keyword below</p>
      {<Search/>}
      <p>To manage information login to your account</p>
			{login_form}
      <p>Click signup button to create account if you have no account yet. It's free.</p>
      {login_signup_button}
      {signup_form}
      </div>
      </div>
      <Footer/>
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

                  <input type="text" className="form-control mb-2" id="key" placeholder="Enter keyword here"  />
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


class Login extends Component{

    baz(e){
         e.preventDefault();
          this.setState({login_in_progress:true});
          console.log($("#email").val());
          const url = 'http://13.232.5.188/api/login/';
          //const url = 'http://localhost:8000/login/';

          $.ajax({
          url: url,
          dataType: 'json',
          //cache: false,
          type:'POST',
          contentType: 'application/json',
          data: JSON.stringify({ "email": $("#email").val(), "password": $("#password").val() }),
          success: function(data) {
            //this.setState({data: data});
            //this.setState({loggedin: true});
            //this.onlogin(data);
            console.log("on log in");
            this.props.onlogin(data);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            //console.log(status);
            //console.log(err.toString());
          }.bind(this)
        });
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

                  <input type="email" className="form-control mb-2" id="email" placeholder="someone@somewhere.com"  />
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
                  <button onClick={(e) => this.baz(e)} type="submit" className="btn btn-primary mb-2">Submit</button>

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
        <div>{signup_form}</div>
        );
    }
}

export default App;
