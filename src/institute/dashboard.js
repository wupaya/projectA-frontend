import React, {Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class InstituteDashboard extends Component{

    state = {associated:["brur","rgc"]}

    render(){
        let {componentid} = this.props.match.params;
        //console.log('component id'+JSON.stringify(this.props.match))
        let {id} = this.props.match.params;
        //console.log(' id'+id)
        const Welcome = React.lazy(() => import('./'+ 'welcome'));
        if(componentid!=null){
          return ("something went wrong");
        }
        const View = React.lazy(() => import('./'+ componentid));
      
        
        return(
            <div>
            <BreadcrumbsItem
      to='/private/service/eduman'
      icon='account-box'
    >
      EDUMAN
    </BreadcrumbsItem>
             <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                
                <Route path="/private/service/eduman/:id" component={TaskGroup}/>
                <Route exact
                  path='/private/service/eduman'
                  render={(props) => <Welcome {...props} associated={this.state.associated} />}
                /> 
                
            </Switch>
             </Suspense>
            </div>
        );
    }
}

class TaskGroup extends Component{



    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  

    render(){
      
         let {id} = this.props.match.params;
          return(

              <div>
              <BreadcrumbsItem to={"/private/service/eduman/"+id}>{id}</BreadcrumbsItem>
              <h3>Now managing: {id}</h3>
              <hr />
              <Switch>
              <Route path="/private/service/eduman/:id/tg/:componentid" component={TagDetails}/>
              <Route exact path="/private/service/eduman/:id" component={Tags}/>
              </Switch>
              </div>
          );
    }
}

class Tags extends Component{
  state = {
    console_tags:[
      {tag_id:1, tag_nice_id:"ins_people",title:"Manage People",description:"Manage all of your people here"},
      {tag_id:2, tag_nice_id:"ins_responsibilities",title:"Manage Responsibility",description:"Manage the responsibility of people"},
      {tag_id:3,tag_nice_id:"ins_requests",title:"Manage Requests",description:"Manage requests for approval"},
      {tag_id:4,tag_nice_id:"ins_analysis",title:"Manage Analysis",description:"Manage analysis here"},
      {tag_id:5,tag_nice_id:"ins_public_page_tag",title:"Manage Public Page",description:"Manage Public Page"},
  {tag_id:6,tag_nice_id:"ins_tag_class",title:"Manage classroom",description:"Manage classroom"}
    ]
  }

  generate_link_ref(tagid, nice_tag_id){
    let {id} = this.props.match.params;
  return { pathname: "/private/service/eduman/"+id+"/tg/"+nice_tag_id};
  }
  render(){
    let {console_tags} = this.state;
    return(
      <div>
              <p>What you would like to do?</p>
              {console_tags.map((key, index) => {
                return <div class="p-2 bd-highlight">
                <Link to={this.generate_link_ref(key["tag_id"], key["tag_nice_id"])}>{key["title"]}</Link>
                <p class="card-text">{key["description"]}</p>
                </div>;
              })}

              <hr />
              <Link to="/private/service/eduman/:id/ins_people">Help me to start</Link>
              </div>
    )
  }
}

class TagDetails extends Component{
    render(){
      let {componentid} = this.props.match.params;
        console.log('component id'+JSON.stringify(this.props.match))
        if(componentid==null){
          return ("something went wrong");
        }
        const View = React.lazy(() => import('./'+ componentid));
        return <div>
        <Suspense fallback={<div>Loading...</div>}>
            <View match={this.props.match}/>
        </Suspense>
      </div>;
    }
}

export default InstituteDashboard;
