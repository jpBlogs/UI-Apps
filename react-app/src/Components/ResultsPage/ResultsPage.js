import React, { Component } from 'react';
import { GetFilters } from '../../Service/ManageFilters';
import { GetResults } from '../../Service/DataService';
import { Button } from 'react-bootstrap';
import Autocomplete from '../Common/Autocomplete/Autocomplete';

import './ResultsPage.css';

export default class ResultsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [],
            results: []
        }
    }
    componentDidMount(){
        this.updateResultsPage();
    }
    updateResultsPage() {
        GetResults().then((data) => {this.setState({results: data})});
        this.setState({filters: GetFilters()});
    }
    goToDetails(id){
        this.props.history.push(`/details/${id}`);
    }
    render () {
        return (
            <div className="ResultsPage container-fluid">
                <div className="ResultsPage-AutoCompleteDiv row">
                    <div className="col-lg-12">
                        <div className="col-lg-1"><h4>Search:</h4></div> 
                        <div className="col-lg-11"><Autocomplete /></div> 
                    </div>
                </div>
                <div className="ResultsPage-Toolbar row col-lg-12">
                    <Button onClick={this.props.history.goBack}>Back</Button>
                </div>
                <div className="ResultsPage-Header row col-lg-12">
                    <h1>Results: {this.state.results.length}</h1>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                        <p>Filter:</p>
                    </div>
                    <div className="col-lg-11">
                        {this.state.filters.map((filter) => 
                            <div className="ResultsPage-Filters">
                                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>{' '+filter.value}
                            </div>
                        )}
                    </div>
                </div>
                <div className="ResultsPage-List row">
                    {this.state.results.map((listItem) =>
                        <div className="ResultsPage-ListItem col-lg-12">
                            <div className="panel panel-default">
                            <div className="panel-heading" onClick={() => this.goToDetails(listItem.id)}>{listItem.full_name}</div>
                                <div className="panel-body">
                                    <div className="col-lg-4">City: {listItem.city}</div>
                                    <div className="col-lg-4">State: {listItem.state}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}