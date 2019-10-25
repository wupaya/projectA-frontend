import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink} from "react-router-dom";
import {NavBar, Footer, RecentlyVisited} from './commons';
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class PublicPageLoader extends Component{
    state={
        pagetype:"institute",
        pageloader:"ins_page"
    }
    render(){
        let {pagetype, pageloader} = this.state;
        let{pageid} = this.props;
        
        const Institute_page = React.lazy(() => import('../'+pagetype+'/'+pageloader));
        return (<Institute_page pageid={pageid} />);
    }
}

export default PublicPageLoader;