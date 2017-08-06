import { GetFilters } from './ManageFilters';

export const GetSuggestions = (input) => {
  return fetch(`/mock_data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
        var suggestions = [];
        data.forEach(function(element) {
            if(element.full_name.toLowerCase().includes(input)){
                suggestions.push({label: element.full_name, value: element.id});
            }
        }, this);
        return suggestions;
    });
}

export const GetQuicklinks = (name) => {
  return fetch(`/mock_data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
        var links = [];
        var header;
        data.forEach(function(element) {
            if(links.indexOf(element[name]) < 0 && links.length <= 10) {
                links.push(element[name]);
            }
        }, this);
        switch(name){
            case 'state': header = 'State'; break;
            case 'city': header = 'City'; break;
            case 'eye_color': header = 'Eye Color'; break;
            case 'language': header = 'Language'; break;
            default: break;
        }
        return { 
            display_name: header, 
            internal_name: name, 
            values: links
        };
    });
}

export const GetResults = () => {
  return fetch(`/mock_data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
        var results = [];
        var filters = GetFilters();
        filters.forEach(function(filter) {
            data.forEach(function(element) {
                if(element[filter.internal_name] === filter.value) {
                    if(results.indexOf(element) < 0){
                        results.push(element);
                    }
                }
            }, this);
        });
        return results;
    });
}

export const GetResultById = (id) => {
  return fetch(`/mock_data.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => response.json())
    .then((data) => {
        for(var i=0; i<data.length; i++){
            var element = data[i];
            if(element.id === id){
                return element;
            }
        }
    });
}
