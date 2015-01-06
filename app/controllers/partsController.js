var myApp = angular.module('myApp', []);

const VIDEOKAART_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/videokaarten/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const PROCESSOR_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/processoren?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const GEHEUGEN_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/geheugen?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const BEHUIZING_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/behuizingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const MOEDERBOORD_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/moederborden/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const VOEDING_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/voedingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';


function saveToLocalStorage (LSKEY, $scope) {
    $scope.addToLocalStorage = function (LSVALUE) {
        localStorage.setItem(LSKEY, LSVALUE);
        document.getElementById(LSKEY).innerHTML = localStorage.getItem("ItemName");
    }
}

myApp.controller('MyGeheugenController', ['$scope', '$http', function($scope, $http) {
    $http.get(GEHEUGEN_URL).success(function(data) {
        $scope.geheugen = data;
    });
    //ophalen van juiste soort artikellen vanuit database
    $scope.addToLocalStorage = function(geheugename){
        localStorage.setItem("Geheugen", geheugename);
        // opzoeken van de opgeslagen item
        document.getElementById("Geheugen").innerHTML = localStorage.getItem("ItemName");
    }//het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de gemaakte keuzes te laten zien
}]);
// einde van geheugen controller
myApp.controller('MyProcessorController', ['$scope', '$http', function($scope, $http) {
    $http.get(PROCESSOR_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Processor', $scope);
    });
}]);
//einde van processor controller
myApp.controller('MyVideoController', ['$scope', '$http', function($scope, $http) {
    $http.get(VIDEOKAART_URL).success(function(data) {
        $scope.video = data;
    });
    $scope.addToLocalStorage = function(videokaartname){
        localStorage.setItem("Videokaart", videokaartname);
        document.getElementById("Videokaart").innerHTML = localStorage.getItem("ItemName");
    }
}]);
// einde van videokaart controller
myApp.controller('MyBehuizingController', ['$scope', '$http', function($scope, $http) {
    $http.get(BEHUIZING_URL).success(function(data) {
        $scope.harddisk = data;
    });
    $scope.addToLocalStorage = function(behuizingname){
        localStorage.setItem("Harddisk", behuizingname);
        document.getElementById("Harddisk").innerHTML = localStorage.getItem("ItemName");
    }
}]);
//einde van harddisk controller
myApp.controller('MyMoederboordController', ['$scope', '$http', function($scope, $http) {
    $http.get(MOEDERBOORD_URL).success(function(data) {
        $scope.moederboord = data;
    });
    $scope.addToLocalStorage = function(moederboordname){
        localStorage.setItem("Moederboord", moederboordname);
        document.getElementById("Moederboord").innerHTML = localStorage.getItem("ItemName");
    }
}]);
//einde van moederboord controller
myApp.controller('MyVoedingController', ['$scope', '$http', function($scope, $http) {
    $http.get(VOEDING_URL).success(function(data) {
        $scope.voeding = data;
    });
    $scope.addToLocalStorage = function(voedingname){
        localStorage.setItem("Voeding", voedingname);
        document.getElementById("Voeding").innerHTML = localStorage.getItem("ItemName");
    }
}]);
//einde van Voeding controller