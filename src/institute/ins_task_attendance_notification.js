import React, {Component} from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';

export class ManageNotice extends Component{
    render(){
        let {id} = this.props.match.params;
        return(
            <div>
                <p>Summary</p>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Default radio
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" for="exampleRadios2">
                        Second default radio
                    </label>
                    </div>
                </div>

            </div>
        );
    }
}
