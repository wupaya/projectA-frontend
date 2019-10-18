import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";



class TakeAttendence extends Component{

    render(){
        return(
            <div>
                <BreadcrumbsItem to="/s/eduman/:id/tg/:tgid/t/:taskid">Attendance</BreadcrumbsItem>
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