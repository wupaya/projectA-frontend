import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Page, NavBar, Footer} from './commons';
import {withRouter} from 'react-router-dom';


export class Designation extends Component{
    render(){
      var id = "BRUR";
        return(
            <div>
            <p>Your responsibilities set name is <b>Headmaster</b>. You have the following responsibility</p>
            <ul>
                <li>Manage Stuffs (Permission Not Required)</li>
                <li>Manage Responsibility (Permission Not Required)</li>
                <li>Manage Sign Requests (Permission Not Required)</li>
                <li>Manage Status Analysis (Permission Not Required)</li>
            </ul>
            <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=change_self_responsibilities" }}>I want to add or remove responsibility.</Link>
            <hr />
            <ul>
                <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_all_designation" }}>Show All designations</Link></li>
                <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=filter_designation" }}>Show designation which has specific tasks</Link></li>
                <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=detail_designation" }}>Show a designation details</Link></li>
                <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=add_designation" }}>Add New Designation</Link></li>
            </ul>
            </div>
        );
    }
}



export class AccessDesignationList extends Component{
    state = {
      data: [{id:1, title: "Headmaster", hr:1, description: "Manage the whole institute.",responsibilties:[
        { res_id:1, title:"Manage Responsibilty"},
        { res_id:2, title:"Manage Stuff"},
        { res_id:3, title:"another dummy responsibility"},
        { res_id:4, title:"TODO"}], tags:[{id:1, title:"stuff"},{id:2, title:"admin"}]},
      {id:2, title: "Office Assitant", hr:3, description: "Manage the whole institute.",responsibilties:[
              { res_id:1, title:"Manage Responsibilty"},
              { res_id:2, title:"Manage Stuff"},
              { res_id:3, title:"another dummy responsibility"},
              { res_id:4, title:"TODO"}], tags:[{id:1, title:"stuff"}]},
      {id:3, title: "Senior Teacher", hr:0, description: "Manage the whole institute.",responsibilties:[
        { res_id:1, title:"Manage Responsibilty"},
        { res_id:2, title:"Manage Stuff"},
        { res_id:3, title:"another dummy responsibility"},
        { res_id:4, title:"TODO"}
      ], tags:[{id:1, title:"stuff"}]}]
    }
    render(){
        let {data} = this.state;
      return(
        <div>
          <table className="table">
              <thead>
                <tr>
                  <th>Desination</th>
                  <th>Number of People</th>
                  <th>Responsibilities</th>
                  <th>Description</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {data.map((key, index)=>{
                  return <tr><th>{key["title"]}</th>
                        <th>{key["hr"]}</th>
                        <th><ul>{key["responsibilties"].map((key, index)=>{ return <li>{key["title"]}</li>})}</ul></th>
                        <th>{key["description"]}</th>
                        <th><ul>{key["tags"].map((key, index)=>{ return <li>{key["title"]}</li>})}</ul></th>
                </tr>})}
              </tbody>
          </table>
        </div>
      );
    }
}

export class DetailsAccessDesignation extends Component {
  render(){

    return("Show Details");
  }
}

export class AddAccessDesignation extends Component {
  render(){

    return(
      <div>
      <div className="form-group row">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Enter Tags</label>

        <div className="col-sm-6">
          <input type="text" className="form-control" id="name" placeholder="i. e. IT assistant"/>
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted">
        Optional: Tags helps you to categorize by your desire categories. usefull when multiple designations have same category i.e. stuff as office assitant, teacher.
        </small>
      </div>
      </div>);
  }
}

export class RemoveDesignation extends Component{

}

export class ChangeDesignationResponsibility extends Component{
  render(){
    return("");
  }
}

export class ChagneSelfResponsibility extends Component{
  state = {
    responsibility:{
      title: "Headmaster",
      doing:[
        {nice_title: "Manage Responsibility", system_id: ""},
        {nice_title: "Manage Stuffs", system_id: ""},
        {nice_title: "Manage Notification", system_id: ""},
        {nice_title: "Status Analysis", system_id: ""}
      ],
      not_doing:[
        {nice_title: "Manage Attendance", system_id: ""},
        {nice_title: "Manage Class Distribution", system_id: ""},
        {nice_title: "Manage Public Page", system_id: ""},
        {nice_title: "Manage Fees Collection", system_id: ""},
        {nice_title: "Manage Results", system_id: ""}
      ]
    }
  }
  render(){
    let {doing}  = this.state.responsibility;
    let {not_doing}  = this.state.responsibility;
    return(
        <div className="row">
          <p>
            To change <b>{this.state.responsibility["title"]}</b>'s responsibilities just click or say add or remove.
          </p>
          <div className="row"><div className="col">
            <p>

              Your are DOING the following responsibilities.
            </p>
            <ul>
              {doing.map((key, index)=>{return <li>{key["nice_title"]}<Link to="#"> (remove)</Link></li>})}
            </ul>
          </div>
          <div className="col">
          <p>
            You are NOT DOING the following responsibilities.
          </p>
          <ul>
            {not_doing.map((key, index)=>{return <li>{key["nice_title"]}<Link to="#"> (add without approval</Link> /<Link to="#"> add with approval)</Link></li>})}
          </ul>
          </div>
          </div>
        </div>
    );
  }
}
