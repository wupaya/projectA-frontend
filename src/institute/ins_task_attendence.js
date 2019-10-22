import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import '../customcss/style.css'



class TakeAttendence extends Component{

    render(){
        return(
            <div>
                <BreadcrumbsItem to="/s/eduman/:id/tg/:tgid/t/:taskid">Attendance</BreadcrumbsItem>
				<div class="row justify-content-md-center">
						<p>Taking class X attendance for 21st Octobor 2019</p>
				</div>
					<hr />
					
					<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
					<label class="form-check-label" for="inlineRadio1">Sequential</label>
					</div>
					<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
					<label class="form-check-label" for="inlineRadio2">Random</label>
					</div>
					<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option2"/>
					<label class="form-check-label" for="inlineRadio3">Skipped</label>
					</div>
				<div class="row justify-content-md-center">
					
					<div class="col col-lg-3">
					<svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
					</div>
					<div class="col col-lg-4">
						<h4>Current ID: 1109023</h4>
						<p>Name: Mr. X</p>
						<p>Home: Rangpur</p>
						<p>Last day status: Present</p>
						<p>Attendance Performance: 87%</p>
						<p>Today's status: Pending</p>
					</div>
					<div class="col col-lg-4">
						Total Attendance so far 20 out of 60 students.
						<p>Last 10 attendance history</p>
						
						<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-success badge-pill">Present</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-danger badge-pill">Absent</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-success badge-pill">Present</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-success badge-pill">Present</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-success badge-pill">Present</span>
  </li>
</ul>

					</div>
				</div>   
				<div class="row justify-content-md-center">
					<button type="button" class="btn btn-success">Present</button>
					<button type="button" class="btn btn-danger">Absent</button>
					<button type="button" class="btn btn-secondary">Skip</button>
				</div>
				
            </div>
        );
    }
}

export default TakeAttendence;