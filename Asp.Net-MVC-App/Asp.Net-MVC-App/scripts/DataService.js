(function () {
    var DataService = function ($http) {

        this.GetSuggestions = function (text) {
            return $http.get("/api/individuals/suggestions/?text=" + text);
        }

        this.GetQuicklinks = function () {
            return $http.get("/api/quicklinks/");
        }

        this.GetIndividuals = function (filter) {
            console.log(JSON.stringify(filter));
            console.log("type=" + filter.internal_name + "&" + "value=" + filter.value);
            return $http.get("/api/individuals/?type=" + filter.internal_name + "&" + "value=" + filter.value);
        }

        this.GetIndividual = function (id) {
            return $http.get("/api/individuals/?id=" + id);
        }
    };

    app.service("DataService", ["$http", DataService]);
}());