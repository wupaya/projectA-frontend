import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';

class StuffDetails extends Component{
  render(){
    let {id} = this.props;
    return(
      <div>
      <h3>What specific information you would like to know?</h3>
      TODO: SEARCHBOX
      <hr />
      <h3>
          Showing details of Mr. X
      </h3>
      <p>name</p>
      <p>phone no:</p>
      <p>address</p>
      <p>Designation</p>
      <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_people_analysis&people_id=123" }}>Show performance analysis</Link>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <hr />
      <p>
      The following information is shared with you.
      </p>
      <h3></h3>
      </div>
    );
  }
}


export default StuffDetails;
