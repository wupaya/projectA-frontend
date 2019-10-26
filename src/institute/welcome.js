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
        const CreateInstitutePageForm = React.lazy(() => import('./' + 'ins_task_create_page'));
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
            <p>Your are associated with</p>
            <hr />
            <ul>
            {
             associated.map((entry, index) => {
                return <li key={index}>You joined <Link to={{ pathname: "/s/eduman/"+entry["short_name"]}}>{entry["long_name"]}</Link> as {entry["designation"]}</li>
             })
            }
            </ul>
            <hr />
            <p><Link to="/s/eduman/t/join_page">Join with a new institute</Link></p>
        </div>;

        var view = associated.length > 0 ? welcome_back : welcome;

        return(
          <Switch>
          <Suspense fallback={<div>Loading...</div>}>
              <div>{view}</div>
          </Suspense>
          </Switch>
        );
    }
}

export default Welcome;

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
