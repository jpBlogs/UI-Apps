(function () {
    var AutocompleteController = function ($scope, $rootScope, DataService, FiltersService) {

        var GetSuggestions = function (text) {
            $scope.error = null;
            return DataService.GetSuggestions(text)
                        .then(function (response) {
                            console.log(JSON.stringify(response));
                            return response.data;
                        }, OnError);
        }

        var OnError = function (error) {
            $scope.error = error.message;
        }

        var OnSuggestionSelect = function (item, model, label, event) {
            console.log(JSON.stringify(model));
            FiltersService.AddFilter('FullName', model.Value);
            $rootScope.$emit("OnAutocompleteSelect", {});
        }

        $scope.GetSuggestions = GetSuggestions;
        $scope.OnSuggestionSelect = OnSuggestionSelect;
    };

    app.controller("AutocompleteController", ["$scope", "$rootScope", "DataService", 'FiltersService', AutocompleteController]);
}());