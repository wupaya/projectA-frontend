import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';



class ManageStuff extends Component{
  state = {
    tasks:[
      {taskid:3, task_nice_id:"ins_stuff_list",task_description:"Show all stuff"},
      {taskid:4, task_nice_id:"ins_add_stuff",task_description:"add new stuff"},
      {taskid:13, task_nice_id:"ins_remove_stuff",task_description:"remove stuff"},
      {taskid:15, task_nice_id:"ins_stuff_details",task_description:"Show stuff details"},
      {taskid:16, task_nice_id:"ins_edit_stuff",task_description:"I want to change the responsibility & permission of stuff"}

    ]
  }
    render(){
        let {id} = this.props;
        let {tasks} = this.state;

        return(
            <div>
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
