import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

export class ShowStuffList extends Component{

    render(){
      var id = "BRUR";
        return(
            <div>
              <BreadcrumbsItem to="/private/service/eduman/brur?action=details_console_tag">Show stuff</BreadcrumbsItem>
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

export default ShowStuffList;
