import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { withRouter} from "react-router-dom";
import {BreadcrumbsItem } from "react-breadcrumbs-dynamic";





class Contacts extends Component{
    render(){
        return(
            <div>
                <BreadcrumbsItem to="/public/:id?action=test">Contact</BreadcrumbsItem>
                TODO
            </div>
        );
    }
}

export default Contacts;