angular.module('app');

angular.module('app').controller('fcfController', ['$scope', '$log', function($scope, $log) {
    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
}]);
