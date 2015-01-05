/**
 * Created by Erdierdal-laptop on 15-12-2014.
 */

function setLocalData(){
    if(localStorage!=null) {
        setLocalProcessor();
        setLocalVideokaart();
        setLocalGeheugen();
        setLocalBehuizing();
       // setLocalHarddisk();
        setLocalMoederboord();
        setLocalVoeding();
    }
}

function setLocalProcessor() {
        document.getElementById('writeprocessor').innerHTML = window.localStorage.getItem("Processor");
}
function setLocalVideokaart(){
        document.getElementById('writevideokaart').innerHTML = window.localStorage.getItem("Videokaart");
}
function setLocalGeheugen(){
    document.getElementById('writegeheugen').innerHTML = window.localStorage.getItem("Geheugen");
}
function setLocalBehuizing(){
    document.getElementById('writebehuizing').innerHTML = window.localStorage.getItem("Behuizing");
}
function setLocalHarddisk(){
    document.getElementById('writehardisk').innerHTML = window.localStorage.getItem("Hardisk");
}
function setLocalMoederboord(){
    document.getElementById('writemb').innerHTML = window.localStorage.getItem("Moederboord");
}
function setLocalVoeding(){
    document.getElementById('writevoeding').innerHTML = window.localStorage.getItem("Voeding");
}