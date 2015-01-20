var myApp = angular.module('myApp', []);

const VIDEOKAART_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/videokaarten/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const PROCESSOR_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/processoren?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const GEHEUGEN_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/geheugen?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const BEHUIZING_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/behuizingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const MOEDERBOORD_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/moederborden/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const VOEDING_URL = 'https://api.mongolab.com/api/1/databases/boxcraft_hardware_components/collections/voedingen/?apiKey=3l8YogXApuPUFwSzFuW0Z8WrBf3pMwTQ';
const HARDDISK_URL = '';

myApp.controller('MyGeheugenController', ['$scope', '$http', function($scope, $http) {
    $http.get(GEHEUGEN_URL).success(function(data) {
        //ophalen van juiste soort artikellen vanuit database
        $scope.items = data;
        //het binden van de resultaten aan data
        saveToLocalStorage('Geheugen','GeheugenPrijs', 'GeheugenImage', $scope);
        // hier geven we de twee keys de naam en de prijs en de $scope(situatie/status). De scope
        // zal naam  en prijs gaan opslaan en deze zullen gebruikt worden om ze op het scherm
        // te laten zien.
    });
}]);// einde van geheugen controller
myApp.controller('MyProcessorController', ['$scope', '$http', function($scope, $http) {
    $http.get(PROCESSOR_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Processor', 'ProcessorPrijs', 'ProcessorImage', $scope);
    });
}]);
//einde van processor controller

myApp.controller('MyVideoController', ['$scope', '$http', function($scope, $http) {
    $http.get(VIDEOKAART_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Videokaart','VideokaartPrijs', 'VideokaartImage', $scope);
    });
}]);
// einde van videokaart controller

myApp.controller('MyHarddiskController', ['$scope', '$http', function($scope, $http) {
    $http.get(BEHUIZING_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Harddisk','HarddiskPrijs','HarddiskImage', $scope);
    });
}]);
//einde van harddisk controller

myApp.controller('MyMoederbordController', ['$scope', '$http', function($scope, $http) {
    $http.get(MOEDERBOORD_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Moederbord','MoederbordPrijs' , 'MoederbordImage', $scope);
    });
}]);
//einde van moederboord controller

myApp.controller('MyVoedingController', ['$scope', '$http', function($scope, $http) {
    $http.get(VOEDING_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Voeding','VoedingPrijs' , 'VoedingImage', $scope);
    });
}]);
//einde van Voeding controller

myApp.controller('MyBehuizingController', ['$scope', '$http', function($scope, $http) {
    $http.get(BEHUIZING_URL).success(function(data) {
        $scope.items = data;
        saveToLocalStorage('Behuizing', 'BehuizingPrijs', 'BehuizingImage'. $scope);
    });
}]);
//einde van Behuizing controller