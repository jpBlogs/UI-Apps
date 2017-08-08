import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './Autocomplete.css';
import { GetSuggestions } from '../../../Service/DataService';
import { AddFilter, GetFilter, ClearAllFilters } from '../../../Service/ManageFilters';

export default class Autocomplete extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            selectValue: null,
            clearable: true,
            searchable: true,
            disabled: false
        }
    }
    getOptions (input, callback) {
        GetSuggestions(input).then((data) => callback(data, {
                options: data
            })
        );
    }
    setTextFilter (value) {
        ClearAllFilters();
        AddFilter(value.value, 'full_name', value.label);
        this.props.onChange();
    }
    render () {
        return (
            <Select.Async
                className="Autocomplete"
                name="autocomplete"
                loadOptions={this.getOptions}
                clearable={this.state.clearable} 
                value={this.state.selectValue} 
                onChange={(data) => {this.setTextFilter(data)}} 
                searchable={this.state.searchable}
                disabled={this.state.disabled}  
            />
        );
    }
}
