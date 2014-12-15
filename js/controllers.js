var myApp = angular.module('myApp', []);

myApp.controller('MyGeheugenController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/geheugen?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
    $scope.geheugen = data;
  });
}]);

myApp.controller('MyProcessorController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/processoren?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.processor = data;
    });
}]);

