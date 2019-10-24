import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class AttendanceAnalysis extends Component {
    render() {
        let { id, tgid } = this.props.match.params;
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/" + id + "/tg/" + tgid + "/t/" + "taskid"}>Last Attendance Analysis</BreadcrumbsItem>
                <p>Total Present  85% students</p>
                <p>45 of 60 is present</p>
                <p>15 of 60 is absent</p>
            </div>
        );
    }
}


export default AttendanceAnalysis;