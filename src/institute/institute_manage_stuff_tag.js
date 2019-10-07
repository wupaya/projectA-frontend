import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';


export class ShowStuffList extends Component{

    render(){
      var id = "BRUR";
        return(
            <div>
            <div>
            </div>
                <p>Showing the stuffs who are active</p>
                <Table />
                <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-left">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
<div>
<p>Actions</p>
<ul>
    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_stuff_overview" }}>Show me stuffs overview</Link></li>
    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_stuff_list" }}>Show me list of all stuffs</Link></li>
    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=add_stuff" }}>I want to add new stuff</Link></li>
</ul>
</div>
            </div>
        );
    }
}

export class ManageStuff extends Component{
    render(){
        let {id} = this.props;

        return(
            <div>
                <p>Stuff Overview</p>
                <hr />
                <p>You have <a href="#" className="btn btn-outline-primary">20 active stuff,</a>
                 <a href="#" className="btn btn-outline-primary">5 stuff on leave</a> and
                 <a href="#" className="btn btn-outline-primary">1 sent invitation</a> pending to be accepted.</p>
                <hr />
                <p>What you would like to do?</p>
                <ul>
                    <li>Show me stuffs who are
                      <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_stuff_overview&filter=active" }}> Active</Link>/
                      <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_stuff_overview&filter=on_leave" }}>On Leave</Link>/
                      <Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=show_stuff_overview&filter=pending_invitation" }}>Sent Invitation Request</Link>
                    </li>
                    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=add_stuff" }}>I want to add new stuff</Link></li>
                    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=remove_stuff" }}>I want to remove stuff</Link></li>
                    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=edit_stuff" }}>I want to change the responsibility & permission of stuff</Link></li>
                    <li><Link to={{ pathname: "/private/service/eduman/"+id, search: "?action=stuff_details" }}>I want to know stuff details</Link></li>
                </ul>
                <hr />
                <p><Link to="#">I would like to know how the stuffs are doing</Link></p>
            </div>
        );



    }
}


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

class Table extends Component {
    render() {
        return (
               <table className="table table-hover">
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
                        <th>Designation</th>
                        <th>Status</th>
                    </tr>
                </thead>
			)
	}
}
class TableBody extends Component{
  state = {
      data:[
        {name: "Mr. X",
         designation: "IT Manager",
       status: "invited"},
        {name: "Mr. Y",
         designation: "Office assistant",
       status: "on leave"},
        {name: "Mr. Y",
         designation: "Senior Teacher",
       status: "active"},
        {name: "Mr. Y",
         designation: "Assitant Teacher",
       status: "active"},
        {name: "Mr. Y",
         designation: "Office assistant",
       status: "active"},
      ]
  };
	render () {
    let {data} = this.state;
    var data_view = data.map((key, index)=>{return <tr>
      <td>{key["name"]}</td>
      <td>{key["designation"]}</td>
      <td>{key["status"]}</td>
    </tr>});
		return(
			<tbody>
				{data_view}
			</tbody>
		)
	}
}


export class RemoveStuff extends Component{
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


export class EditStuff extends Component{
  render(){
    return(
      <div>
      </div>
    );
  }
}


export class StuffDetails extends Component{
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
