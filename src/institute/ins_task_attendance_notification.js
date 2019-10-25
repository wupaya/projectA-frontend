import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class ManageNotice extends Component {
    render() {
        let { id, tgid } = this.props.match.params;
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/" + id + "/tg/" + tgid + "/t/" + "taskid"}>Attendance Notification</BreadcrumbsItem>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">
                        Enable
  </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">
                        Disable
  </label>
                </div>
            </div>
        );
    }
}


export default ManageNotice;