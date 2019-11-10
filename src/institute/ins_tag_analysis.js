import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from "./ins_common_lib";
import { Configuration } from '../lib/config';

class StatusAnalysis extends Component {
    
    constructor(props){
        super(props)
        this.state = {tasks: null}
    }
    /*
    state = {
        tasks: [
            { taskid: 3, task_nice_id: "ins_task_attendance_analysis", task_description: "Last Attendance Analysis" },
        ]
    }
*/
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
              "task_id": "manage_analysis_tag",
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

    render() {
        let { id, tgid } = this.props.match.params;
        let {tasks} = this.state;
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/" + id + "/tg/" + tgid}>Analysis</BreadcrumbsItem>
                <Switch>
                    <Route exact path="/s/eduman/:id/tg/:tgid">
                        <p>What you would like to do?</p>
                        <ul>
                            {tasks.map((key, index) => { return <li><Link to={{ pathname: "/s/eduman/" + id + "/tg/" + tgid + "/t/" + key["task_nice_id"] }}>{key["task_description"]}</Link></li> })}
                        </ul>
                        <hr />
                    </Route>
                    <Route path="/s/eduman/:id/tg/:tgid/t/:taskid" component={TaskLoader} />
                </Switch>
            </div>
        );
    }
}

export default StatusAnalysis;