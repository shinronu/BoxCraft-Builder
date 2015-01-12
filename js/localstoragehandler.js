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
        setLocalMoederboord();
        setLocalVoeding();
        calculateSum();
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
    document.getElementById('writeprocessor').innerHTML = window.localStorage.getItem("Processor");
    getComponentPrijs("ProcessorPrijs");
}
function setLocalVideokaart(){
    document.getElementById('writevideokaart').innerHTML = window.localStorage.getItem("Videokaart");
    getComponentPrijs("VideokaartPrijs");
}
function setLocalGeheugen(){
    document.getElementById('writegeheugen').innerHTML = window.localStorage.getItem("Geheugen");
    getComponentPrijs("GeheugenPrijs");
}
function setLocalBehuizing(){
    document.getElementById('writebehuizing').innerHTML = window.localStorage.getItem("Behuizing");
    getComponentPrijs("BehuizingPrijs");
}
function setLocalHarddisk(){
    document.getElementById('writehardisk').innerHTML = window.localStorage.getItem("Harddisk");
    getComponentPrijs("HarddiskPrijs");
}
function setLocalMoederboord(){
    document.getElementById('writemb').innerHTML = window.localStorage.getItem("Moederboord");
    getComponentPrijs("MoederboordPrijs");
}
function setLocalVoeding(){
    document.getElementById('writevoeding').innerHTML = window.localStorage.getItem("Voeding");
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