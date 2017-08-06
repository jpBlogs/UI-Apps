import React, { Component } from 'react';
import { Button, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { GetResultById } from '../../Service/DataService';

import './DetailsPage.css';

export default class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        GetResultById(parseInt(this.props.match.params.id, 10)).then((data) => this.setState(data));
    }
    render () {
        return (
            <div className="DetailsPage col-lg-12">
                <div className="panel panel-default">
                    <div className="DetailsPage-Toolbar col-lg-12 panel-heading">
                        <div className="col-lg-8">
                            <h1>{this.state.full_name}</h1>
                        </div>
                        <div className="DetailsPage-BackBtn col-lg-4">
                            <Button onClick={this.props.history.goBack}>Back</Button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <Tab.Container defaultActiveKey="details">
                            <Row className="clearfix">
                                <Col sm={4}>
                                    <Nav bsStyle="pills" stacked>
                                        <NavItem eventKey="details">
                                            Personal Information
                                        </NavItem>
                                        <NavItem eventKey="locations">
                                            Location Information
                                        </NavItem>
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content className="DetailsPage-TabContent" animation>
                                        <Tab.Pane eventKey="details">
                                            <div className="col-lg-12">
                                                <p>First Name: {this.state.first_name}</p>
                                                <p>Last Name: {this.state.last_name}</p>
                                                <p>Language: {this.state.language}</p>
                                                <p>Email: {this.state.email}</p>
                                                <p>Gender: {this.state.gender}</p>
                                                <p>Eye Color: {this.state.eye_color}</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="locations">
                                            <div className="col-lg-12">
                                                <p>City: {this.state.city}</p>
                                                <p>State: {this.state.state}</p>
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