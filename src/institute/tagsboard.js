import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { TaskLoader } from './ins_common_lib';

class Tags extends Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(this.props.location.search)
        console.log(params.get("designation"))
        //for admin
        let { designation } = this.props;
        console.log(designation + ' in tags');
        this.state = {
            associations: ["Headmaster", "Parent"],
            designation: "Headmaster",
            console_tags: [
                { tag_id: 1, tag_nice_id: "ins_people", title: "Manage People", description: "Manage all of your people here" },
                { tag_id: 2, tag_nice_id: "ins_responsibilities", title: "Manage Responsibility", description: "Manage the responsibility of people" },
                { tag_id: 3, tag_nice_id: "ins_requests", title: "Manage Requests", description: "Manage requests for approval" },
                { tag_id: 4, tag_nice_id: "ins_analysis", title: "Manage Analysis", description: "Manage analysis here" },
            ],
            next_offset: 5
        }/*
        for headmaster
        console_tags: [
                { tag_id: 1, tag_nice_id: "ins_people", title: "Manage People", description: "Manage all of your people here" },
                { tag_id: 2, tag_nice_id: "ins_responsibilities", title: "Manage Responsibility", description: "Manage the responsibility of people" },
                { tag_id: 3, tag_nice_id: "ins_requests", title: "Manage Requests", description: "Manage requests for approval" },
                { tag_id: 4, tag_nice_id: "ins_analysis", title: "Manage Analysis", description: "Manage analysis here" },
                { tag_id: 5, tag_nice_id: "ins_public_page_tag", title: "Manage Public Page", description: "Manage Public Page" },
                { tag_id: 6, tag_nice_id: "ins_tag_class", title: "Manage classroom", description: "Manage classroom" }
            ],
                {
                    designation: "Teacher",
                    console_tags: [
                        { tag_id: 1, tag_nice_id: "ins_tag_class", title: "Class Management", description: "Manage thing in classroom such as take attendance, report parent" },
                        { tag_id: 2, tag_nice_id: "ins_tag_notifications", title: "Notifications", description: "Manage notifications" },
                        { tag_id: 2, tag_nice_id: "ins_tag_analysis", title: "Analysis", description: "Get various analysis" },
                    ]
                },
                {
                    designation: "Parent",
                    console_tags: [
                        { tag_id: 1, tag_nice_id: "ins_reports", title: "Reports", description: "Get reports about on your children." },
                        { tag_id: 2, tag_nice_id: "ins_notifications", title: "Notifications", description: "Manage notifications" },
                        { tag_id: 2, tag_nice_id: "ins_notifications", title: "Results", description: "Manage results" },
                    ]
                }*/
    }

    generate_link_ref(tagid, nice_tag_id) {
        let { id } = this.props.match.params;
        return { pathname: "/s/eduman/" + id + "/tg/" + nice_tag_id };
    }

    render() {
        let { console_tags } = this.state;
        let { designation, associations } = this.state;
        let { id } = this.props.match.params;
        var switch_tasks = "";

        if(associations.length>1){
        switch_tasks = <p>Show tasks for { associations.map((key, index)=>{return <Link to="#">{key+" "}</Link> })} </p>
        }

        var load_more_task = "";

        if(true){
            load_more_task = <div class="list-group-item list-group-item-action">
            <Link to="#"> ------- Load More Task for {designation} -------</Link>
            <p class="mb-1">There are 4 more tasks available</p>
        </div>;
        }

        return (
            <div>
                <div className="row">
                    <div class="col-md-auto">
                        <p>You are associated with {id} as { associations.map((key, index)=>{return <b>{key+", "}</b>})}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div class="col col-lg-4">
                        <p>Showing tasks for <b>{designation}</b></p>
                    </div>
                    <div class="col-md-auto">
                    {switch_tasks}
                    </div>
                </div>

                <hr />
                <Switch>
                    <Route exact path="/s/eduman/:id">
                        <p>What you would like to do?</p>
                        <div class="list-group">
                        {console_tags.map((key, index) => {
                            return <div class="list-group-item list-group-item-action">
                                <Link to={this.generate_link_ref(key["tag_id"], key["tag_nice_id"])}>
                                {key["title"]}
                                
                                </Link>
                                <p class="mb-1">{key["description"]}</p>
                            </div>;
                        })}
                        {load_more_task}
                        </div>
                        <hr />
                        <Link to="#">Help me to start</Link>
                    </Route>
                    <Route path="/s/eduman/:id/tg/:tgid" component={TagLoader} />
                </Switch>
            </div>
        )
    }
}


class SwitchService extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class TagLoader extends Component {

    render() {
        let { tgid } = this.props.match.params;
        const Tag = React.lazy(() => import('./' + tgid));
        console.log('tag loader working' + tgid);
        return (
            <duv>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/s/eduman/:id/tg/:tgid" component={Tag} />
                    <Route path="/s/eduman/tg/:tgid" component={Tag} />
                </Suspense>
            </duv>
        );
    }
}

export default Tags;