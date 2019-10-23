import React, {Component, Suspense } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";


class Welcome extends Component{
    state ={show_page_create_form:false, message:"Create a page",isLoggedIn:true}
    render(){
        let {associated} =  this.props;

        if(associated.length == 0){
            return(
                <div>
                    <p>You are not associated with any institute yet.</p>
                    <hr />
                    <Link to="/s/eduman/tg/ins_tag_join_institute">Join an Institute</Link>
                </div>
            );
        }
        return(
            <div>
                <p>Your are associated with</p>
                <hr />
                <ul>
                {
                associated.map((entry, index) => {
                    return <li key={index}>You joined <Link to={{ pathname: "/s/eduman/"+entry["short_name"]}}>{entry["long_name"]}</Link> as {entry["designation"]}</li>
                })
                }
                </ul>
                <hr />
                <p><Link to="/s/eduman/tg/ins_tag_join_institute">Join more institute</Link></p>
            </div>
        );
    }
}

export default Welcome;