/**
 * Created by darryl on 19-1-15.
 */

(function () {
    function listController($http, $location) {
        var vm = this;
        var path = $location.path();
        $http({method: 'GET', url: '/api' + path})
            .success(function(data){
                vm.product = data.objects;
                vm.totalPages = parseInt(data.total_pages);
                vm.totalProducts = parseInt(data.num_results);
                vm.currentPage = parseInt(data.page);
            });

        vm.pageChanged = function() {
            var path = $location.path();
            $http({method: 'GET', url: '/api' + path, params: {page: vm.currentPage}})
                .success(function (data) {
                    vm.product = data.objects;
                    vm.totalPages = parseInt(data.total_pages);
                    vm.totalProducts = parseInt(data.num_results);
                    vm.currentPage = parseInt(data.page);
                });
        };

        vm.store = function (item) {
            var key = item.product_type;
            localStorage[key] = JSON.stringify(item);
        }
    }

    angular
        .module("boxCraftApp")
        .controller("listController", [
            '$http',
            '$location',
            listController
        ]);
}());