/**
 * Created by Erdierdal-laptop on 15-12-2014.
 */
var componenten = [];
function setLocalData(){
    if(localStorage!=null) {
        setLocalProcessor();
        setLocalVideokaart();
        setLocalGeheugen();
        setLocalBehuizing();
        //setLocalHarddisk();
        setLocalMoederbord();
        setLocalVoeding();
        calculateSum();
    }
}
function placeLocalData(IdText, IdTextKey, IdImage, IdImageKey){
    if(IdTextKey!=null) {
        document.getElementById(IdText).innerHTML = window.localStorage.getItem(IdTextKey);
    }
    if (IdImageKey!=null) {
        document.getElementById(IdImage).src = window.localStorage.getItem(IdImageKey);
    }
}

function getComponentPrijs(KEY){
    var itemPrice;
    var itemPriceString;
    if (window.localStorage.getItem(KEY)!=null){
        itemPrice = window.localStorage.getItem(KEY);
        itemPriceString = itemPrice.toString();
        componenten.push(itemPriceString);
    }
}

function setLocalProcessor() {
    placeLocalData('writeProcessor', 'Processor', 'writeProcessorImage', 'ProcessorImage');
    getComponentPrijs("ProcessorPrijs");
}
function setLocalVideokaart(){
    placeLocalData('writeVideokaart', 'Videokaart', 'writeVideokaartImage', 'VideokaartImage');
    getComponentPrijs("VideokaartPrijs");
}
function setLocalGeheugen(){
    placeLocalData('writeGeheugen', 'Geheugen', 'writeGeheugenImage', 'GeheugenImage');
    getComponentPrijs("GeheugenPrijs");
}
function setLocalBehuizing(){
    placeLocalData('writeBehuizing', 'Behuizing', 'writeBehuizingImage', 'BehuizingImage');
    getComponentPrijs("BehuizingPrijs");
}
function setLocalHarddisk(){
    placeLocalData('writeHarddisk', 'Harddisk', 'writeHarddiskImage', 'HarddiskImage');
    getComponentPrijs("HarddiskPrijs");
}
function setLocalMoederbord(){
    placeLocalData('writeMoederbord', 'Moederbord', 'writeMoederbordImage', 'MoederbordImage');
    getComponentPrijs("MoederbordPrijs");
}
function setLocalVoeding(){
    placeLocalData('writeVoeding', 'Voeding', 'writeVoedingImage', 'VoedingImage');
    getComponentPrijs("VoedingPrijs");
}
function calculateSum(){
    var Sum = 0;
    for (var i=0;i<componenten.length;i++){
        Sum+=parseInt(componenten[i]);
    }
    SumString = Sum.toString();
    document.getElementById('totaalprijs').innerHTML = SumString;
}