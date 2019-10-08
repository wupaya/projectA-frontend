import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';

/*
add stuff use case:

user enter phone number
system sends numeric code by message with short instruction
receiver use numeric key to get invitaion

*/

export class AddStuff extends Component{

    render(){
        return(
        <div>
                <form>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Enter Stuff Phone No</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="Enter Stuff Phone No"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Enter Designation</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="name" placeholder="i. e. IT assistant"/>
                </div>
              </div>

              <button className="btn btn-primary"  type="submit" onClick={(e)=> this.create_page(e)}>Send Invitation</button> <span></span>
              <button className="btn btn-primary"  type="submit" onClick={(e)=>this.cancel(e)}>Cancel</button>
                </form>
                <hr />

                <a href="#">Show me more ways to invite</a>
            </div>
        );
    }
}

class AddManyStuff extends Component{

  state = {
    data:[
      {invite_code:"426483", expires:"1/2/2019", status:"Pending Expires in 5 days."},
      {invite_code:"426483", expires:"1/2/2019", status:"Pending"},
      {invite_code:"426483", expires:"1/2/2019", status:"Accepted on 5th January"},
      {invite_code:"426483", expires:"1/2/2019", status:"Pending"},
      {invite_code:"426483", expires:"1/2/2019", status:"Rejected"},
      {invite_code:"426483", expires:"1/2/2019", status:"Expired 2 days ago"}
    ]
  }

  render(){
    let {data} = this.state;
    return(
      <div>
        <p>

        </p>
        <table className="table">
          {data.map((key, index)=>{ return <tr><td>{key["invite_code"]}</td><td>{key["status"]}</td></tr>})}
        </table>
      </div>
    );
  }
}

export default AddStuff;
