(function () {
    var DetailsController = function ($scope, DataService) {
        var map = null;
        var mapCenter = null;

        var SetupPage = function (response) {
            $scope.result = response.data;
            ChangeTab(tabId);
        }

        var ChangeTab = function (id) {
            $scope.SelectedTab = id;
            if (id == 'location' && map == null) {
                mapCenter = new google.maps.LatLng($scope.result.Lat, $scope.result.Long);
                var mapProp = {
                    center: mapCenter,
                    zoom: 8,
                };
                map = new google.maps.Map(document.getElementById("DetailsMap"), mapProp);
                var marker = new google.maps.Marker({ position: mapCenter });
                marker.setMap(map);
            }
        }

        var GoBack = function () {
            window.history.go(-1);
            return false;
        }

        var OnError = function (error) {
            $scope.error = error.message;
        }

        DataService.GetIndividual(id)
                .then(SetupPage, OnError);

        $scope.ChangeTab = ChangeTab;
        $scope.GoBack = GoBack;
    };

    app.controller("DetailsController", ["$scope", "DataService", DetailsController]);
}());