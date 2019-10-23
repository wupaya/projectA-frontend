import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from "./ins_common_lib";


class JoinInstituteTag extends Component{

    state ={show_page_create_form:false, message:"Create a page", isLoggedIn:true}

    toggle_page_create(){
        this.setState({show_page_create_form:true, message:"Enter the required information."});
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
        let {associated} =  this.props;
        console.log(associated);

        return(
          <div>
          <BreadcrumbsItem to={"/s/eduman/tg/"+"ins_tag_join_institute"}>Join Institute</BreadcrumbsItem>
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={"/s/eduman/tg/"+"ins_tag_join_institute"}>
            <div>
              <p>There are two ways to join an institute.</p>
              <hr />
              <p>You can join your institute by submitting a join request. First find your page. if not found you can create one.</p>
              <Search />
              <hr />
              <p>Or if you already have a invitation to join your institute.</p>
              <JoinByInvitation/>
            </div>
            </Route>
            <Route path="/s/eduman/tg/ins_tag_join_institute/t/ins_task_create_page" component={CreateInstitutePageForm} />
          </Switch>
          </Suspense>
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
        this.state = {
            data: {},
            login_in_progress:false,
            search_result:[],
            show_search_result: true
        };
    }

    render(){
        const { login_in_progress } = this.state
        var login_form = <form>
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
        const {search_result} = this.state;
        var result = "";
        if(this.state.show_search_result){
            if(search_result.length)
                result = <ul>{search_result.map((key, index)=>{return<li></li>})}</ul>;
            else{
                result = <Link to="/s/eduman/tg/ins_tag_join_institute/t/ins_task_create_page">create page</Link>
            }
        }
        return (
            <div>
            {login_form}
            {loader_text}
            {result}
            </div>
        );
    }
}

class JoinByInvitation extends Component{
  render(){
    return(
      <div>
          <form>
              <div className="form-row align-items-center">
                <div className="col-auto">
                  <input type="text" className="form-control mb-2" id="key" placeholder="Enter invitation code"  />
                </div>
                <div className="col-auto">
                  <button onClick={(e) => this.baz(e)} type="submit" className="btn btn-primary mb-2">Find</button>
                </div>
              </div>
            </form>
      </div>
    );
  }
}

export default JoinInstituteTag;