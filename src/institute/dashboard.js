import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from './ins_common_lib';


/*This is the service reception. It shows associated institute lists and allow creating new page.*/
class InstituteDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected_designation: "",
      associated: [
        {
          id: 1, short_name: "BRUR", long_name: "Begum Rokeya University, Rangpur",
          status: "joined",
          join_date: "July 1st 2019",
          allowed_services: [
            { id: 1, designation: "Parent" },
            { id: 2, designation: "Teacher" }
          ]
        },
        {
          id: 2, short_name: "RGC", long_name: "Rangpur Govt. College, Rangpur",
          status: "sent_join_request",
          join_date: "July 1st 2019",
          allowed_services: []
        },
      ]
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