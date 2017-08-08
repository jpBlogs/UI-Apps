//***********Public Methods*************/

/**
   * Get all filters
   */
export const GetFilters = () => {
    return getItemFromLocalStorage('filters');
}

/**
   * Add a new filter to the filter list
   */
export const AddFilter = (display_name, internal_name, value) => {
    var filters =  getItemFromLocalStorage('filters');
    filters.push({ 'display_name': display_name, 'internal_name': internal_name, 'value': value });
    addItemToLocalStorage('filters', filters);
}

/**
   * Get a filter by name from the filter list
   */
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

/**
   * Clears all filters
   */
export const ClearAllFilters = () => {
    addItemToLocalStorage('filters', []);
}

//***********Private Methods*************/
/**
   * Save item to local storage
   */
const addItemToLocalStorage = (name, value) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(value));
    } else {
        // Sorry! No Web Storage support..
    }
}

/**
   * Get item from local storage
   */
const getItemFromLocalStorage = (name) => {
    if (typeof(Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(name));
    } else {
        // Sorry! No Web Storage support..
    }
}

/**
   * Remove item from local storage
   */
const removeItemFromLocalStorage = (name) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem(name);
    } else {
        // Sorry! No Web Storage support..
    }
}