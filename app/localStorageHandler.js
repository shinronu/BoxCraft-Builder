/**
 * Created by Erdierdal-laptop on 15-12-2014.
 */
function HomePageSetter(){// de volgende functions worden direct uitgevoerd wanneer de pagina klaar is met laden
    setAllImages();
}
function BestelPageSetter(){
    arrayPriceHandler();
    setAllComponentData();
    calculateSum();
}
function saveToLocalStorage (LSKEY, LSKEY2, LSKEY3, $scope) {
    $scope.addToLocalStorage = function (LSVALUE, LSVALUE2, LSVALUE3) {
        // De functie zorgt ervoor dat er 3 custom values worden meegegeven, hierdoor kan er met
        // één klik drie waardes opgeslagen worden naam, prijs en img_link van het product
        localStorage.setItem(LSKEY, LSVALUE);
        localStorage.setItem(LSKEY2, LSVALUE2);
        localStorage.setItem(LSKEY3, LSVALUE3);
        // Het opslaan van de meegekregen values naar de local storage
        document.getElementById(LSKEY).innerHTML = localStorage.getItem("ItemName");
        document.getElementById(LSKEY2).innerHTML = localStorage.getItem("ItemName");
        document.getElementById(LSKEY3).innerHTML = localStorage.getItem("ItemName");
        //het oplaan van de gekozen specifieke artikel, dit wordt gebruikt om de
        // gemaakte keuzes te laten zien

    }
}
// deze functie bepaalt waar welke info verwerkt en geplaatst moet worden
// de functie heeft 3 variables nodig. IdText geeft de id van een div de value in komt te staan
// hetzelfde geldt voor IdImage. IdPrice zal gebruikt worden om de prijs van een products te verwerken
function placeLocalData(IdText, IdImage, IdPrice){
    document.getElementById(IdText).innerHTML = window.localStorage.getItem(IdText);// hier wordt er vertelt welke localstorage key nodig is en waar het verwerkt moet worden
    document.getElementById(IdPrice).innerHTML = window.localStorage.getItem(IdPrice);
    if(localStorage.getItem(IdImage)!==null) {// deze if statement zorgt ervoor dat de source van de plaatjes pas worden aangepast als deze niet leeg zijn.
        document.getElementById(IdImage).src = window.localStorage.getItem(IdImage)//hier wordt beschreven welke source van een id met bijbehorende data gewijzigd moet worden.
    }
}
function placeAllImages(IdImage){
    if(localStorage.getItem(IdImage)!==null) {// deze if statement zorgt ervoor dat de source van de plaatjes pas worden aangepast als deze niet leeg zijn.
        document.getElementById(IdImage).src = window.localStorage.getItem(IdImage)//hier wordt beschreven welke source van een id met bijbehorende data gewijzigd moet worden.
    }
}
function setAllImages(){
    for(var i=0; i<idImageArray.length;i++){
        placeAllImages(idImageArray[i]);
    }
}
function setAllComponentData(){
    for(var i=0; i<idTextArray.length;i++){
        placeLocalData(idTextArray[i],idImageArray[i],idPriceArray[i]);
    }
}