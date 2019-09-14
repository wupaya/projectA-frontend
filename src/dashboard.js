import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {Page, NavBar, Footer} from './commons';

export class Dashboard extends Component{
    
    state ={show_page_create_form:false, message:"Create a page",isLoggedIn:true}
    constructor(props){
        
        super(props);
        
    }
    

    
    onLogOutHangle(){
       this.setState({isLoggedIn:false});
       Cookies.remove("token");
       console.log("working inside");
    }
    
    
    
    render(){
        
        const { match } = this.props;
        console.log(match.url)
        if(!this.state.isLoggedIn){
            return <Redirect to='/'/>;
        }
        return (
            <div className="container">
                <NavBar onLogOut={this.onLogOutHangle.bind(this)}/>
                <div className="row">
                <div class="col-lg-2">
                 <SideBar match={match}/>
                </div>
                <div class="col-lg-10">
                    <Switch>
                        <Route exact path="/private" component={DashboardHome} />
                        <Route exact path="/private/services" component={ServiceShortcut} />
                        <Route exact path="/private/service/eduman" component={ServiceDashboard} />
                    </Switch>
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
    render(){
        const { match } = this.props;
        return(
        <div>
            <h2>Welcome</h2>
                ----------------------------------
                <h4>You haven't started managing yet. Let's <Link to="/private/services">get started</Link></h4>
        </div>
        );
    }
}

class ServiceDashboard extends Component{
    
    state ={show_page_create_form:false, message:"Create a page",isLoggedIn:true}
    
    toggle_page_create(){
        this.setState({show_page_create_form:true, message: "Enter the required information."});
    }
    onCancelHandle(){
        this.setState({show_page_create_form:false});
    }
    
    onPageCreateHandler(data){
        this.setState({pageCreateResponse:data});
    }
    
    onCreatePageHandle(data){
        this.setState({show_page_create_form:false,
        message:"Page Created successfully"});
    }
    render(){
        
        var button_text = this.state.show_page_create_form ? "" : <button  onClick={this.toggle_page_create.bind(this)}>Create Page</button>;
        var page_create_form = this.state.show_page_create_form ? <CreateInstitutePageForm onCancel={this.onCancelHandle.bind(this)} onCreatePage={this.onCreatePageHandle.bind(this)}/> : "";
        return(
            <div>
            <p>Create a page first.</p>
            {button_text}
            {page_create_form}
            </div>
        );
    }
}

class ServiceShortcut extends Component{
    render(){
        return(
            <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                <h5 class="card-title">EDUMAN</h5>
                <h6 class="card-subtitle mb-2 text-muted">Educational Institute Manager</h6>
                <p class="card-text">If you are associated with any educational institute, this tool will help you to manage your operations.</p>
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
