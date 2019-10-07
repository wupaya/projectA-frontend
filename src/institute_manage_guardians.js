import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Page, NavBar, Footer} from './commons';
import {withRouter} from 'react-router-dom';


export class StatusAnalysis extends Component{
    render(){
        return(
            <div>
                <p>What would you like to know?</p>
                <ul>
                <li>Show me who are absent today.</li>
                <li>Show me teachers who are performing best.</li>
                <li>Show me students presence statistics.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                <li>Show me who are absent today.</li>
                </ul>
            </div>
        );
    }
}
