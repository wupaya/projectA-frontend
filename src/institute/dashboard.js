import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from './ins_common_lib';


/*This is the service reception. It shows associated institute lists and allow creating new page.*/
class InstituteDashboard extends Component {
  
  state = { 
    associated: [
      {id: 1, short_name:"BRUR", long_name:"Begum Rokeya University, Rangpur", designation:"Parent"},
      {id: 2, short_name:"RGC", long_name:"Rangpur Government College, Rangpur", designation:"Parent"},
    ]
  }
  /*

  state = { 
    associated: []
  }
  */

  render() {
    let { componentid } = this.props.match.params;
    console.log('component id' + JSON.stringify(this.props.match))
    let { id } = this.props.match.params;
    //console.log(' id'+id)
    const Welcome = React.lazy(() => import('./' + 'welcome'));
    if (componentid != null) {
      return ("something went wrong");
    }
    const View = React.lazy(() => import('./' + componentid));

    return (
      <div>
        <BreadcrumbsItem to='/s/eduman' icon='account-box' > Education Management</BreadcrumbsItem>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/s/eduman' render={(props) => <Welcome {...props} associated={this.state.associated} />} />
            <Route path="/s/eduman/:id" component={InsDahsboard} />
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
    if(id=="t"){
      return(
        <div>
          <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/s/eduman/t/:taskid" component={TaskLoader} />
        </Suspense>
        </Switch>
      </div>
      );
    }

    if(id=="tg"){
      console.log('loading tagggg')
      return(
        <div>
          <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/s/eduman/tg/:tgid" component={TagLoader} />
        </Suspense>
        </Switch>
      </div>
      );
    }

    const Tags = React.lazy(()=>import('./tagsboard'));

    return (
      <div>
        <BreadcrumbsItem to={"/s/eduman/" + id}>{id}</BreadcrumbsItem>
        <h3>Now managing: {id}</h3>
        <hr />
        <Switch>
          <Route path="/s/eduman/:id" component={Tags} />
        </Switch>
      </div>
    );
  }
}






class TagLoader extends Component{
  
  render(){
    let {tgid} = this.props.match.params;
    const Tag = React.lazy(() => import('./' + tgid));
    console.log('tag loader working' + tgid);
    return(
      <duv>
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/s/eduman/:id/tg/:tgid" component={Tag}/>
            <Route path="/s/eduman/tg/:tgid" component={Tag}/>
        </Suspense>
      </duv>
    );
  }
}



export default InstituteDashboard;