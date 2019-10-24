import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from "./ins_common_lib";


//helper class
class ClassManagementTag extends Component{
  state = {
    tasks:[
      {taskid:3, task_nice_id:"ins_task_attendence",task_description:"Take attendence"},  
    ]
  }
    render(){
        let {id, tgid} = this.props.match.params;
        let {tasks} = this.state;
        console.log('laoded component')
        return(
            <div>
              <BreadcrumbsItem to={"/s/eduman/"+id+"/tg/"+tgid}>Class Management</BreadcrumbsItem>
              <Switch>
              <Route exact path="/s/eduman/:id/tg/:tgid">
                <p>What you would like to do?</p>
                <ul>
                  {tasks.map((key,index)=>{return <li><Link to={{ pathname: "/s/eduman/"+id+"/tg/"+tgid+"/t/"+key["task_nice_id"]}}>{key["task_description"]}</Link></li>})}
                </ul>
                <hr />
              </Route>
              <Route path="/s/eduman/:id/tg/:tgid/t/:taskid"  component={TaskLoader}/>
              </Switch>
            </div>
        );
    }
}

export default ClassManagementTag;