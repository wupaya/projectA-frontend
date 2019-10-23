import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";



class PublicPageTag extends Component{
  state = {
    tasks:[
      {taskid:3, task_nice_id:"ins_task_edit_title",task_description:"Change the title in institute page"},
      {taskid:4, task_nice_id:"ins_task_edit_address",task_description:"Add or change address"},
      {taskid:13, task_nice_id:"ins_task_edit_contact",task_description:"Add or change contact"},
      {taskid:15, task_nice_id:"ins_task_show_preview",task_description:"Show page in preview mode"},
      {taskid:16, task_nice_id:"ins_task_show_page",task_description:"Go to page"}
    ],
    tag_meta:{
      public_pages:[
        {title:"Begum Rokeya University, Rangpur", link:"/begum_rokey_univ"}
      ]
    }
  }
    render(){
        let {id} = this.props;
        let {tasks} = this.state;
        let {tag_meta} = this.state;

        return(
            <div>
                <BreadcrumbsItem to={"/s/eduman/"+id}>Manage Public Page</BreadcrumbsItem>
                <p>In this section you will be able to manage your institute public page.</p>
                <hr />
                <p>What you would like to do?</p>
                <ul>
                  {tasks.map((key,index)=>{return <li><Link to={{ pathname: "/s/eduman/"+id+"/tg/"+"", search: "?action=task&taskid="+key["task_nice_id"] }}>{key["task_description"]}</Link></li>})}
                </ul>
                <hr />
                <p><Link to="/begum_rokeya_university">Visit public page</Link></p>
            </div>
        );



    }
}

export default PublicPageTag;