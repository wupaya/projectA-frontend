import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';



class ManageStuff extends Component{
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

export default ManageStuff;
/*
add stuff use case:

user enter phone number
system sends numeric code by message with short instruction
receiver use numeric key to get invitaion

*/
