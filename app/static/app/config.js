/**
 * Created by darryl on 21-1-15.
 */

(function () {
    var productTypes = [
        'Behuizing',
        'Geheugen',
        'Moederbord',
        'Harde schijf',
        'Processor',
        'Grafische kaart',
        'Voeding'
    ];
    var productPaths = {
        'Behuizing': 'behuizingen',
        'Geheugen': 'geheugen',
        'Moederbord': 'moederborden',
        'Harde schijf': 'harddisks',
        'Processor': 'processoren',
        'Grafische kaart': 'videokaarten',
        'Voeding': 'voedingen'
    };
    var stockImages = function () {
        var res = {};
        for (var i = 0; i < productTypes.length; i++) {
            var productType = productTypes[i];
            res[productType] = productType
                .replace(' ', '-')
                .toLowerCase() + '.png';
        }
        return res;
    };

    angular
        .module('boxCraftApp')
        .constant("appConfig", {
            productTypes: productTypes,
            stockImages: stockImages(),
            productPaths: productPaths
        });
}());