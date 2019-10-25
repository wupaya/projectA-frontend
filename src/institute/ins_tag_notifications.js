import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from "./ins_common_lib";

export class ManageNotice extends Component {
    state = {
        tasks: [
            { taskid: 3, task_nice_id: "ins_task_attendance_notification", task_description: "Attendance Notification" },
        ]
    }
    render() {
        let { id, tgid } = this.props.match.params;
        let { tasks } = this.state;
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/" + id + "/tg/" + tgid}>Notification</BreadcrumbsItem>
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


export default ManageNotice;