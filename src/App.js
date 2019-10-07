import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Layout, Footer, RecentlyVisited} from './commons';
import {Dashboard} from './dashboard';
import {Page} from './page';

class App extends Component {
    render(){
        return(
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/public/:id" component={Page} />
        <Route path="/private" component={Dashboard} />
        </Router>
        );
    }
}

class Home extends Component {

    constructor(props){
        super(props);
        //this.afterlogin = this.afterlogin.bind(this);


    }

	removeCharacter = index => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
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
                isLoggedIn:false
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

    dashboad(data){
        console.log("dashboad");
        this.setState({show_login_form:false,
            show_signup_form:false,
            show_signup_button: false,
            show_login_button:false,
            data:data});
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

    onPageCreateHandler(data){
        this.setState({pageCreateResponse:data});
    }



	render() {
        const { data } = this.state;
        const { pageCreateResponse } = this.state;
        var notLoggedIn = !this.state.isLoggedIn;
        var login_form = this.state.show_login_form && notLoggedIn ? <Login value="some value" onlogin={this.onLoginOrSignup.bind(this)}/>    : "";

        var signup_form = this.state.show_signup_form && notLoggedIn ? <SignUp onsignup={this.onLoginOrSignup.bind(this)}/> : "";

        var sign_login_button_text = this.state.show_login_form ? "Sign up": "Log in";
        var login_signup_button = this.state.isLoggedIn ? "" : <button onClick={() => this.signup_toggle()} className="btn btn-primary mb-2">{sign_login_button_text}</button>;

        if(this.state.isLoggedIn){
            return (
            <Redirect to='/private/'/>
            );
        }
        if(this.state.isLoggedIn){
            var dashboad = <Dashboard onCreatePage={this.onPageCreateHandler.bind(this)} />;
            var message = JSON.stringify(pageCreateResponse);
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
