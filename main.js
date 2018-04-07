const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


function xhrload () {
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.planets);
    addEventTarget();
};
function domPlanetPicData () { 
    const data = JSON.parse(this.responseText);
    console.log("data 2", data);
    domPlanetPic(data.planets);
};

function domPlanetCardData () {
    const data = JSON.parse(this.responseText);
    console.log("data 3", data);
    domPlanetCard(data.planets);
};

const domString = (planetsArray) =>{
    let domString="";
    for (let i = 0; i < planetsArray.length; i++) {
        domString += `<div class="cards" >`;
        domString += `<p id="p-name"> ${planetsArray[i].name} </p>`;
        domString += `<img id="i-name"src="${planetsArray[i].imageUrl}">`;
        domString += `</div>`;
    }
    printToDom(domString,"main")
};

function xhrfail(){
        console.log("fail");
    }
const addEventTarget = () => {
    const eTarget = document.getElementsByClassName("cards");
    for (let i = 0; i < eTarget.length; i++) {
        eTarget[i].addEventListener("mouseenter", domPlanetCard);
        // eTarget[i].addEventListener("mouseout", domPlanetPic);
    }
}
const domPlanetPic = (e) => {
    console.log(e);
};
const domPlanetCard = (e) => {

};

const startApplication = () => {    
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", xhrload);
    myRequest.addEventListener("load", domPlanetCardData);
    myRequest.addEventListener("load", domPlanetPicData);
    myRequest.addEventListener("error", xhrfail);
    myRequest.open("GET", "planets.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};
startApplication();
