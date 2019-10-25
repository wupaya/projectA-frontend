import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";




class CreateInstitutePageForm extends Component {

    cancel(e) {
        e.preventDefault();
        this.props.onCancel();
    }

    create_page(e) {
        e.preventDefault();
        var auth_token = Cookies.get("token");
        const url = 'http://13.232.5.188/api/public_page/';
        //const url ='http://localhost:8000/public_page/';

        $.ajax({
            url: url,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Token " + auth_token);
            },
            dataType: 'json',
            //cache: false,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ "page_title": "begum rokeya university, rangpur 2", "type_of_institute": "university", "founding_date": "2008", "address_district": "rangpur", "address_upozila": "sadar", "no_of_stakeholder": "20", "description": "this is a test page" }),
            success: function (data) {
                //this.setState({data: data});
                //this.setState({loggedin: true});
                //this.onlogin(data);
                console.log("on log in");
                this.props.onCreatePage(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                this.props.onCreatePage(err);
                //console.log(status);
                //console.log(err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <BreadcrumbsItem to={"/s/eduman/tg/:tgid/t/" + "ins_task_create_page"}>Join By Request</BreadcrumbsItem>
                <p>Please select one or more from the following which best explain your involvement with this institution.</p>
                <form>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            I'm just a follower.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                        <label class="form-check-label" for="defaultCheck2">
                            I'm just a Parent.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                        <label class="form-check-label" for="defaultCheck3">
                            I'm just a Teacher.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                        <label class="form-check-label" for="defaultCheck4">
                            I'm just a Principle/VC.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                        <label class="form-check-label" for="defaultCheck5">
                            I'm just a Ex student/Current Student.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                        <label class="form-check-label" for="defaultCheck6">
                            I'm just a Commeettiee Member.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck7" />
                        <label class="form-check-label" for="defaultCheck7">
                            I'm just a Administration Stuff.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                        <label class="form-check-label" for="defaultCheck8">
                            I'm just involve in speacial way.
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notes</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={(e) => this.create_page(e)}>Send Request</button> <span></span>
                    <button className="btn btn-primary" type="submit" onClick={(e) => this.cancel(e)}>Cancel</button>
                </form>
            </div>
        );
    }
}


export default CreateInstitutePageForm;