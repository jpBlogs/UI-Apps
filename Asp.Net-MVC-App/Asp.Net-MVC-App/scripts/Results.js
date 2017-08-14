(function () {
    var ResultsPageController = function ($scope, $rootScope, DataService, FiltersService) {
        // Define functions
        var GetFilters = function () {
            $scope.filter = FiltersService.GetFilter();
        }

        var GetResults = function () {
            DataService.GetIndividuals($scope.filter)
                .then(function (response) {
                    $scope.results = response.data;
                }, OnError);
        }

        var OnError = function (error) {
            $scope.error = error.message;
        }

        var RefreshPage = function () {
            GetFilters();
            GetResults();
        }

        var GoToDetails = function (id) {
            window.location.href = "details/" + id;
        }

        var GoToLocations = function (id) {
            window.location.href = "details/" + id + "/location";
        }

        var GoBack = function () {
            window.history.go(-1);
            return false;
        }

        // Initialize $scope items
        $rootScope.$on("OnAutocompleteSelect", function () {
            RefreshPage();
        });
        $scope.RefreshPage = RefreshPage;
        $scope.GoToDetails = GoToDetails;
        $scope.GoToLocations = GoToLocations;
        $scope.GoBack = GoBack;

        // Call page setup functions
        RefreshPage();
    };

    app.controller("ResultsPageController", ["$scope", "$rootScope", "DataService", "FiltersService", ResultsPageController]);
}());