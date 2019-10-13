import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink} from "react-router-dom";
import {NavBar, Footer, RecentlyVisited} from './commons';
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


export class Dashboard extends Component{

    state ={show_page_create_form:false, message:"Create a page",isLoggedIn:true}
    constructor(props){

        super(props);

    }



    onLogOutHangle(){
       this.setState({isLoggedIn:false});
       console.log("working inside");
    }



    render(){
        //lazy load
        const InstituteDashboard = React.lazy(() => import('./institute/'+ 'dashboard'));
        const { match } = this.props;
        console.log(match.url)
        if(!this.state.isLoggedIn){
            return <Redirect to='/'/>;
        }
        return (
            <div className="container">
                <NavBar onLogOut={this.onLogOutHangle.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
                <div className="row">

                </div>
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
                        <Route exact path="/private" component={DashboardHome} />
                        <Route exact path="/private/services" component={ServiceShortcut} />
                        <Route path="/private/service/eduman" component={InstituteDashboard} />
                    </Switch>
                    </Suspense>

                </div>

                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>

        );
    }
}

class DashboardHome extends Component{
    state = {
      subscribed_services:[
        {id:1, title:"Manage My Institute", short_updates:"You have 4 important tasks to manage."},
        {id:1, title:"Manage Child's Education", short_updates:"You have 4 important tasks to manage."}

      ]
    }
    render(){
        let {subscribed_services} = this.state;
        const { match } = this.props;
        var init = <div><h2>Welcome</h2>
            ----------------------------------
            <h4>You are not managing anything yet. Let's <Link to="/private/services">get started</Link></h4></div>;
        if(subscribed_services.length>0){
          init = <div className="row">
            <ServiceShortcut data={subscribed_services[0]} />
            <ServiceShortcut data={subscribed_services[1]} />
          </div>
        }
        return(
        <div>
            <FrequentActivity />
            <hr />
            <h4>What do you want to do now?</h4>
            {init}
        </div>
        );
    }
}


class ManagementTaskShortcut extends Component{
    render(){
        let {name} = this.props;
        return(
            <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
              </div>
            </div>
        );
    }
}

class Search extends Component{

    baz(e){
         e.preventDefault();
	  }
    constructor(props){

        super(props);
        //his.onlogin_demo = this.onlogin_demo.bind(this);
        this.state = {
            value:"some arbitary value",
        };
        this.state = {
            data: {},
            login_in_progress:false
        };

    }

    // onlogin_demo(data){
        // this.props.onlogin(data);
    // }

    render(){
        const { data } = this.state
        const { login_in_progress } = this.state

        var login_form =             <form>
              <div className="form-row align-items-center">
                <div className="col-auto">

                  <input type="text" className="form-control mb-2" id="key" placeholder="Enter your institute name"  />
                </div>


                <div className="col-auto">
                  <button onClick={(e) => this.baz(e)} type="submit" className="btn btn-primary mb-2">Find</button>

                </div>
              </div>
            </form>
        var loader_text = login_in_progress ? "Loading..." : ""
        return (
            <div>
            {login_form}
            {loader_text}
            </div>
        );
    }
}

class ServiceShortcut extends Component{

    render(){
        let {data} = this.props;
        var default_title = <h6 class="card-subtitle mb-2 text-muted">Educational Institute Manager</h6>;
        var default_description = "If you are associated with any educational institute, this tool will help you to manage your operations.If you are associated with any educational institute, this tool will help you to manage your operations.";
        return(
            <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                <h5 class="card-title">{data["title"]}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Educational Institute Manager</h6>
                <p class="card-text">{data["short_updates"]}</p>
                <Link to="/private/service/eduman" class="card-link">Get started</Link>
              </div>
            </div>
        );
    }
}
class SideBar extends Component{

    render(){
        const { match } = this.props;
        return(
        <Switch>

            <Route  path="/private/service/eduman" component={ServiceSidebar} />
            <Route exact path="/private" component={HomeSidebar} />
        </Switch>
        );
    }
}

class HomeSidebar extends Component{
    render(){
        return(
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link to="/private" className="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
            </ul>
        );
    }
}

class ServiceSidebar extends Component{
    render(){
        return(
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link to="/private/service/eduman" className="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Associates</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
            </ul>
        );
    }
}

class CreateInstitutePageForm extends Component{

    cancel(e){
        e.preventDefault();
        this.props.onCancel();
    }

    create_page(e){
          e.preventDefault();
          var auth_token = Cookies.get("token");
          const url = 'http://13.232.5.188/api/public_page/';
          //const url ='http://localhost:8000/public_page/';

          $.ajax({
          url: url,
          beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Token " + auth_token);
            },
          dataType: 'json',
          //cache: false,
          type:'POST',
          contentType: 'application/json',
          data: JSON.stringify({ "page_title":"begum rokeya university, rangpur 2", "type_of_institute": "university", "founding_date":"2008", "address_district":"rangpur", "address_upozila":"sadar", "no_of_stakeholder":"20", "description":"this is a test page" }),
          success: function(data) {
            //this.setState({data: data});
            //this.setState({loggedin: true});
            //this.onlogin(data);
            console.log("on log in");
            this.props.onCreatePage(data);
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            this.props.onCreatePage(err);
            //console.log(status);
            //console.log(err.toString());
          }.bind(this)
        });
	  }

    render(){
        return (
            <div>
            <form>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Institute Name</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Your institute name here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="institute address here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Founded Year</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="When it is founded."/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Institute description here"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Your Designation</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Commettee Member/Teacher/Student/Stuff"/>
                </div>
              </div>
              <button className="btn btn-primary"  type="submit" onClick={(e)=> this.create_page(e)}>Create Page</button> <span></span>
              <button className="btn btn-primary"  type="submit" onClick={(e)=>this.cancel(e)}>Cancel</button>
                </form>
            </div>
        );
    }
}
class Table extends Component {
    render() {
        return (
               <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
class TableHeader extends Component{
	render () {
		return(
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
			)
	}
}
class TableBody extends Component{
	render () {
		return(
			<tbody>
				<tr>
					<td>Charlie</td>
					<td>Janitor</td>
				</tr>
				<tr>
					<td>Mac</td>
					<td>Bouncer</td>
				</tr>
				<tr>
					<td>Dee</td>
					<td>Aspiring actress</td>
				</tr>
				<tr>
					<td>Dennis</td>
					<td>Bartender</td>
				</tr>
			</tbody>
		)
	}
}


export class FrequentActivity extends Component{
    state = {
      recent_activities: [
        {title:"Show me class IX results",link:"#"},
        {title:"Show me delayed present stuffs",link:"#"},
        {title:"What's the schools status today?",link:"#"},
        {title:"Show my child's progress",link:"#"},
        {title:"Add a new stuff",link:"#"}
      ]
    }
    render(){
        let {recent_activities} = this.state;
         return (
            <div>
            <p>Frequent activities</p>
            <ol>
            {recent_activities.map((key, index)=>{return <li><Link to={key["link"]}>{key["title"]}</Link></li>})}
            </ol>
            </div>
         );
    }
}
