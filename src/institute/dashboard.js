import React, {Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";


class InstituteDashboard extends Component{

    state = {associated:["brur","rgc"]}

    render(){
        const Welcome = React.lazy(() => import('./'+ 'welcome'));
        //const TaskGroup = React.lazy(() => import('./institute/'+ 'welcome'));
        return(
            <div>
            <BreadcrumbsItem
      to='private/service/eduman'
      icon='account-box'
    >
      EDUMAN
    </BreadcrumbsItem>
             <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/private/service/eduman/:id" component={TaskGroup}/>
                <Route
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

    state = {
      console_tags:[
        {tag_id:1, tag_nice_id:"ins_people",title:"Manage People",description:"Manage all of your people here"},
        {tag_id:2, tag_nice_id:"ins_responsibilities",title:"Manage Responsibility",description:"Manage the responsibility of people"},
        {tag_id:3,tag_nice_id:"ins_requests",title:"Manage Requests",description:"Manage requests for approval"},
        {tag_id:4,tag_nice_id:"ins_analysis",title:"Manage Analysis",description:"Manage analysis here"}
      ]
    }

    generate_link_ref(tagid, nice_tag_id){
      let {id} = this.props.match.params;
      return { pathname: "/private/service/eduman/"+id, search: "?action=details_console_tag&tag_id="+tagid+"&component="+nice_tag_id };
    }

    render(){
        let {id} = this.props.match.params;
        let {console_tags} = this.state;
        let {location} = this.props;
        let params = new URLSearchParams(location.search);
        var action = params.get("action")
        var component = params.get("component")
        var task = params.get("taskid")
       if(action=="details_console_tag"){
           const Test = React.lazy(() => import('./'+ component));
           return <div>
             <Suspense fallback={<div>Loading...</div>}>
                <Test match={this.props.match}/>
             </Suspense>
           </div>;

       }
       else if(action=="task"){
           const Test = React.lazy(() => import('./'+ task));
           return <div>
             <Suspense fallback={<div>Loading...</div>}>
                <Test match={this.props.match}/>
             </Suspense>
           </div>;

       }
       else if(action!=null){
         return(
           <h3>The feature might be under development.</h3>
         );
       }

        return(
            <div>
            <BreadcrumbsItem to="/private/service/eduman/:id">{id}</BreadcrumbsItem>
            <h3>Now managing: {id}</h3>
            <hr />
            <p>What you would like to do?</p>
            {console_tags.map((key, index) => {
              return <div class="p-2 bd-highlight">
              <Link to={this.generate_link_ref(key["tag_id"], key["tag_nice_id"])}>{key["title"]}</Link>
              <p class="card-text">{key["description"]}</p>
              </div>;
            })}

            <hr />
            <Link to="#">Help me to start</Link>
            </div>
        );
    }
}


export default InstituteDashboard;
