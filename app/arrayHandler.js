/**
 * Created by Erdierdal-laptop on 19-1-2015.
 */
// hier wordt een array gemaakt waar component prijzen in worden opgeslagen
var intPriceArray = [];
var idTextArray = ['Behuizing','Processor','Videokaart','Harddisk','Geheugen','Moederbord','Behuizing'];
var idImageArray = ['BehuizingImage','ProcessorImage','VideokaartImage','HarddiskImage'
    ,'GeheugenImage','MoederbordImage','VoedingImage'];
var idPriceArray = ['BehuizingPrijs','ProcessorPrijs', 'VideokaartPrijs', 'HarddiskPrijs',
    'GeheugenPrijs', 'MoederbordPrijs', 'VoedingPrijs'];

var itemPrice;  // in deze variable komt de int van de prijs
var itemPriceString;  // deze variable hebben we nodig om de string versie van de int op te slaan

function arrayPriceHandler(IdPrice) {
    if(window.localStorage.getItem(IdPrice)!=null){// dezelfde soort controle wordt uitgevoerd voor de prijs.
        itemPrice = window.localStorage.getItem(IdPrice);//hier wordt de integer van de prijs opgeslagen in de variable itemPrice
        itemPriceString = itemPrice.toString();//hieronder wordt de string versie van itemPrice opgeslagen in itemPriceString
        intPriceArray.push(itemPriceString);// hier wordt de string doorverwezen naar de array, waar we later het totaal van gaan berekenen
    }
}