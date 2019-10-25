import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink } from "react-router-dom";
import { NavBar, Footer, RecentlyVisited } from './lib/commons';
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


export class Dashboard extends Component {

  state = { show_page_create_form: false, message: "Create a page", isLoggedIn: true }
  constructor(props) {
    super(props);
  }

  onLogOutHangle() {
    this.setState({ isLoggedIn: false });
    this.props.onLogOut();
    console.log("working inside");
  }
  render() {
    const InstituteDashboard = React.lazy(() => import('./institute/' + 'dashboard'));
    const { match } = this.props;
    console.log(match.url)
    if (!this.state.isLoggedIn) {
      console.log('not logged in')
      return <Redirect to='/' />;
    }
    //Load public page
    let { pageid } = this.props.match.params;
    if (pageid != null && pageid.length > 2) {
      const Institute_page = React.lazy(() => import('./lib/public_page_loader'));
      return (<Institute_page pageid={pageid} />);
    }

    return(
        <div className="row">
          <div class="col-lg-12">
            <Breadcrumbs
              separator={<b> / </b>}
              item={NavLink}
              finalItem={"b"}
              finalProps={{
                style: {}
              }}
            />
            <hr />
            <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={DashboardHome} />
                <Route path="/s/eduman" component={InstituteDashboard} />
              </Switch>
            </Suspense>
          </div>
        </div>
    );
  }
}

class DashboardHome extends Component {
  state = {
    subscribed_services: [
      { id: 1, title: "Manage Education", short_updates: "Provides services for education management" }

    ]
  }
  render() {
    let { subscribed_services } = this.state;
    const { match } = this.props;
    var init = <div><h2>Welcome</h2>
      <hr />
      <h4>You are not managing anything yet. Let's <Link to="/s">get started</Link></h4></div>;
    if (subscribed_services.length > 0) {
      init = <div className="row">
        <ServiceShortcut data={subscribed_services[0]} />
      </div>
    }
    return (
      <div>
        <FrequentActivity />
        <hr />
        <h4>What do you want to do now?</h4>
        {init}
      </div>
    );
  }
}

class ServiceShortcut extends Component {
  render() {
    let { data } = this.props;
    var default_title = <h6 class="card-subtitle mb-2 text-muted">Educational Institute Manager</h6>;
    var default_description = "If you are associated with any educational institute, this tool will help you to manage your operations.If you are associated with any educational institute, this tool will help you to manage your operations.";
    return (
      <div class="card" style={{ width: '18rem' }}>
        <div class="card-body">
          <h5 class="card-title">{data["title"]}</h5>
          <p class="card-text">{data["short_updates"]}</p>
          <Link to="/s/eduman" class="card-link">Open</Link>
        </div>
      </div>
    );
  }
}

export class FrequentActivity extends Component {
  state = {
    recent_activities: [
      { title: "Show me class IX results", link: "#" },
      { title: "Show me delayed present stuffs", link: "#" },
      { title: "What's the schools status today?", link: "#" },
      { title: "Show my child's progress", link: "#" },
      { title: "Add a new stuff", link: "#" }
    ]
  }
  render() {
    let { recent_activities } = this.state;
    return (
      <div>
        <p>Frequent activities</p>
        <ol>
          {recent_activities.map((key, index) => { return <li><Link to={key["link"]}>{key["title"]}</Link></li> })}
        </ol>
      </div>
    );
  }
}
