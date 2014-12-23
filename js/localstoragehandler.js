/**
 * Created by Erdierdal-laptop on 15-12-2014.
 */
var snippet = localStorage.getItem("ItemName");


function WordReplacer(){
    document.getElementById("opmaaknaam").innerHTML.replaceWith(snippet);
}


function setLocalStorage() {
    localStorage.setItem("ItemName", this.document.getElementById("itemname").innerHTML);
    // Retrieve
    document.getElementById("Processor").innerHTML = localStorage.getItem("ItemName");
}