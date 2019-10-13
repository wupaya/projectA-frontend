import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";



class TakeAttendence extends Component{
  state = {
    tasks:[
      {taskid:3, task_nice_id:"ins_task_attendence",task_description:"Take attendence"},
      {taskid:4, task_nice_id:"ins_task_edit_address",task_description:"Add or change address"},
      {taskid:13, task_nice_id:"ins_task_edit_contact",task_description:"Add or change contact"},
      {taskid:15, task_nice_id:"ins_task_show_preview",task_description:"Show page in preview mode"},
      {taskid:16, task_nice_id:"ins_task_show_page",task_description:"Go to page"}
    ],
    tag_meta:{
      public_pages:[
        {title:"Begum Rokeya University, Rangpur", link:"/public/begum_rokey_univ"}
      ]
    }
  }
    render(){
        let {id} = this.props;
        let {tasks} = this.state;
        let {tag_meta} = this.state;

        return(
            <div>
                <BreadcrumbsItem to="/private/service/eduman/:id">Manage Public Page</BreadcrumbsItem>
                <p>You will take attendence here</p>
				<table class="table">
					<thead>
					  <tr>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Email</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>John</td>
						<td>Doe</td>
						<td>john@example.com</td>
					  </tr>
					  <tr>
						<td>Mary</td>
						<td>Moe</td>
						<td>mary@example.com</td>
					  </tr>
					  <tr>
						<td>July</td>
						<td>Dooley</td>
						<td>july@example.com</td>
					  </tr>
					</tbody>
				</table>
               
            </div>
        );



    }
}

export default TakeAttendence;