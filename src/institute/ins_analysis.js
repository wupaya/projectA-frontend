import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';


class StatusAnalysis extends Component{
    render(){
        return(
            <div>
                <h3>Overview</h3>
                <p>89% students are present. That's very good.</p>
                <p>60% teachers are doing great.</p>
                <p>75% guardians are happy with the education of their children.</p>
                <p>This institute is in the top 10 best school.</p>
                <hr />
                <p>What else would you like to know?</p>
                <ul>
                <li>Show me who are absent today.</li>
                <li>Show me teachers who are performing best.</li>
                <li>Show me students presence statistics.</li>
                <li>More</li>
                </ul>
            </div>
        );
    }
}
export default StatusAnalysis;
