/**
 * Created by Erdierdal-laptop on 14-1-2015.
 */
var Sum = 0;  // hier initialize we de int variable Sum waar we de totaalwaarde in gaan opslaan
var SumString = '';
function calculateSum(){// met deze functie gaan we berekenen wat de totaalprijs is van de gekozen componenten
    for (var i=0;i<priceArray.length;i++){// een kleine for loop die door de array heen gaat loopen
        Sum+=parseInt(priceArray[i]);// bij elke loop wordt het waarde van de huidige array[index] toegevoegd aan onze Sum variable
    }
    SumString = Sum.toString();// hetzelfde trucje moeten we ook op de Sum variable uitvoeren
    document.getElementById('totaalprijs').innerHTML = SumString;// als laatst printen we de string versie van Sum uit
}