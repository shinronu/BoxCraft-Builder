var myApp = angular.module('myApp', []);

myApp.controller('MyGeheugenController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/geheugen?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.geheugen = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(geheugename){
        localStorage.setItem("Geheugen", geheugename);
        // opzoeken van de opgeslagen item
        document.getElementById("Geheugen").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
// einde van geheugen controllera
myApp.controller('MyProcessorController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/processoren?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.processor = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(processorname){
        localStorage.setItem("Processor", processorname);
        // opzoeken van de opgeslagen item
        document.getElementById("Processor").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
//einde van processor controller

myApp.controller('MyVideoController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/videokaarten/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.video = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(videokaartname){
        localStorage.setItem("Videokaart", videokaartname);
        // opzoeken van de opgeslagen item
        document.getElementById("Videokaart").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
// einde van videokaart controller
myApp.controller('MyBehuizingController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/behuizingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.harddisk = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(behuizingname){
        localStorage.setItem("Harddisk", behuizingname);
        // opzoeken van de opgeslagen item
        document.getElementById("Harddisk").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
//einde van harddisk controller
myApp.controller('MyMoederboordController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/moederborden/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.moederboord = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(moederboordname){
        localStorage.setItem("Moederboord", moederboordname);
        // opzoeken van de opgeslagen item
        document.getElementById("Moederboord").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
//einde van moederboord controller
myApp.controller('MyVoedingController', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/voedingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ').success(function(data) {
        $scope.voeding = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(voedingname){
        localStorage.setItem("Voeding", voedingname);
        // opzoeken van de opgeslagen item
        document.getElementById("Voeding").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
//einde van Voeding controller