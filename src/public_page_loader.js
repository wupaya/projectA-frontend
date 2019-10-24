import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink} from "react-router-dom";
import {NavBar, Footer, RecentlyVisited} from './lib/commons';
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class PublicPageLoader extends Component{
    render(){
        return("this is your page");
    }
}

export default PublicPageLoader;