import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';



class RemoveStuff extends Component{
  render(){
    return(
      <div>
      <p>
        Which stuff you want to deactivate?
      </p>
      </div>
    );
  }
}


export default RemoveStuff;
