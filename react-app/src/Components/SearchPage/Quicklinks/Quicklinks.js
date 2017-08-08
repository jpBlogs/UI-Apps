import React, { Component } from 'react';
import './Quicklinks.css';
import { GetQuicklinks } from '../../../Service/DataService';
import { AddFilter } from '../../../Service/ManageFilters';
import { Button } from 'react-bootstrap';

export default class Quicklinks extends Component {
    componentDidMount(){
        GetQuicklinks(this.props.type).then((data) => {this.setState(data);});
    }
    selectQuicklink(display_name, internal_name, value) {
        AddFilter(display_name, internal_name, value);
        this.props.history.push('/results');
    }
    render () {
        if(this.state === null || typeof(this.state) === 'undefined'){
            return <p>loading...</p>;
        }
        else {
            return (
                <div className="Quicklinks">
                    <div className="panel panel-default">
                        <div className="panel-heading">{this.state.display_name}</div>
                        <div className="panel-body">
                            <ul className="Quicklinks-List">
                                {this.state.values.map((link) =>
                                    <li><Button onClick = {() => {this.selectQuicklink(this.state.display_name, this.state.internal_name, link);}} bsStyle="link">{link}</Button></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}