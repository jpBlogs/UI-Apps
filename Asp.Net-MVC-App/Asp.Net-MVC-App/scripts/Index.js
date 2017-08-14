(function () {
    var SearchPageController = function ($scope, $rootScope, DataService, FiltersService) {
        var SetQuicklinks = function (response) {
            $scope.quicklinks = response.data;
        }

        var OnError = function (error) {
            $scope.error = error.message;
        }

        var GoToResultsPage = function () {
            window.location.href = "search/results";
        }

        var OnQuicklinkSelect = function (InternalName, Value) {
            FiltersService.AddFilter(InternalName, Value);
            GoToResultsPage();
        }

        $scope.OnQuicklinkSelect = OnQuicklinkSelect;
        $rootScope.$on("OnAutocompleteSelect", function () {
            GoToResultsPage();
        });

        DataService.GetQuicklinks()
            .then(SetQuicklinks, OnError);
    };

    app.controller("SearchPageController", ["$scope", "$rootScope", "DataService", 'FiltersService', SearchPageController]);
}());