(function () {
    var FiltersService = function () {

        //***********Private Methods*************/
        /**
         * Save item to local storage
         */
        var addItemToSessionStorage = function (name, value) {
            if (typeof (Storage) !== "undefined") {
                sessionStorage.setItem(name, JSON.stringify(value));
            } else {
                // Sorry! No Web Storage support..
            }
        }

        /**
         * Get item from local storage
         */
        var getItemFromSessionStorage = function (name) {
            if (typeof (Storage) !== "undefined") {
                return JSON.parse(sessionStorage.getItem(name));
            } else {
                // Sorry! No Web Storage support..
            }
        }

        /**
         * removeItemFromLocalStorage
         * Remove item from local storage
         */
        var removeItemFromSessionStorage = function (name) {
            if (typeof (Storage) !== "undefined") {
                sessionStorage.removeItem(name);
            } else {
                // Sorry! No Web Storage support..
            }
        }

        //***********Public Methods*************/
        /**
           * Get all filters
           */
        this.GetFilter = function () {
            return getItemFromSessionStorage('filter');
        }

        /**
           * Add a new filter to the filter list
           */
        this.AddFilter = function (internal_name, value) {
            addItemToSessionStorage('filter', { 'internal_name': internal_name, 'value': value });
        }

        /**
           * Clears all filters
           */
        this.ClearFilter = function () {
            addItemToSessionStorage('filter', {});
        }
    };

    app.service("FiltersService", [FiltersService]);
}());