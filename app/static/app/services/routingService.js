/**
 * Created by darryl on 19-1-15.
 */
(function () {
    angular
        .module("boxCraftApp")
        .config(function ($routeProvider) {
            $routeProvider.
                when('/behuizingen', {
                    templateUrl: 'partials/behuizingen.html',
                    controller: 'listController'
                }).
                when('/processoren', {
                    templateUrl: 'partials/processoren.html',
                    controller: 'listController'
                }).
                when('/moederborden', {
                    templateUrl: 'partials/moederborden.html',
                    controller: 'listController'
                }).
                when('/videokaarten', {
                    templateUrl: 'partials/videokaarten.html',
                    controller: 'listController'
                }).
                when('/voedingen', {
                    templateUrl: 'partials/voedingen.html',
                    controller: 'listController'
                }).
                when('/geheugen', {
                    templateUrl: 'partials/geheugen.html',
                    controller: 'listController'
                }).
                when('/harddisks', {
                    templateUrl: 'partials/harddisks.html',
                    controller: 'listController'
                }).
                when('/samenstellen', {
                    templateUrl: 'partials/samenstellen.html',
                    controller: 'orderController'
                }).
                when('/', {
                    templateUrl: 'partials/overzicht.html',
                    controller: 'overviewController'
                }).
                when('/index.html', {
                    redirectTo: '/'
                }).
                otherwise({
                    redirectTo: '/'
                });
            });
}());