import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";



class ClassManagementTag extends Component{
  state = {
    tasks:[
      {taskid:3, task_nice_id:"ins_task_attendence",task_description:"Take attendence"}
    ],
    tag_meta:{
      public_pages:[
        {title:"Begum Rokeya University, Rangpur", link:"/begum_rokey_univ"}
      ]
    }
  }
    render(){
        let {id} = this.props.match.params;
        let {tgid} = this.props.match.params;
        let {tasks} = this.state;
        let {tag_meta} = this.state;

        return(
            <div>
                
                <p>What you would like to do?</p>
                <ul>
                  {tasks.map((key,index)=>{return <li><Link to={{ pathname: "/s/eduman/"+id+"/tg/"+tgid+"/t/"+key["task_nice_id"]}}>{key["task_description"]}</Link></li>})}
                </ul>
                <hr />
            </div>
        );
    }
}

class TagLoader extends Component{
  
  render(){
    let {id,tgid,taskid} = this.props.match.params;

    return(
      <duv>
        <BreadcrumbsItem to={"/s/eduman/"+id+"/tg/"+tgid}>Class Management</BreadcrumbsItem>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/s/eduman/:id/tg/:tgid" component={ClassManagementTag}/>
                <Route path="/s/eduman/:id/tg/:tgid/t/:taskid" component={TaskLoader}/>
            </Switch>
        </Suspense>
      </duv>
    );
  }
}


class TaskLoader extends Component{
  render(){
      let {taskid} = this.props.match.params;
      if(taskid==null){
        return ("something went wrong");
      }
      const View = React.lazy(() => import('./'+ taskid));
      return <div>
      <Suspense fallback={<div>Loading...</div>}>
          <View match={this.props.match}/>
      </Suspense>
    </div>;
  }
}

export default TagLoader;