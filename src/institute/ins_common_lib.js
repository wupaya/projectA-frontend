import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


export class TaskLoader extends Component{
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