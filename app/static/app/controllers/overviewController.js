/**
 * Created by darryl on 20-1-15.
 */

(function () {
    function overviewController(appConfig) {
        var vm = this;
        vm.productImages = {};
        vm.toolTips = {};
        vm.btnCls = {};
        vm.btnTxt = {};
        vm.productTypes = appConfig.productTypes;
        vm.productPaths = appConfig.productPaths;
        for (var i = 0; i < vm.productTypes.length; i++) {
            var v = vm.productTypes[i];
            if (v in localStorage) {
                var storedItem = JSON.parse(localStorage[v]);
                vm.productImages[v] = storedItem.img_link;
                vm.toolTips[v] = storedItem.manufacturer + " " +
                storedItem.name;
                vm.btnCls[v] = 'btn-success';
                vm.btnTxt[v] = 'Wijzigen';
            } else {
                vm.productImages[v] = "/images/" + appConfig.stockImages[v];
                vm.toolTips[v] = "Selecteer uw " + v.toLowerCase();
                vm.btnCls[v] = 'btn-primary';
                vm.btnTxt[v] = 'Selecteren';
            }
        }
    }

    angular
        .module("boxCraftApp")
        .controller("overviewController", [
            'appConfig',
            overviewController
        ]).filter('slice', function() {
          return function(arr, start, end) {
            return (arr || []).slice(start, end);
          };
        });
}());