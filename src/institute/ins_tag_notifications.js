import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';

export class ManageNotice extends Component{
    render(){
        let {id} = this.props.match.params;
        return(
            <div>
                <p>Summary</p>
                <p>You have 10 important notice and 12 non important notice.</p>
                <ul>
                    <li>Show me all important notice.</li>
                    <li>Show me all non important notice.</li>
                    <li>Show me yestartday's notices.</li>
                    <li>Show me declined notices.</li>
                </ul>
                <div class="card w-75">
                  <div class="card-body">
                    <h5 class="card-title">New Member Requests</h5>
                    <p class="card-text">IT manager Mr X added Mr. Y as Teacher. It requires your approval.</p>
                    <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=request_details&request_id="+"dummy" }}>Details</Link>
                  </div>
                </div>
            </div>
        );
    }
}


export default ManageNotice;