/**
 * Created by Erdierdal-laptop on 14-1-2015.
 */
var IdPriceArray = ['BehuizingPrijs','ProcessorPrijs', 'VideokaartPrijs', 'HarddiskPrijs', 'GeheugenPrijs', 'MoederbordPrijs', 'VoedingPrijs'];
function placeLocalPrice(IdPrice) {
    document.getElementById(IdPrice).innerHTML = window.localStorage.getItem(IdPrice);
}
function setAllComponentPrice(){
    for (var i = 0; i<IdPriceArray.length;i++)
        placeLocalPrice(IdPriceArray[i]);
}