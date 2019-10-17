import React, {Component, Suspense} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { withRouter} from "react-router-dom";
import {NavBar, Footer} from '../lib/commons';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

class Page1 extends Component{
  state ={
    page:{
      nuid:1231,
      sid:"begum_rokey_univ",
      title: "Department of Computer Science and Engineering",
      subtitle: "One of the Departments at Begum Rokeya University, Rangpur",
      contact:"",
      short_description:"",
      quick_overview:"It is founded in 2008. At present 250 students are enrolled in this discipline. There are 10 world class faculty memebers.",
      lastest_events:[
        {title:"News: CSE BRUR started using IMS system.",details_link:"#"},
        {title:"Event: Inter batch programming contest on sunday, 9th oct.",details_link:"#"},
        {title:"Circular: Admission is open",details_link:"#"},
        {title:"Notice: New Policy for Scholarship.",details_link:"#"}
      ],
    sections:[
      {nuid: 1,comid:"contact", description:"Contact us"},
      {nuid: 2,comid:"gallery", description:"Visit galleries"},
      {nuid: 3,comid:"events", description:"Show events"},
      {nuid: 4,comid:"notices", description:"Can't find what I'm looking for."}
    ]
    }
  }
    onLogOutHangle(){
      Cookies.remove("token");
    }

    render(){
        let {page} = this.state;
        //{this.props.match.params.id}
        
        return(
        <div className="container">
            <NavBar onLogOut={this.onLogOutHangle.bind(this)} />
            <PageHeader pagedata={page}/>
            <ViewSelectorRouter pagedata={page}/>
            <div className="row">
                <Footer />
            </div>
        </div>
        );
    }
}

const Page = withRouter(Page1);
export default Page;

class ViewSelector extends Component{
  render(){
        let {location, pagedata} = this.props;
        let params = new URLSearchParams(location.search);
        var action = params.get("action")
        var viewid = params.get("viewid")

        var baseview = "";

        if(action=="page"){
            if(viewid==null){
              return <p>Something went wrong.</p>
            }
            const View = React.lazy(() => import('./page/'+ viewid));
            return(<Suspense fallback={<div>Loading...</div>}>
                  <View match={this.props.match}/>
              </Suspense>)
        }
        return <PageBase pagedata={pagedata}/>;
        
  }
}

const ViewSelectorRouter = withRouter(ViewSelector);

class PageHeader extends Component{
  render(){
    let {pagedata} = this.props;
    var page = pagedata;
    return(
      <div className="row">
      <div class="col-lg-2">
          <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
      </div>
      <div class="col-lg-10">
        <h2>{page.title}</h2>
        <p>{page.subtitle}</p>
        <hr />
        <Breadcrumbs
          separator={<b> / </b>}
          item={NavLink}
          finalItem={"b"}
          finalProps={{
            style: {}
          }}
        />
        <BreadcrumbsItem to="/public/:id">Base</BreadcrumbsItem>
      </div>
    </div>
    )
  }
}

class PageBase extends Component{

  render(){
    let {pagedata} = this.props;
    var page = pagedata;
    return(
      <div>
            <div className="row">
              <div class="col-lg-12">
                <hr />
                <h5>Quick Overview</h5>
                <p>{page.quick_overview}</p>
                <hr />
                <h5>Latest Events</h5>
                
                <ul>
                  {page.lastest_events.map((key, index)=>{return <li><Link to={{ pathname: "/private/service/eduman/"+"brur", search: "?action=page&taskid="+"todo" }}>{key["title"]}</Link></li>})}
                </ul>
                <hr />
                <h5>What are you looking for?</h5>
                
                <ul>
                  {page.sections.map((key, index)=>{return <li><Link to={{ pathname: "/public/:id", search: "?action=page&viewid="+key["comid"] }}>{key["description"]}</Link></li>})}
                </ul>
                </div>
            </div>
      </div>
    );
  }
}