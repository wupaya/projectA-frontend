import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from './ins_common_lib';
import { Configuration } from '../lib/config';

/*This is the service reception. It shows associated institute lists and allow creating new page.*/
class InstituteDashboard extends Component {
  constructor(props){
    super(props);
    this.state= {
      selected_designation: "",
      associated:null
    }

    
    this.onDesignationSelectionHandler = this.onDesignationSelectionHandler.bind(this);
  }

  onDesignationSelectionHandler(e, designation){
    //e.preventDefault();
    console.log(designation + ' in callback');
    this.setState({selected_designation:"Somethign"}, ()=>{
      console.log('inside setUpdate')
    });
    console.log('after setUpdate without callback')
  }

  componentWillUnmount(designation){
    console.log("Component unmount "+ this.state.selected_designation)
    this.setState({selected_designation:"Somethign"}, function (){
      console.log('inside setUpdate')
    });
  }

  componentDidMount(){
    const url = Configuration.base_url+'/service_request/';

    $.ajax({
      url: url,
      dataType: 'json',
      //cache: false,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        "service_name": "education",
        "task": {
          "task_id": "dashboard",
          "data": {}
        }
    }),
      success: function (data) {
        console.log("got daata" + data["associated"]);
        console.log(JSON.stringify(data))
        this.setState({associated:data["associated"]})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    const Welcome = React.lazy(() => import('./' + 'welcome'));
    let {selected_designation} = this.state;
    console.log(selected_designation + ' in dashborad')
    return (
      <div>
        <BreadcrumbsItem to='/s/eduman' icon='account-box' > Education Management</BreadcrumbsItem>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/s/eduman' render={(props) => <Welcome {...props} associated={this.state.associated} onDesignationSelection={this.onDesignationSelectionHandler}/>} />
            <Route path="/s/eduman/:id" render={(props) => <InsDahsboard {...props} designation={selected_designation}/>} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

//Show institute
class InsDahsboard extends Component {
  render() {
    let { id } = this.props.match.params;
    console.log('loading task');
    if (id == "t") {
      return (
        <div>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/s/eduman/t/:taskid" component={TaskLoader} />
            </Suspense>
          </Switch>
        </div>
      );
    }

    if (id == "tg") {
      console.log('loading tagggg')
      return (
        <div>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/s/eduman/tg/:tgid" component={TagLoader} />
            </Suspense>
          </Switch>
        </div>
      );
    }

    const Tags = React.lazy(() => import('./tagsboard'));
    let {designation} = this.props;
    return (
      <div>
        <BreadcrumbsItem to={"/s/eduman/" + id}>{id}</BreadcrumbsItem>
        <Switch>
          <Route path="/s/eduman/:id" render={(props) => <Tags {...props} designation={designation}/>} />
        </Switch>
      </div>
    );
  }
}

class TagLoader extends Component {

  render() {
    let { tgid } = this.props.match.params;
    const Tag = React.lazy(() => import('./' + tgid));
    console.log('tag loader working' + tgid);
    return (
      <duv>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/s/eduman/:id/tg/:tgid" component={Tag} />
          <Route path="/s/eduman/tg/:tgid" component={Tag} />
        </Suspense>
      </duv>
    );
  }
}



export default InstituteDashboard;