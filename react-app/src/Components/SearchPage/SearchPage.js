import React, { Component } from 'react';
import './SearchPage.css';
import Quicklinks from './Quicklinks/Quicklinks';
import Autocomplete from '../Common/Autocomplete/Autocomplete';
import {ClearAllFilters} from '../../Service/ManageFilters';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        ClearAllFilters();
    }
    renderQuicklinks(name) {
        return <Quicklinks name={name} history={this.props.history} onClick={this.goToResultsPage} />;
    }
    goToResultsPage() {
        window.location.href = '/results';
    }
    render () {
        return (
            <div id="SearchPage container-fluid">
                <div className="SearchPage-AutoCompleteDiv row">
                    <div className="col-lg-12">
                        <div className="col-lg-1"><h4>Search:</h4></div> 
                        <div className="col-lg-11"><Autocomplete onChange={this.goToResultsPage} /></div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        {this.renderQuicklinks('state')}
                    </div>
                    <div className="col-lg-3">
                        {this.renderQuicklinks('city')}
                    </div>
                    <div className="col-lg-3">
                        {this.renderQuicklinks('eye_color')}
                    </div>
                    <div className="col-lg-3">
                        {this.renderQuicklinks('language')}
                    </div>
                </div>
            </div>
        );
    }
}
