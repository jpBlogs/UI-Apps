import React, { Component } from 'react';
import { Button, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { GetResultById } from '../../Service/DataService';

import './DetailsPage.css';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'details',
            result: null
        };
    }
    componentDidMount(){
        GetResultById(parseInt(this.props.match.params.id, 10)).then((data) => this.setState({result: data}));
        if(typeof(this.props.match.params.tab) !== 'undefined')
            this.setState({selectedTab : this.props.match.params.tab});
        console.log(this.props.match.params.id + ' ' + this.props.match.params.tab);
    }
    changeTab(id){
        this.setState({selectedTab: id});
    }
    render () {
        if(this.state.result === null) {
            return (
                <div>
                    <div className="DetailsPage col-lg-12">
                        <div className="panel panel-default">
                            <div className="DetailsPage-Toolbar col-lg-12 panel-heading">
                                Loading...
                            </div>
                            <div className="panel-body">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="DetailsPage col-lg-12">
                <div className="panel panel-default">
                    <div className="DetailsPage-Toolbar col-lg-12 panel-heading">
                        <div className="col-lg-8">
                            <h1>{this.state.result.full_name}</h1>
                        </div>
                        <div className="DetailsPage-BackBtn col-lg-4">
                            <Button onClick={this.props.history.goBack}>Back</Button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <Tab.Container activeKey={this.state.selectedTab}>
                            <Row className="clearfix">
                                <Col sm={4}>
                                    <Nav bsStyle="pills" stacked>
                                        <NavItem eventKey="details" onClick={() => this.changeTab('details')}>
                                            Personal Information
                                        </NavItem>
                                        <NavItem eventKey="location" onClick={() => this.changeTab('location')}>
                                            Location Information
                                        </NavItem>
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content className="DetailsPage-TabContent" animation>
                                        <Tab.Pane eventKey="details">
                                            <div className="col-lg-12">
                                                <p>First Name: {this.state.result.first_name}</p>
                                                <p>Last Name: {this.state.result.last_name}</p>
                                                <p>Language: {this.state.result.language}</p>
                                                <p>Email: {this.state.result.email}</p>
                                                <p>Gender: {this.state.result.gender}</p>
                                                <p>Eye Color: {this.state.result.eye_color}</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="location">
                                            <div className="col-lg-12">
                                                <p>City: {this.state.result.city}</p>
                                                <p>State: {this.state.result.state}</p>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        );
    }
}