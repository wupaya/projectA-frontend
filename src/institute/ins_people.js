import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Configuration } from '../lib/config';


class ManageStuff extends Component{

  constructor(props){
    super(props)
    this.state ={
      tasks: null
    }
  }

  componentDidMount(){
    const url = Configuration.base_url+'/service_request/';

    $.ajax({
      url: url,
      dataType: 'json',
      //cache: false,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        "service_name": "education",
        "task": {
          "task_id": "manage_people_tag",
          "data": {}
        }
    }),
      success: function (data) {
        console.log(JSON.stringify(data))
        this.setState({tasks:data["tasks"]})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
    render(){
        let {id} = this.props;
        let {tasks} = this.state;
        if(tasks == null)
        return "Loading..."
        return(
            <div>
                <BreadcrumbsItem to="/s/eduman/:id?action=details_console_tag&tag_id=1&component=ins_people">Manage People</BreadcrumbsItem>
                <p>Stuff Overview</p>
                <hr />
                <p>You have <a href="#" className="btn btn-outline-primary">20 active stuff,</a>
                 <a href="#" className="btn btn-outline-primary">5 stuff on leave</a> and
                 <a href="#" className="btn btn-outline-primary">1 sent invitation</a> pending to be accepted.</p>
                <hr />
                <p>What you would like to do?</p>
                <ul>
                  {tasks.map((key,index)=>{return <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=task&taskid="+key["task_nice_id"] }}>{key["task_description"]}</Link></li>})}
                </ul>
                <hr />
                <p><Link to="#">I would like to know how the stuffs are doing</Link></p>
            </div>
        );



    }
}

export default ManageStuff;
/*
add stuff use case:

user enter phone number
system sends numeric code by message with short instruction
receiver use numeric key to get invitaion

*/
