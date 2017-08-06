export const GetFilters = () => {
    return getItemFromLocalStorage('filters');
}

export const AddFilter = (display_name, internal_name, value) => {
    var filters =  getItemFromLocalStorage('filters');
    filters.push({ 'display_name': display_name, 'internal_name': internal_name, 'value': value });
    SaveFilters(filters);
}

export const GetFilter = (internal_name) => {
    var filters =  getItemFromLocalStorage('filters');
    for(var i=0; i<filters.length; i++){
        var filter = filters[i];
        if(filter.internal_name === internal_name){
            return filter;
        }
    }
    return null;
}

export const SaveFilters = (value) => {
    addItemToLocalStorage('filters', value);
}

export const ClearAllFilters = () => {
    if (typeof(Storage) !== "undefined") {
        addItemToLocalStorage('filters', []);
    } else {
        // Sorry! No Web Storage support..
    }
}

const addItemToLocalStorage = (name, value) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(value));
    } else {
        // Sorry! No Web Storage support..
    }
}

const getItemFromLocalStorage = (name) => {
    if (typeof(Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(name));
    } else {
        // Sorry! No Web Storage support..
    }
}

const removeItemFromLocalStorage = (name) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem(name);
    } else {
        // Sorry! No Web Storage support..
    }
}