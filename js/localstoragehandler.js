/**
 * Created by Erdierdal-laptop on 15-12-2014.
 */
// hier wordt een array gemaakt waar component prijzen in worden opgeslagen
var componenten = [];
// hier initialize we de int variable Sum waar we de totaalwaarde in gaan opslaan
var Sum = 0;
// in deze variable komt de int van de prijs
var itemPrice;
// deze variable hebben we nodig om de string versie van de int op te slaan
var itemPriceString;
// de volgende functions worden direct uitgevoerd wanneer de pagina klaar is met laden
(function(){

    setLocalProcessor();
    setLocalVideokaart();
    setLocalGeheugen();
    setLocalBehuizing();
    //setLocalHarddisk();
    setLocalMoederbord();
    setLocalVoeding();
    calculateSum();
})();
// deze functie bepaalt waar welke info verwerkt en geplaatst moet worden
// de functie heeft 5 variables nodig. IdText geeft de id van een div terug waar de IdTextKey(de value) in komt te staan
// hetzelfde geldt voor IdImage met IdImageKey
// IdPrice zal gebruikt worden om de prijs van een products te verwerken
function placeLocalData(IdText, IdTextKey, IdImage, IdImageKey, IdPrice){
    // hier wordt er vertelt welke localstorage key nodig is en waar het verwerkt moet worden
    document.getElementById(IdText).innerHTML = window.localStorage.getItem(IdTextKey);
    // deze if statement zorgt ervoor dat de source van de plaatjes pas worden aangepast als deze niet leeg zijn.
    if (IdImageKey!=null ) {
        //hier wordt beschreven welke source van een id met bijbehorende data gewijzigd moet worden.
        document.getElementById(IdImage).src = window.localStorage.getItem(IdImageKey);
    }
    // dezelfde soort controle wordt uitgevoerd voor de prijs.
    if(window.localStorage.getItem(IdPrice)!=null){
        //hier wordt de integer van de prijs opgeslagen in de variable itemPrice
        itemPrice = window.localStorage.getItem(IdPrice);
        //hieronder wordt de string versie van itemPrice opgeslagen in itemPriceString
        itemPriceString = itemPrice.toString();
        // hier wordt de string doorverwezen naar de array, waar we later het totaal van gaan berekenen
        componenten.push(itemPriceString);
    }
}
// met deze functie gaan we berekenen wat de totaalprijs is van de gekozen componenten
function calculateSum(){
    // een kleine for loop die door de array heen gaat loopen
    for (var i=0;i<componenten.length;i++){
        // bij elke loop wordt het waarde van de huidige array[index] toegevoegd aan onze Sum variable
        Sum+=parseInt(componenten[i]);
    }
    // hetzelfde trucje moeten we ook op de Sum variable uitvoeren
    SumString = Sum.toString();
    // als laatst printen we de string versie van Sum uit
    document.getElementById('totaalprijs').innerHTML = SumString;
}


function setLocalProcessor() {
    // de implementatie van placelocaldata
    placeLocalData('writeProcessor', 'Processor', 'writeProcessorImage', 'ProcessorImage', 'ProcessorPrijs');
}
function setLocalVideokaart(){
    placeLocalData('writeVideokaart', 'Videokaart', 'writeVideokaartImage', 'VideokaartImage', 'VideokaartPrijs');
}
function setLocalGeheugen(){
    placeLocalData('writeGeheugen', 'Geheugen', 'writeGeheugenImage', 'GeheugenImage', 'GeheugenPrijs');
}
function setLocalBehuizing(){
    placeLocalData('writeBehuizing', 'Behuizing', 'writeBehuizingImage', 'BehuizingImage', 'BehuizingPrijs');
}
function setLocalHarddisk(){
    placeLocalData('writeHarddisk', 'Harddisk', 'writeHarddiskImage', 'HarddiskImage', 'HarddiskPrijs');
}
function setLocalMoederbord(){
    placeLocalData('writeMoederbord', 'Moederbord', 'writeMoederbordImage', 'MoederbordImage', 'MoederbordPrijs');
}
function setLocalVoeding(){
    placeLocalData('writeVoeding', 'Voeding', 'writeVoedingImage', 'VoedingImage','VoedingPrijs');
}
