import React, { Component } from 'react';
import './SearchPage.css';
import Quicklinks from './Quicklinks/Quicklinks';
import Autocomplete from '../Common/Autocomplete/Autocomplete';
import {ClearAllFilters} from '../../Service/ManageFilters';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linksList: ['state',
            'city',
            'eye_color',
            'language']
        }
        ClearAllFilters();
        this.goToResultsPage = this.goToResultsPage.bind(this);
    }
    goToResultsPage() {
        this.history.push('/results');
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
                    {this.state.linksList.map((link) =>
                        <div className="col-lg-3">
                            <Quicklinks type={link} history={this.props.history} onClick={this.goToResultsPage} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
