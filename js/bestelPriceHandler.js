/**
 * Created by Erdierdal-laptop on 14-1-2015.
 */
var IdPriceArray = ['BehuizingPrijs','ProcessorPrijs', 'VideokaartPrijs', 'HarddiskPrijs', 'GeheugenPrijs', 'MoederbordPrijs', 'VoedingPrijs'];
function placeLocalPrice(IdPrice, IdPriceKey) {
    document.getElementById(IdPrice).innerHTML = window.localStorage.getItem(IdPriceKey);
}
function setAllComponentPrice(){
    for (var i = 0; i<IdPriceArray.length;i++)
        placeLocalPrice(IdPriceArray[i],IdPriceArray[i]);
}